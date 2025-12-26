import humbertoSolasPhoto from "@/assets/directors/humberto-solas.jpg";
import tomasGutierrezAleaPhoto from "@/assets/directors/tomas-gutierrez-alea.jpg";
import juanCarlosTabioPhoto from "@/assets/directors/juan-carlos-tabio.jpg";
import fernandoPerezPhoto from "@/assets/directors/fernando-perez.jpg";
import ernestoDaranasPhoto from "@/assets/directors/ernesto-daranas.jpg";
import miguelCoyulaPhoto from "@/assets/directors/miguel-coyula.jpg";

export interface Director {
  id: string;
  name: string;
  photo?: string;
  birthYear: number;
  deathYear?: number;
  nationality: string;
  biography: string;
  activeYears: string;
  awards: string[];
}

export const directors: Director[] = [
  {
    id: "humberto-solas",
    name: "Humberto Solás",
    photo: humbertoSolasPhoto,
    birthYear: 1941,
    deathYear: 2008,
    nationality: "Cubano",
    biography: "Humberto Solás Borrego fue uno de los cineastas más influyentes de América Latina y una figura fundamental del cine cubano post-revolucionario. Nacido en La Habana, comenzó su carrera cinematográfica en el ICAIC (Instituto Cubano del Arte e Industria Cinematográficos) a principios de los años 60. Su obra maestra 'Lucía' (1968) le valió reconocimiento internacional y es considerada una de las películas más importantes del cine latinoamericano. Solás era conocido por su estilo visual barroco, su profundo interés en la historia de Cuba y su exploración de las experiencias de las mujeres cubanas a través de diferentes épocas. Su filmografía incluye obras como 'Cantata de Chile' (1975), 'Cecilia' (1982) y 'Un hombre de éxito' (1986).",
    activeYears: "1964-2008",
    awards: [
      "Premio de la Crítica en Cannes por 'Lucía' (1969)",
      "Premio Nacional de Cine de Cuba (1994)",
      "Premio Coral de Honor del Festival de La Habana"
    ]
  },
  {
    id: "tomas-gutierrez-alea",
    name: "Tomás Gutiérrez Alea",
    photo: tomasGutierrezAleaPhoto,
    birthYear: 1928,
    deathYear: 1996,
    nationality: "Cubano",
    biography: "Tomás Gutiérrez Alea, conocido cariñosamente como 'Titón', es considerado el más grande cineasta cubano de todos los tiempos. Nacido en La Habana en una familia de clase media, estudió derecho antes de dedicarse al cine en Roma. Fue uno de los fundadores del ICAIC y su carrera abarcó más de cuatro décadas de cine cubano. Su filmografía es un testimonio de la evolución de Cuba, desde 'Memorias del Subdesarrollo' (1968), considerada una de las mejores películas latinoamericanas jamás realizadas, hasta 'Fresa y Chocolate' (1993), nominada al Oscar. Titón combinaba un profundo compromiso político con una sofisticación artística que le permitía hacer crítica social desde dentro del sistema. Su influencia en el cine latinoamericano es inmensurable.",
    activeYears: "1950-1996",
    awards: [
      "Nominación al Oscar por 'Fresa y Chocolate' (1994)",
      "Oso de Plata en Berlín por 'Fresa y Chocolate' (1994)",
      "Premio Nacional de Cine de Cuba (1988)",
      "Premio FIPRESCI en Cannes"
    ]
  },
  {
    id: "juan-carlos-tabio",
    name: "Juan Carlos Tabío",
    photo: juanCarlosTabioPhoto,
    birthYear: 1943,
    deathYear: 2021,
    nationality: "Cubano",
    biography: "Juan Carlos Tabío fue un destacado director cubano conocido por su habilidad para combinar la comedia con la crítica social aguda. Nacido en La Habana, se formó como director en el ICAIC y desarrolló un estilo distintivo que mezclaba el humor popular cubano con observaciones incisivas sobre la sociedad. Co-dirigió 'Fresa y Chocolate' (1993) junto a Tomás Gutiérrez Alea, consolidando su reputación internacional. Entre sus obras más celebradas se encuentran 'Se permuta' (1984), 'Plaff' (1988) y 'Lista de espera' (2000), películas que retratan con ingenio y ternura las contradicciones y absurdos de la vida cotidiana en Cuba. Tabío era un maestro del timing cómico y un observador perspicaz de la cultura cubana.",
    activeYears: "1970-2021",
    awards: [
      "Nominación al Oscar por 'Fresa y Chocolate' (co-director, 1994)",
      "Premio Coral en el Festival de La Habana",
      "Premio Goya por 'Lista de espera' (2000)"
    ]
  },
  {
    id: "fernando-perez",
    name: "Fernando Pérez",
    photo: fernandoPerezPhoto,
    birthYear: 1944,
    nationality: "Cubano",
    biography: "Fernando Pérez Valdés es el poeta del cine cubano contemporáneo. Nacido en La Habana, estudió periodismo y posteriormente se formó como cineasta en el ICAIC. Su obra se caracteriza por una sensibilidad lírica excepcional y una capacidad única para capturar la esencia de la vida cotidiana cubana con profunda humanidad. 'Suite Habana' (2003), un documental casi sin diálogos que sigue la vida de habaneros comunes, es considerada su obra maestra y una de las películas cubanas más importantes del siglo XXI. También dirigió 'Madagascar' (1994), 'La vida es silbar' (1998) y 'José Martí: El ojo del canario' (2010), todas obras que exploran la identidad cubana con una mirada contemplativa y poética.",
    activeYears: "1975-presente",
    awards: [
      "Premio Nacional de Cine de Cuba (2007)",
      "Gran Premio del Festival de La Habana por 'Suite Habana'",
      "Premio Goya por 'La vida es silbar' (1999)",
      "Premio de la Crítica en San Sebastián"
    ]
  },
  {
    id: "ernesto-daranas",
    name: "Ernesto Daranas",
    photo: ernestoDaranasPhoto,
    birthYear: 1961,
    nationality: "Cubano",
    biography: "Ernesto Daranas Serrano es uno de los directores más importantes del cine cubano contemporáneo. Nacido en La Habana, comenzó su carrera como guionista y director de televisión antes de pasar al cine. Su película 'Conducta' (2014) se convirtió en un fenómeno cultural en Cuba, abordando con valentía temas como la educación, la marginación social y la burocracia. La película fue la más vista en la historia del cine cubano y recibió aclamación internacional. Daranas es conocido por su compromiso con historias que reflejan las realidades sociales de Cuba sin caer en el panfletarismo, combinando un realismo crudo con una profunda empatía por sus personajes. También ha dirigido 'Los dioses rotos' (2008) y 'Sergio y Serguéi' (2017).",
    activeYears: "1990-presente",
    awards: [
      "Premio Goya a Mejor Película Iberoamericana por 'Conducta' (2015)",
      "Premio del Público en el Festival de La Habana",
      "Premio Coral por 'Conducta'",
      "Premio de la Crítica Internacional FIPRESCI"
    ]
  },
  {
    id: "miguel-coyula",
    name: "Miguel Coyula",
    photo: miguelCoyulaPhoto,
    birthYear: 1977,
    nationality: "Cubano",
    biography: "Miguel Coyula representa la vanguardia del cine independiente cubano. Nacido en La Habana, es un cineasta autodidacta que desafía las convenciones del cine tradicional cubano. Su método de trabajo es único: escribe, dirige, fotografía, edita y compone la música de sus películas, a menudo trabajando durante años en proyectos que realiza casi en solitario. 'Memorias del Desarrollo' (2010), basada en la novela de Edmundo Desnoes (secuela de 'Memorias del Subdesarrollo'), le valió reconocimiento internacional por su audaz experimentación visual y narrativa. Coyula combina técnicas digitales innovadoras con una reflexión profunda sobre la identidad cubana, el exilio y la memoria. Su trabajo representa una nueva generación de cineastas cubanos que operan fuera de las estructuras tradicionales.",
    activeYears: "2001-presente",
    awards: [
      "Premio del Jurado en el Festival de Tribeca",
      "Premio a Mejor Director en el Festival de La Habana",
      "Premio FIPRESCI en varios festivales internacionales"
    ]
  }
];

export const getDirectorById = (id: string): Director | undefined => {
  return directors.find((director) => director.id === id);
};

export const getDirectorByName = (name: string): Director | undefined => {
  return directors.find((director) => director.name === name);
};
