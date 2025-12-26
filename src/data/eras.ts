export interface Era {
  id: string;
  name: string;
  period: string;
  shortDescription: string;
  fullDescription: string;
  historicalContext: string;
  characteristics: string[];
  keyFigures: string[];
  representativeMovieIds: string[];
  coverImage?: string;
}

export const eras: Era[] = [
  {
    id: "pre-revolucionario",
    name: "Cine Pre-Revolucionario",
    period: "1897-1958",
    shortDescription: "Los primeros pasos del cine en Cuba, desde las proyecciones iniciales hasta la industria comercial pre-revolucionaria.",
    fullDescription: "El cine llegó a Cuba apenas dos años después de su invención, cuando el 24 de enero de 1897 Gabriel Veyre realizó las primeras proyecciones en La Habana. Durante las primeras décadas, el cine cubano se desarrolló principalmente a través de noticieros, documentales patrióticos y producciones comerciales influenciadas por Hollywood y el cine mexicano. La producción nacional era limitada y dependía en gran medida de inversiones extranjeras, lo que resultaba en películas que a menudo no reflejaban la realidad social cubana.",
    historicalContext: "Este período abarca desde la colonia española, pasando por las guerras de independencia, la República (1902-1958) y las diversas dictaduras que marcaron la historia pre-revolucionaria de Cuba. El cine de esta época reflejaba las tensiones entre la influencia estadounidense y la búsqueda de una identidad nacional propia.",
    characteristics: [
      "Fuerte influencia de Hollywood y el cine mexicano",
      "Predominio de melodramas, comedias musicales y rumberas",
      "Producción irregular y dependiente de capitales extranjeros",
      "Documentales y noticieros como géneros principales",
      "Escasa exploración de temas sociales profundos"
    ],
    keyFigures: [
      "Ramón Peón (pionero del cine cubano)",
      "Enrique Díaz Quesada (documentalista de las guerras de independencia)",
      "Manuel Alonso (productor y director)"
    ],
    representativeMovieIds: []
  },
  {
    id: "nueva-ola-icaic",
    name: "Nueva Ola y Fundación del ICAIC",
    period: "1959-1969",
    shortDescription: "El nacimiento del Nuevo Cine Cubano tras la Revolución, con la fundación del ICAIC y una explosión de creatividad cinematográfica.",
    fullDescription: "La fundación del Instituto Cubano del Arte e Industria Cinematográficos (ICAIC) en marzo de 1959, apenas tres meses después del triunfo revolucionario, marcó el inicio de una nueva era para el cine cubano. Bajo la dirección de Alfredo Guevara, el ICAIC se convirtió en el epicentro de una renovación artística sin precedentes. Los cineastas cubanos, inspirados por el neorrealismo italiano, la Nouvelle Vague francesa y el Cinema Novo brasileño, crearon un lenguaje cinematográfico propio que combinaba el compromiso político con la experimentación estética.",
    historicalContext: "Los años 60 fueron de profunda transformación social en Cuba: la Reforma Agraria, la Campaña de Alfabetización, la Crisis de los Misiles y la consolidación del proceso revolucionario. El cine se convirtió en herramienta de educación y reflexión, pero también en espacio de debate sobre el rol del arte en la sociedad.",
    characteristics: [
      "Experimentación formal y narrativa audaz",
      "Compromiso con los ideales revolucionarios",
      "Influencias del neorrealismo y las nuevas olas europeas",
      "Documentales como género principal de exploración",
      "Creación de un lenguaje cinematográfico latinoamericano propio",
      "Desarrollo del cine-debate y la cine-movilización"
    ],
    keyFigures: [
      "Tomás Gutiérrez Alea",
      "Humberto Solás",
      "Santiago Álvarez (documentalista)",
      "Sara Gómez",
      "Julio García Espinosa"
    ],
    representativeMovieIds: ["lucia-1968"]
  },
  {
    id: "consolidacion",
    name: "Consolidación y Madurez",
    period: "1970-1989",
    shortDescription: "El cine cubano alcanza reconocimiento internacional mientras navega las complejidades del período soviético.",
    fullDescription: "Durante estas dos décadas, el cine cubano consolidó su prestigio internacional mientras desarrollaba una industria cinematográfica estable. Los cineastas perfeccionaron sus técnicas y ampliaron su rango temático, explorando la historia de Cuba, las contradicciones sociales y las complejidades de la vida cotidiana. Sin embargo, este período también estuvo marcado por tensiones entre la libertad creativa y las expectativas ideológicas, culminando en controversias como el caso del film 'P.M.' y debates sobre el rol del artista revolucionario.",
    historicalContext: "Cuba vivió su período de mayor integración con el bloque soviético, lo que trajo estabilidad económica pero también restricciones ideológicas. El éxodo del Mariel (1980), la participación en conflictos internacionales y las crecientes dificultades económicas hacia finales de los 80 crearon un contexto complejo para la producción cultural.",
    characteristics: [
      "Producción regular y profesionalizada",
      "Exploración de temas históricos con mayor libertad",
      "Desarrollo del cine de género (comedias, thrillers)",
      "Coproducciones internacionales frecuentes",
      "Mayor atención a personajes individuales y sus dilemas",
      "Consolidación del Festival Internacional del Nuevo Cine Latinoamericano"
    ],
    keyFigures: [
      "Tomás Gutiérrez Alea",
      "Humberto Solás",
      "Juan Carlos Tabío",
      "Pastor Vega",
      "Manuel Octavio Gómez"
    ],
    representativeMovieIds: []
  },
  {
    id: "periodo-especial",
    name: "Período Especial",
    period: "1990-2000",
    shortDescription: "Supervivencia y reinvención del cine cubano durante la crisis económica más severa desde la Revolución.",
    fullDescription: "La caída del bloque soviético sumió a Cuba en una crisis económica devastadora conocida como el 'Período Especial'. Paradójicamente, este momento de extrema dificultad material produjo algunas de las películas más aclamadas del cine cubano. Con recursos limitados pero libertad creativa expandida, los cineastas exploraron con franqueza las contradicciones sociales, la marginación, la identidad sexual y los efectos de la crisis en la vida cotidiana. 'Fresa y Chocolate' (1993) se convirtió en un hito cultural, siendo la primera película cubana nominada al Oscar.",
    historicalContext: "El colapso de la Unión Soviética eliminó el 85% del comercio exterior cubano. La escasez de alimentos, medicinas y combustible transformó la vida diaria. Este contexto de crisis existencial pero también de apertura forzada al turismo y la inversión extranjera creó nuevas dinámicas sociales que el cine documentó con agudeza.",
    characteristics: [
      "Producción limitada por escasez de recursos",
      "Coproducciones internacionales como estrategia de supervivencia",
      "Mayor libertad temática y crítica social",
      "Exploración de temas antes tabú (homosexualidad, religión, prostitución)",
      "Tono más íntimo y personal",
      "Reconocimiento internacional sin precedentes"
    ],
    keyFigures: [
      "Tomás Gutiérrez Alea",
      "Juan Carlos Tabío",
      "Fernando Pérez",
      "Daniel Díaz Torres",
      "Arturo Sotto"
    ],
    representativeMovieIds: ["fresa-chocolate-1993"]
  },
  {
    id: "nuevo-milenio",
    name: "Nuevo Milenio",
    period: "2000-2010",
    shortDescription: "Renovación generacional y nuevas formas de hacer cine en la era digital.",
    fullDescription: "El nuevo milenio trajo una renovación tanto tecnológica como generacional al cine cubano. La tecnología digital democratizó la producción cinematográfica, permitiendo el surgimiento del cine independiente fuera del ICAIC. Cineastas como Fernando Pérez alcanzaron nuevas cotas artísticas con obras como 'Suite Habana', mientras que una nueva generación comenzaba a explorar narrativas que reflejaban las complejidades de la Cuba contemporánea. El período también vio un auge del documentalismo y la experimentación formal.",
    historicalContext: "Cuba navegó la recuperación parcial del Período Especial, la expansión del turismo y las remesas, y los cambios asociados con la transición del poder de Fidel a Raúl Castro. La proliferación de internet y los medios digitales comenzó a transformar el acceso a la información y las formas de producción cultural.",
    characteristics: [
      "Adopción de tecnologías digitales",
      "Surgimiento del cine independiente",
      "Documentalismo poético y personal",
      "Mirada nostálgica y reflexiva sobre la identidad cubana",
      "Coproducciones con España y otros países iberoamericanos",
      "Nuevas generaciones de cineastas"
    ],
    keyFigures: [
      "Fernando Pérez",
      "Humberto Solás",
      "Juan Carlos Cremata",
      "Pavel Giroud",
      "Esteban Insausti"
    ],
    representativeMovieIds: ["suite-habana-2003", "marti-2010"]
  },
  {
    id: "contemporaneo",
    name: "Cine Contemporáneo",
    period: "2010-Presente",
    shortDescription: "Diversificación, cine independiente y nuevas voces del cine cubano en el siglo XXI.",
    fullDescription: "La década de 2010 y los años siguientes han sido testigos de la mayor diversificación en la historia del cine cubano. El cine independiente, producido fuera del ICAIC con recursos propios o financiamiento internacional, se ha consolidado como fuerza creativa. 'Conducta' (2014) de Ernesto Daranas se convirtió en la película más vista en la historia de Cuba, demostrando que el cine nacional sigue conectando con su público. Cineastas como Miguel Coyula han llevado la experimentación a nuevos extremos, mientras que una nueva ola de documentalistas explora temas de migración, identidad y cambio social.",
    historicalContext: "Cuba ha experimentado transformaciones significativas: la apertura de relaciones con Estados Unidos bajo Obama y su posterior retroceso, la muerte de Fidel Castro, reformas económicas limitadas, y el auge de internet y las redes sociales. La emigración masiva de jóvenes profesionales, incluyendo cineastas, ha creado una diáspora artística que produce desde el exterior pero sigue conectada con la isla.",
    characteristics: [
      "Coexistencia de cine institucional e independiente",
      "Diversidad temática sin precedentes",
      "Presencia fuerte en festivales internacionales",
      "Exploración de la diáspora y la identidad transnacional",
      "Uso creativo de plataformas digitales y streaming",
      "Nuevas formas de financiamiento y distribución",
      "Diálogo intergeneracional entre cineastas"
    ],
    keyFigures: [
      "Ernesto Daranas",
      "Miguel Coyula",
      "Carlos Lechuga",
      "Fernando Pérez",
      "Alejandro Brugués"
    ],
    representativeMovieIds: ["conducta-2014", "memoria-2022"]
  }
];

export const getEraById = (id: string): Era | undefined => {
  return eras.find((era) => era.id === id);
};
