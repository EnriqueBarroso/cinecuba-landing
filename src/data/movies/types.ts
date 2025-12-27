/**
 * Tipos y definiciones para el catálogo de películas
 */

export interface Movie {
  /** ID único de la película (formato: titulo-año, ej: "lucia-1968") */
  id: string;
  
  /** Título de la película */
  title: string;
  
  /** Año de estreno */
  year: number;
  
  /** Director principal */
  director: string;
  
  /** Imagen del poster (import desde assets/posters) */
  poster: string;
  
  /** Sinopsis de la película */
  synopsis: string;
  
  /** Duración (formato: "XXX min") */
  duration: string;
  
  /** Géneros de la película */
  genre: Genre[];
  
  // === CAMPOS OPCIONALES ===
  
  /** URL del trailer (YouTube embed URL) */
  trailerUrl?: string;
  
  /** URL del video completo */
  videoUrl?: string;
  
  /** Premios recibidos */
  awards?: Award[];
  
  /** Elenco principal */
  cast?: CastMember[];
  
  /** País de producción (default: Cuba) */
  country?: string;
  
  /** Idioma original */
  language?: string;
  
  /** Notas adicionales o curiosidades */
  notes?: string;
}

/** Géneros disponibles para las películas */
export type Genre = 
  | "Drama"
  | "Comedia"
  | "Documental"
  | "Histórico"
  | "Romance"
  | "Thriller"
  | "Musical"
  | "Animación"
  | "Experimental";

/** Estructura para premios */
export interface Award {
  name: string;
  year: number;
  category?: string;
}

/** Estructura para miembros del elenco */
export interface CastMember {
  name: string;
  role: string;
}
