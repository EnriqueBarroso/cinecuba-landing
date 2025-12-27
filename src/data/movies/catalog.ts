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
    awards: [
      { name: "Festival de Karlovy Vary", year: 1963, category: "Mención Especial" }
    ],
    cast: [
      { name: "Enrique Santiesteban", role: "Hipólito" },
      { name: "Reinaldo Miravalles", role: "Óscar" },
      { name: "René Sánchez", role: "Padre Cirilo" },
      { name: "Pilín Vallejo", role: "La viuda" }
    ]
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
    awards: [
      { name: "Festival de Karlovy Vary", year: 1966, category: "Premio Especial del Jurado" },
      { name: "Festival de Moscú", year: 1967, category: "Mención Especial" }
    ],
    cast: [
      { name: "Salvador Wood", role: "El sobrino" },
      { name: "Silvia Planas", role: "La tía" },
      { name: "Manuel Estanillo", role: "El burócrata" },
      { name: "Gaspar de Santelices", role: "El enterrador" }
    ],
    notes: "Incluye homenajes visuales a Laurel y Hardy, Buñuel y otros maestros del cine."
  },
  {
    id: "lucia-1968",
    title: "Lucía",
    year: 1968,
    director: "Humberto Solás",
    poster: posterLucia,
    duration: "160 min",
    genre: ["Drama", "Histórico"],
    synopsis: "Una obra maestra del cine cubano que narra tres historias de mujeres llamadas Lucía en tres momentos cruciales de la historia de Cuba: la guerra de independencia de 1895, la lucha contra Machado en los años 30, y la Revolución de los años 60.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    awards: [
      { name: "Festival de Moscú", year: 1969, category: "Gran Premio" },
      { name: "Festival de Karlovy Vary", year: 1969, category: "Mejor Película" }
    ],
    cast: [
      { name: "Raquel Revuelta", role: "Lucía (1895)" },
      { name: "Eslinda Núñez", role: "Lucía (1932)" },
      { name: "Adela Legrá", role: "Lucía (196...)" },
      { name: "Eduardo Moure", role: "Rafael" },
      { name: "Ramón Brito", role: "Aldo" },
      { name: "Adolfo Llauradó", role: "Tomás" }
    ],
    notes: "Considerada una de las obras maestras del cine latinoamericano."
  },
  {
    id: "memorias-subdesarrollo",
    title: "Memorias del subdesarrollo",
    year: 1968,
    director: "Tomás Gutiérrez Alea",
    poster: posterMemoria,
    duration: "97 min",
    genre: ["Drama"],
    synopsis: "Un intelectual burgués decide quedarse en Cuba tras la Revolución mientras su familia huye al exilio. Atrapado entre dos mundos, observa los cambios de la sociedad cubana mientras cuestiona su propia identidad y lugar en el nuevo orden.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    awards: [
      { name: "Festival de Karlovy Vary", year: 1968, category: "Premio FIPRESCI" },
      { name: "Revista Sight & Sound", year: 1999, category: "Una de las mejores películas del siglo XX" }
    ],
    cast: [
      { name: "Sergio Corrieri", role: "Sergio" },
      { name: "Daisy Granados", role: "Elena" },
      { name: "Eslinda Núñez", role: "Noemí" },
      { name: "Omar Valdés", role: "Pablo" }
    ],
    notes: "Basada en la novela de Edmundo Desnoes. Considerada una de las obras maestras del cine latinoamericano."
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
    awards: [
      { name: "Festival de San Sebastián", year: 1979, category: "Premio Especial del Jurado" }
    ],
    cast: [
      { name: "Enrique Santiesteban", role: "Sebastián" },
      { name: "Reynaldo Miravalles", role: "Olegario" },
      { name: "Germán Pinelli", role: "Ramiro" },
      { name: "Ana Viña", role: "María" },
      { name: "Vicente Revuelta", role: "Fernando" }
    ],
    notes: "Alegoría sobre la resistencia al cambio y la decadencia de la clase burguesa."
  },
];

// ============================================================================
// DÉCADA DE 1980 - NUEVAS VOCES Y COMEDIAS POPULARES
// ============================================================================

const movies1980s: Movie[] = [
  {
    id: "el-brigadista",
    title: "El Brigadista",
    year: 1977,
    director: "Octavio Cortázar",
    poster: "/placeholder.svg",
    duration: "119 min",
    genre: ["Drama", "Histórico"],
    synopsis: "Durante la Campaña de Alfabetización de 1961, un joven habanero viaja a las montañas del Escambray para enseñar a leer y escribir a los campesinos, enfrentándose a bandidos contrarrevolucionarios.",
    awards: [
      { name: "Festival de Moscú", year: 1978, category: "Premio Especial" }
    ],
    cast: [
      { name: "Salvador Wood", role: "Mario" },
      { name: "Jorge Villazón", role: "Eladio" },
      { name: "Idalia Anreus", role: "Clarita" },
      { name: "Raúl Pomares", role: "Ciro" }
    ],
    notes: "Película emblemática sobre la Campaña de Alfabetización cubana."
  },
  {
    id: "pajaros-escopeta",
    title: "Los pájaros tirándole a la escopeta",
    year: 1984,
    director: "Rolando Díaz",
    poster: posterLosPajaros,
    duration: "90 min",
    genre: ["Comedia"],
    synopsis: "Dos jóvenes enamorados intentan impedir el romance entre el padre de él y la madre de ella. Una comedia clásica cubana que invierte los conflictos generacionales habituales.",
    awards: [
      { name: "Festival de Comedia de Peñíscola", year: 1985, category: "Mejor Película" }
    ],
    cast: [
      { name: "Luis Alberto García", role: "Carlos" },
      { name: "Thais Valdés", role: "Ofelia" },
      { name: "Daisy Granados", role: "La madre" },
      { name: "César Évora", role: "El padre" }
    ],
    notes: "Una de las comedias cubanas más populares de la década."
  },
  {
    id: "clandestinos",
    title: "Clandestinos",
    year: 1987,
    director: "Fernando Pérez",
    poster: "/placeholder.svg",
    duration: "100 min",
    genre: ["Drama", "Histórico"],
    synopsis: "La Habana, 1958. Un grupo de jóvenes revolucionarios vive en la clandestinidad mientras prepara acciones contra la dictadura de Batista. La película explora el amor, la lealtad y el sacrificio en tiempos de lucha.",
    awards: [
      { name: "Festival de La Habana", year: 1987, category: "Gran Premio Coral" },
      { name: "Festival de Karlovy Vary", year: 1988, category: "Premio Especial" }
    ],
    cast: [
      { name: "Luis Alberto García", role: "Ernesto" },
      { name: "Isabel Santos", role: "Nereida" },
      { name: "Susana Pérez", role: "Rosa" },
      { name: "Miguel Gutiérrez", role: "Néstor" }
    ],
    notes: "Ópera prima de Fernando Pérez que lo estableció como uno de los grandes directores cubanos."
  },
  {
    id: "plaff",
    title: "Plaff o Demasiado miedo a la vida",
    year: 1988,
    director: "Juan Carlos Tabío",
    poster: "/placeholder.svg",
    duration: "100 min",
    genre: ["Comedia"],
    synopsis: "Concha, una viuda hipocondríaca y supersticiosa, vive atormentada por misteriosos huevos que caen sobre ella. Una comedia negra que satiriza los miedos irracionales y la burocracia cubana.",
    awards: [
      { name: "Festival de La Habana", year: 1988, category: "Premio Coral a la Comedia" },
      { name: "Festival de Bogotá", year: 1989, category: "Mejor Película" }
    ],
    cast: [
      { name: "Daisy Granados", role: "Concha" },
      { name: "Thais Valdés", role: "Clarita" },
      { name: "Luis Alberto García", role: "José Ramón" },
      { name: "Raúl Pomares", role: "El vecino" }
    ],
    notes: "Título onomatopéyico que representa el sonido de los huevos al caer."
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
    synopsis: "En La Habana de los años 90, Diego, un artista homosexual y culto, entabla una amistad inesperada con David, un joven militante comunista heterosexual. A través de su relación, la película explora temas de tolerancia, libertad de expresión, identidad sexual y las contradicciones de la sociedad cubana.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    awards: [
      { name: "Oso de Plata - Festival de Berlín", year: 1994, category: "Gran Premio del Jurado" },
      { name: "Premio Goya", year: 1995, category: "Mejor Película Extranjera de Habla Hispana" },
      { name: "Nominación al Oscar", year: 1995, category: "Mejor Película Extranjera" }
    ],
    cast: [
      { name: "Jorge Perugorría", role: "Diego" },
      { name: "Vladimir Cruz", role: "David" },
      { name: "Mirta Ibarra", role: "Nancy" },
      { name: "Francisco Gattorno", role: "Miguel" },
      { name: "Joel Angelino", role: "Germán" }
    ],
    notes: "Primera película cubana nominada al Oscar. Co-dirigida con Juan Carlos Tabío."
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
    synopsis: "Un retrato poético y silencioso de La Habana a través de las vidas cotidianas de sus habitantes. Sin diálogos ni narración, la película sigue a diez personas desde el amanecer hasta la noche, revelando sus sueños y luchas.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    awards: [
      { name: "Festival de San Sebastián", year: 2003, category: "Premio FIPRESCI" },
      { name: "Festival de La Habana", year: 2003, category: "Gran Premio Coral" },
      { name: "Premios Goya", year: 2004, category: "Nominación Mejor Documental" }
    ],
    cast: [
      { name: "Francisquito", role: "Él mismo (niño con síndrome de Down)" },
      { name: "Amanda", role: "Ella misma (bailarina)" },
      { name: "Julio", role: "Él mismo (médico/payaso nocturno)" },
      { name: "Iván", role: "Él mismo (obrero/bailarín)" },
      { name: "Norma", role: "Ella misma (vendedora de maní)" }
    ],
    notes: "Sin diálogos, solo música e imágenes. Considerada una de las mejores películas cubanas del siglo XXI."
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
    awards: [
      { name: "Festival de La Habana", year: 2010, category: "Gran Premio Coral" },
      { name: "Premios Goya", year: 2011, category: "Nominación Mejor Película Iberoamericana" }
    ],
    cast: [
      { name: "Damián Rodríguez", role: "Pepe Martí (niño)" },
      { name: "Daniel Romero", role: "José Martí (adolescente)" },
      { name: "Broselianda Hernández", role: "Leonor Pérez (madre)" },
      { name: "Rolando Brito", role: "Mariano Martí (padre)" }
    ],
    notes: "Retrato humanista del héroe nacional cubano en su juventud."
  },
  {
    id: "conducta-2014",
    title: "Conducta",
    year: 2014,
    director: "Ernesto Daranas",
    poster: posterChala,
    duration: "108 min",
    genre: ["Drama"],
    synopsis: "Chala es un niño de once años que vive en un barrio marginal de La Habana. Carmela, su maestra, es la única que ve más allá de su comportamiento problemático y lucha contra el sistema educativo para salvarlo.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    awards: [
      { name: "Premio Goya", year: 2015, category: "Mejor Película Iberoamericana" },
      { name: "Festival de La Habana", year: 2014, category: "Gran Premio Coral" },
      { name: "Festival de Málaga", year: 2014, category: "Mejor Película" },
      { name: "Premios Platino", year: 2015, category: "Mejor Ópera Prima" }
    ],
    cast: [
      { name: "Armando Valdés Freire", role: "Chala" },
      { name: "Alina Rodríguez", role: "Carmela" },
      { name: "Silvia Águila", role: "Sonia (madre de Chala)" },
      { name: "Yuliet Cruz", role: "Directora Catalina" },
      { name: "Armando Miguel Gómez", role: "Raúl" }
    ],
    notes: "La película cubana más taquillera de la historia en su país."
  },
];

// ============================================================================
// DÉCADA DE 2020 - CINE CONTEMPORÁNEO
// ============================================================================

const movies2020s: Movie[] = [];

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
