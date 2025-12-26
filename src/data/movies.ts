import posterLucia from "@/assets/poster-lucia.jpg";
import posterFresa from "@/assets/poster-FresayChocolate.jpg";
import posterChala from "@/assets/poster-Conducta.jpg";
import posterSuite from "@/assets/poster-SuiteHabana.jpg";
import posterMemoria from "@/assets/poster-Memoria.jpg";
import posterMarti from "@/assets/poster-Marti.jpg";
import poster12Sillas from "@/assets/12_sillas.jpg";
import posterLosPajaros from "@/assets/los_pajaros.jpg";
import posterSobrevivientes from "@/assets/sobrevivientes.jpg";
import posterBurocrata from "@/assets/La-muerte-de-un-burocrata-poster.jpg";

export interface Movie {
  id: string;
  title: string;
  year: number;
  director: string;
  poster: string;
  synopsis: string;
  duration: string;
  genre: string[];
  videoUrl?: string;
}

export const movies: Movie[] = [
  // --- Películas Originales (Con imágenes locales) ---
  {
    id: "lucia-1968",
    title: "Lucía",
    year: 1968,
    director: "Humberto Solás",
    poster: posterLucia,
    duration: "160 min",
    genre: ["Drama", "Histórico"],
    synopsis: "Una obra maestra del cine cubano que narra tres historias de mujeres llamadas Lucía en tres momentos cruciales de la historia de Cuba: la guerra de independencia de 1895, la lucha contra Machado en los años 30, y la Revolución de los años 60. Cada segmento explora las luchas, pasiones y transformaciones de estas mujeres, reflejando los cambios sociales y políticos de la isla a través de sus experiencias personales.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "fresa-chocolate-1993",
    title: "Fresa y Chocolate",
    year: 1993,
    director: "Tomás Gutiérrez Alea",
    poster: posterFresa,
    duration: "110 min",
    genre: ["Drama", "Comedia"],
    synopsis: "En La Habana de los años 90, Diego, un artista homosexual y culto, entabla una amistad inesperada con David, un joven militante comunista heterosexual. A través de su relación, la película explora temas de tolerancia, libertad de expresión, identidad sexual y las contradicciones de la sociedad cubana. Una reflexión profunda sobre la amistad que trasciende las diferencias ideológicas y personales.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "suite-habana-2003",
    title: "Suite Habana",
    year: 2003,
    director: "Fernando Pérez",
    poster: posterSuite,
    duration: "84 min",
    genre: ["Documental"],
    synopsis: "Un retrato poético y silencioso de La Habana a través de las vidas cotidianas de sus habitantes. Sin diálogos ni narración, la película sigue a diez personas desde el amanecer hasta la noche, revelando sus sueños, luchas y la dignidad con la que enfrentan las dificultades de la vida diaria. Una obra cinematográfica que celebra la humanidad en medio de la adversidad.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "memoria-2022",
    title: "Memorias del Desarrollo",
    year: 2022,
    director: "Miguel Coyula",
    poster: posterMemoria,
    duration: "112 min",
    genre: ["Drama"],
    synopsis: "Una exploración cinematográfica de la memoria, la identidad y el exilio cubano. La película sigue a un intelectual que reflexiona sobre su vida y las decisiones que lo llevaron al extranjero, mientras los recuerdos de Cuba se entrelazan con su presente.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "marti-2010",
    title: "José Martí: El Ojo del Canario",
    year: 2010,
    director: "Fernando Pérez",
    poster: posterMarti,
    duration: "120 min",
    genre: ["Drama", "Histórico"],
    synopsis: "Una mirada íntima a la infancia y juventud de José Martí, el héroe nacional de Cuba. La película explora sus primeros años, su despertar político y los eventos que forjaron al hombre que se convertiría en símbolo de la independencia cubana.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },

  // --- Nuevas Películas (Con URLs de TMDB) ---
  {
    id: "pajaros-escopeta",
    title: "Los pájaros tirándole a la escopeta",
    year: 1984,
    director: "Rolando Díaz",
    genre: ["Comedia"],
    poster: posterLosPajaros,
    synopsis: "Dos jóvenes enamorados intentan impedir el romance entre el padre de él y la madre de ella. Una comedia clásica cubana que invierte los conflictos generacionales habituales.",
    duration: "90 min"
  },
  {
    id: "doce-sillas",
    title: "Las doce sillas",
    year: 1962,
    director: "Tomás Gutiérrez Alea",
    genre: ["Comedia"],
    poster: poster12Sillas,
    synopsis: "Un aristócrata venido a menos y su antiguo chófer buscan desesperadamente unos diamantes que fueron escondidos en una de las doce sillas de un juego de comedor antes de ser expropiadas.",
    duration: "97 min"
  },
  {
    id: "sobrevivientes",
    title: "Los sobrevivientes",
    year: 1979,
    director: "Tomás Gutiérrez Alea",
    genre: ["Drama"],
    poster: posterSobrevivientes,
    synopsis: "Una familia aristocrática decide encerrarse en su mansión creyendo que la Revolución será algo pasajero. Aislados del mundo, comienzan a involucionar hacia el salvajismo.",
    duration: "130 min"
  },
  {
    id: "muerte-burocrata",
    title: "La muerte de un burócrata",
    year: 1966,
    director: "Tomás Gutiérrez Alea",
    genre: ["Comedia"],
    poster: posterBurocrata,
    synopsis: "Sátira genial donde un sobrino intenta exhumar el cadáver de su tío para recuperar su carnet laboral, enfrentándose a un laberinto de trámites absurdos.",
    duration: "85 min"
  }
];

export const getMovieById = (id: string): Movie | undefined => {
  return movies.find((movie) => movie.id === id);
};

export const getRelatedMovies = (currentId: string, limit: number = 4): Movie[] => {
  return movies.filter((movie) => movie.id !== currentId).slice(0, limit);
};