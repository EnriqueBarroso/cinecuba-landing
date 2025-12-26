import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Configuración
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const tmdbApiKey = process.env.TMDB_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function procesarPeliculas() {
  console.log('🎬 Iniciando proceso de actualización de imágenes...');

  // 1. Obtener todas las películas de tu base de datos
  const { data: movies, error } = await supabase.from('movies').select('*');

  if (error) {
    console.error('Error al leer películas:', error);
    return;
  }

  console.log(`📋 Se encontraron ${movies.length} películas para procesar.`);

  // 2. Recorrer cada película
  for (const movie of movies) {
    try {
      console.log(`\n🔍 Buscando imágenes para: "${movie.title}"...`);

      // A. Buscar el ID de TMDB usando el título
      const searchRes = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${encodeURIComponent(movie.title)}&language=es-ES`
      );

      if (searchRes.data.results.length === 0) {
        console.log(`❌ No se encontró la película en TMDB.`);
        continue;
      }

      // Tomamos el primer resultado como el correcto
      const tmdbMovie = searchRes.data.results[0];
      const tmdbId = tmdbMovie.id;

      // B. Obtener las imágenes (backdrops) de esa película
      const imagesRes = await axios.get(
        `https://api.themoviedb.org/3/movie/${tmdbId}/images?api_key=${tmdbApiKey}` // Sin idioma para obtener todas
      );

      // Filtramos solo las horizontales (backdrops)
      const backdrops = imagesRes.data.backdrops;

      if (!backdrops || backdrops.length === 0) {
        console.log(`⚠️ Se encontró la peli, pero no tiene backdrops.`);
        continue;
      }

      // C. Seleccionamos las 3 mejores (o las que haya)
      const seleccionadas = backdrops.slice(0, 3);

      // D. Insertamos en tu base de datos
      for (let i = 0; i < seleccionadas.length; i++) {
        const imagen = seleccionadas[i];
        
        // Construimos la URL completa
        const fullUrl = `https://image.tmdb.org/t/p/original${imagen.file_path}`;
        
        // La primera imagen será la principal (para el Hero)
        const esPrincipal = (i === 0);

        const { error: insertError } = await supabase
          .from('imagenes_peliculas')
          .insert({
            movie_id: movie.id, // Tu UUID local
            url_imagen: fullUrl,
            es_principal: esPrincipal,
            descripcion: `Escena de ${movie.title}`
          });

        if (insertError) {
          console.error(`   Error guardando imagen: ${insertError.message}`);
        } else {
          console.log(`   ✅ Guardada imagen ${i + 1} ${esPrincipal ? '(HERO)' : ''}`);
        }
      }

    } catch (err) {
      console.error(`Error procesando ${movie.title}:`, err.message);
    }
  }

  console.log('\n🎉 ¡Proceso terminado!');
}

procesarPeliculas();