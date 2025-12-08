import posterLucia from "@/assets/poster-lucia.jpg";
import posterFresa from "@/assets/poster-fresa.jpg";
import posterChala from "@/assets/poster-chala.jpg";
import posterSuite from "@/assets/poster-suite.jpg";
import posterBuena from "@/assets/poster-buena.jpg";
import posterUltimo from "@/assets/poster-ultimo.jpg";

interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  poster: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Lucía",
    year: 1968,
    director: "Humberto Solás",
    poster: posterLucia,
  },
  {
    id: 2,
    title: "Fresa y Chocolate",
    year: 1993,
    director: "Tomás Gutiérrez Alea",
    poster: posterFresa,
  },
  {
    id: 3,
    title: "Conducta",
    year: 2014,
    director: "Ernesto Daranas",
    poster: posterChala,
  },
  {
    id: 4,
    title: "Suite Habana",
    year: 2003,
    director: "Fernando Pérez",
    poster: posterSuite,
  },
  {
    id: 5,
    title: "Los Músicos",
    year: 1999,
    director: "Wim Wenders",
    poster: posterBuena,
  },
  {
    id: 6,
    title: "Últimos Días",
    year: 2019,
    director: "Fernando Pérez",
    poster: posterUltimo,
  },
];

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[2/3] overflow-hidden bg-secondary">
        <img
          src={movie.poster}
          alt={`Poster de ${movie.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-gold" />
      </div>
      
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-gold transition-colors duration-300">
          {movie.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
          <span>{movie.year}</span>
          <span className="text-hairline">•</span>
          <span>{movie.director}</span>
        </div>
      </div>
    </article>
  );
};

export const MovieGrid = () => {
  return (
    <section id="cartelera" className="py-20 lg:py-28 border-t border-hairline">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-2">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold">
              Colección
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium">
              Cartelera
            </h2>
          </div>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light hidden md:block"
          >
            Ver todo →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-10 text-center md:hidden">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
          >
            Ver todo →
          </a>
        </div>
      </div>
    </section>
  );
};
