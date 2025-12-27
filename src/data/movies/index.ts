/**
 * Punto de entrada principal del módulo de películas
 * 
 * Uso:
 * import { movies, getMovieById, Movie } from "@/data/movies";
 */

// Re-exportar tipos
export type { Movie, Genre, Award, CastMember } from "./types";

// Re-exportar catálogo
export { movies, moviesByDecade } from "./catalog";

// Re-exportar validación (solo para desarrollo)
export { 
  validateCatalog, 
  validateMovie, 
  printValidationReport,
  getCatalogStats,
  type ValidationError 
} from "./validation";

// === FUNCIONES DE UTILIDAD ===

import { movies } from "./catalog";
import type { Movie } from "./types";

/**
 * Obtiene una película por su ID
 */
export function getMovieById(id: string): Movie | undefined {
  return movies.find((movie) => movie.id === id);
}

/**
 * Obtiene películas relacionadas (excluyendo la actual)
 */
export function getRelatedMovies(currentId: string, limit: number = 4): Movie[] {
  const currentMovie = getMovieById(currentId);
  
  if (!currentMovie) {
    return movies.slice(0, limit);
  }
  
  // Priorizar películas del mismo director o género
  const related = movies
    .filter((movie) => movie.id !== currentId)
    .sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;
      
      // Mismo director: +10 puntos
      if (a.director === currentMovie.director) scoreA += 10;
      if (b.director === currentMovie.director) scoreB += 10;
      
      // Géneros en común: +3 puntos por género
      const commonGenresA = a.genre.filter(g => currentMovie.genre.includes(g)).length;
      const commonGenresB = b.genre.filter(g => currentMovie.genre.includes(g)).length;
      scoreA += commonGenresA * 3;
      scoreB += commonGenresB * 3;
      
      // Década cercana: +2 puntos
      const decadeA = Math.floor(a.year / 10);
      const decadeB = Math.floor(b.year / 10);
      const currentDecade = Math.floor(currentMovie.year / 10);
      if (decadeA === currentDecade) scoreA += 2;
      if (decadeB === currentDecade) scoreB += 2;
      
      return scoreB - scoreA;
    });
  
  return related.slice(0, limit);
}

/**
 * Busca películas por texto
 */
export function searchMovies(query: string): Movie[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) return movies;
  
  return movies.filter((movie) => 
    movie.title.toLowerCase().includes(normalizedQuery) ||
    movie.director.toLowerCase().includes(normalizedQuery) ||
    movie.synopsis.toLowerCase().includes(normalizedQuery) ||
    movie.genre.some(g => g.toLowerCase().includes(normalizedQuery))
  );
}

/**
 * Filtra películas por género
 */
export function filterByGenre(genre: string): Movie[] {
  return movies.filter((movie) => 
    movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
  );
}

/**
 * Filtra películas por década
 */
export function filterByDecade(decade: number): Movie[] {
  return movies.filter((movie) => 
    Math.floor(movie.year / 10) * 10 === decade
  );
}

/**
 * Filtra películas por director
 */
export function filterByDirector(director: string): Movie[] {
  return movies.filter((movie) => 
    movie.director.toLowerCase().includes(director.toLowerCase())
  );
}
