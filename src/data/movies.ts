import posterLucia from "@/assets/poster-lucia.jpg";
import posterFresa from "@/assets/poster-fresa.jpg";
import posterChala from "@/assets/poster-chala.jpg";
import posterSuite from "@/assets/poster-suite.jpg";
import posterBuena from "@/assets/poster-buena.jpg";
import posterUltimo from "@/assets/poster-ultimo.jpg";

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
    id: "buena-vista-1999",
    title: "Los Músicos",
    year: 1999,
    director: "Wim Wenders",
    poster: posterBuena,
    duration: "105 min",
    genre: ["Documental", "Musical"],
    synopsis: "Un viaje musical a través de La Habana siguiendo a legendarios músicos cubanos que fueron redescubiertos después de décadas en el olvido. La película captura la magia de la música tradicional cubana, las historias de vida de estos artistas extraordinarios y la vibrante cultura de la isla. Una celebración de la música como forma de resistencia y alegría.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "ultimos-dias-2019",
    title: "Últimos Días",
    year: 2019,
    director: "Fernando Pérez",
    poster: posterUltimo,
    duration: "92 min",
    genre: ["Drama", "Histórico"],
    synopsis: "Una mirada íntima a los últimos días de la vida de José Martí, el héroe nacional de Cuba. La película explora sus pensamientos, sus miedos y su determinación mientras se prepara para la batalla final que costaría su vida. Un retrato humanizador del prócer que revela al hombre detrás del mito, sus contradicciones y su inquebrantable amor por la libertad de su patria.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export const getMovieById = (id: string): Movie | undefined => {
  return movies.find((movie) => movie.id === id);
};

export const getRelatedMovies = (currentId: string, limit: number = 4): Movie[] => {
  return movies.filter((movie) => movie.id !== currentId).slice(0, limit);
};
