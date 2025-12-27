# Guía para Añadir Películas al Catálogo

Esta guía explica cómo añadir nuevas películas al catálogo del Cine Cubano.

## Pasos para Añadir una Nueva Película

### 1. Preparar el Poster

1. Obtén una imagen del poster en buena resolución (mínimo 300x450 px)
2. Nombra el archivo de forma descriptiva: `poster-nombre-pelicula.jpg`
3. Coloca el archivo en `src/assets/posters/`

### 2. Registrar el Poster

Abre `src/assets/posters/index.ts` y añade el import/export:

```typescript
// En la sección de la década correspondiente
export { default as posterNuevasPeliculas } from "@/assets/posters/poster-nuevas-peliculas.jpg";
```

### 3. Añadir la Película al Catálogo

Abre `src/data/movies/catalog.ts`:

1. Importa el poster en la sección de imports
2. Localiza la sección de la década correspondiente
3. Añade el objeto de la película:

```typescript
{
  id: "nombre-pelicula-año", // Formato: titulo-año, todo minúsculas, sin espacios
  title: "Nombre de la Película",
  year: 2024,
  director: "Nombre del Director",
  poster: posterNuevaPelicula, // El import del poster
  duration: "95 min", // Formato: "XX min"
  genre: ["Drama", "Comedia"], // Géneros válidos: Drama, Comedia, Documental, Histórico, Romance, Thriller, Musical, Animación, Experimental
  synopsis: "Una descripción de la película de al menos 50 caracteres...",
  
  // Campos opcionales:
  trailerUrl: "https://www.youtube.com/embed/VIDEO_ID", // URL de embed de YouTube
  awards: [
    { name: "Festival de La Habana", year: 2024, category: "Mejor Película" }
  ],
  cast: [
    { name: "Actor Principal", role: "Personaje" }
  ],
  country: "Cuba", // Default si no se especifica
  language: "Español",
  notes: "Curiosidades o información adicional"
}
```

### 4. Validar el Catálogo

Para verificar que no hay errores, puedes ejecutar la validación en la consola del navegador:

```javascript
import { movies, printValidationReport } from '@/data/movies';
printValidationReport(movies);
```

## Formato del ID

El ID debe seguir este formato:
- Todo en minúsculas
- Sin acentos ni caracteres especiales
- Espacios reemplazados por guiones
- Incluir el año si hay películas con el mismo nombre

Ejemplos:
- `lucia-1968`
- `fresa-chocolate-1993`
- `suite-habana-2003`

## Géneros Disponibles

| Género       | Descripción                           |
|--------------|---------------------------------------|
| Drama        | Películas dramáticas                  |
| Comedia      | Películas cómicas                     |
| Documental   | Documentales                          |
| Histórico    | Películas basadas en hechos históricos|
| Romance      | Películas románticas                  |
| Thriller     | Películas de suspenso                 |
| Musical      | Películas musicales                   |
| Animación    | Películas animadas                    |
| Experimental | Cine experimental o de autor          |

## Estructura de Archivos

```
src/data/movies/
├── index.ts          # Punto de entrada principal
├── types.ts          # Definiciones de tipos
├── catalog.ts        # Catálogo de películas
├── validation.ts     # Utilidades de validación
└── CONTRIBUTING.md   # Esta guía

src/assets/posters/
├── index.ts          # Índice de posters
└── *.jpg             # Imágenes de posters
```

## Verificación Final

Antes de confirmar los cambios:

1. ✅ El poster está en `src/assets/posters/`
2. ✅ El poster está exportado en `src/assets/posters/index.ts`
3. ✅ La película está añadida en la sección correcta de `catalog.ts`
4. ✅ El ID es único y sigue el formato correcto
5. ✅ Todos los campos obligatorios están completos
6. ✅ La validación no muestra errores

## Contacto

Si tienes dudas sobre cómo añadir películas, revisa las películas existentes como referencia.
