/**
 * CATÁLOGO DE PELÍCULAS DEL CINE CUBANO
 * 
 * Este archivo contiene el catálogo completo de películas.
 * Organizado por décadas para facilitar la navegación y mantenimiento.
 * 
 * Para añadir una nueva película:
 * 1. Añade el poster en src/assets/posters/ y expórtalo en el índice
 * 2. Localiza la sección de la década correspondiente
 * 3. Añade la película siguiendo el formato existente
 * 4. Ejecuta la validación para verificar que todo esté correcto
 * 
 * @see src/data/movies/CONTRIBUTING.md para instrucciones detalladas
 */

import type { Movie } from "./types";
import {
  posterLucia,
  posterBurocrata,
  poster12Sillas,
  posterSobrevivientes,
  posterLosPajaros,
  posterFresa,
  posterSuite,
  posterChala,
  posterMarti,
  posterMemoria
} from "@/assets/posters";

// ============================================================================
// DÉCADA DE 1960 - EL NACIMIENTO DEL ICAIC
// ============================================================================

const movies1960s: Movie[] = [
  {
    id: "doce-sillas",
    title: "Las doce sillas",
    year: 1962,
    director: "Tomás Gutiérrez Alea",
    poster: poster12Sillas,
    duration: "97 min",
    genre: ["Comedia"],
    synopsis: "Un aristócrata venido a menos y su antiguo chófer buscan desesperadamente unos diamantes que fueron escondidos en una de las doce sillas de un juego de comedor antes de ser expropiadas.",
  },
  {
    id: "muerte-burocrata",
    title: "La muerte de un burócrata",
    year: 1966,
    director: "Tomás Gutiérrez Alea",
    poster: posterBurocrata,
    duration: "85 min",
    genre: ["Comedia"],
    synopsis: "Sátira genial donde un sobrino intenta exhumar el cadáver de su tío para recuperar su carnet laboral, enfrentándose a un laberinto de trámites absurdos.",
  },
  {
    id: "lucia-1968",
    title: "Lucía",
    year: 1968,
    director: "Humberto Solás",
    poster: posterLucia,
    duration: "160 min",
    genre: ["Drama", "Histórico"],
    synopsis: "Una obra maestra del cine cubano que narra tres historias de mujeres llamadas Lucía en tres momentos cruciales de la historia de Cuba: la guerra de independencia de 1895, la lucha contra Machado en los años 30, y la Revolución de los años 60. Cada segmento explora las luchas, pasiones y transformaciones de estas mujeres, reflejando los cambios sociales y políticos de la isla a través de sus experiencias personales.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

// ============================================================================
// DÉCADA DE 1970 - CONSOLIDACIÓN DEL CINE REVOLUCIONARIO
// ============================================================================

const movies1970s: Movie[] = [
  {
    id: "sobrevivientes",
    title: "Los sobrevivientes",
    year: 1979,
    director: "Tomás Gutiérrez Alea",
    poster: posterSobrevivientes,
    duration: "130 min",
    genre: ["Drama"],
    synopsis: "Una familia aristocrática decide encerrarse en su mansión creyendo que la Revolución será algo pasajero. Aislados del mundo, comienzan a involucionar hacia el salvajismo.",
  },
];

// ============================================================================
// DÉCADA DE 1980 - NUEVAS VOCES Y COMEDIAS POPULARES
// ============================================================================

const movies1980s: Movie[] = [
  {
    id: "pajaros-escopeta",
    title: "Los pájaros tirándole a la escopeta",
    year: 1984,
    director: "Rolando Díaz",
    poster: posterLosPajaros,
    duration: "90 min",
    genre: ["Comedia"],
    synopsis: "Dos jóvenes enamorados intentan impedir el romance entre el padre de él y la madre de ella. Una comedia clásica cubana que invierte los conflictos generacionales habituales.",
  },
];

// ============================================================================
// DÉCADA DE 1990 - PERÍODO ESPECIAL Y CINE DE AUTOR
// ============================================================================

const movies1990s: Movie[] = [
  {
    id: "fresa-chocolate-1993",
    title: "Fresa y Chocolate",
    year: 1993,
    director: "Tomás Gutiérrez Alea",
    poster: posterFresa,
    duration: "110 min",
    genre: ["Drama", "Comedia"],
    synopsis: "En La Habana de los años 90, Diego, un artista homosexual y culto, entabla una amistad inesperada con David, un joven militante comunista heterosexual. A través de su relación, la película explora temas de tolerancia, libertad de expresión, identidad sexual y las contradicciones de la sociedad cubana. Una reflexión profunda sobre la amistad que trasciende las diferencias ideológicas y personales.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

// ============================================================================
// DÉCADA DE 2000 - RENACIMIENTO DEL DOCUMENTAL
// ============================================================================

const movies2000s: Movie[] = [
  {
    id: "suite-habana-2003",
    title: "Suite Habana",
    year: 2003,
    director: "Fernando Pérez",
    poster: posterSuite,
    duration: "84 min",
    genre: ["Documental"],
    synopsis: "Un retrato poético y silencioso de La Habana a través de las vidas cotidianas de sus habitantes. Sin diálogos ni narración, la película sigue a diez personas desde el amanecer hasta la noche, revelando sus sueños, luchas y la dignidad con la que enfrentan las dificultades de la vida diaria. Una obra cinematográfica que celebra la humanidad en medio de la adversidad.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

// ============================================================================
// DÉCADA DE 2010 - DIVERSIDAD Y NUEVOS DIRECTORES
// ============================================================================

const movies2010s: Movie[] = [
  {
    id: "marti-2010",
    title: "José Martí: El Ojo del Canario",
    year: 2010,
    director: "Fernando Pérez",
    poster: posterMarti,
    duration: "120 min",
    genre: ["Drama", "Histórico"],
    synopsis: "Una mirada íntima a la infancia y juventud de José Martí, el héroe nacional de Cuba. La película explora sus primeros años, su despertar político y los eventos que forjaron al hombre que se convertiría en símbolo de la independencia cubana.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "conducta-2014",
    title: "Conducta",
    year: 2014,
    director: "Ernesto Daranas",
    poster: posterChala,
    duration: "108 min",
    genre: ["Drama"],
    synopsis: "Chala es un niño de once años que vive en un barrio marginal de La Habana. Cuida de su madre drogadicta y sobrevive criando palomas de pelea. Carmela, su maestra de sexto grado, es la única que ve más allá de su comportamiento problemático y lucha contra el sistema educativo para salvarlo. Una historia conmovedora sobre la educación, la pobreza y la redención.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

// ============================================================================
// DÉCADA DE 2020 - CINE CONTEMPORÁNEO
// ============================================================================

const movies2020s: Movie[] = [
  {
    id: "memoria-2022",
    title: "Memorias del Desarrollo",
    year: 2022,
    director: "Miguel Coyula",
    poster: posterMemoria,
    duration: "112 min",
    genre: ["Drama"],
    synopsis: "Una exploración cinematográfica de la memoria, la identidad y el exilio cubano. La película sigue a un intelectual que reflexiona sobre su vida y las decisiones que lo llevaron al extranjero, mientras los recuerdos de Cuba se entrelazan con su presente.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

// ============================================================================
// EXPORTACIÓN DEL CATÁLOGO COMPLETO
// ============================================================================

/**
 * Catálogo completo de películas ordenado cronológicamente
 */
export const movies: Movie[] = [
  ...movies1960s,
  ...movies1970s,
  ...movies1980s,
  ...movies1990s,
  ...movies2000s,
  ...movies2010s,
  ...movies2020s,
];

/**
 * Acceso a películas por década (para filtros o navegación)
 */
export const moviesByDecade = {
  "1960s": movies1960s,
  "1970s": movies1970s,
  "1980s": movies1980s,
  "1990s": movies1990s,
  "2000s": movies2000s,
  "2010s": movies2010s,
  "2020s": movies2020s,
};
