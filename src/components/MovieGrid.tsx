import { Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import posterLucia from "@/assets/poster-lucia.jpg";
import posterFresa from "@/assets/poster-fresa.jpg";
import posterChala from "@/assets/poster-chala.jpg";
import posterSuite from "@/assets/poster-suite.jpg";
import posterBuena from "@/assets/poster-buena.jpg";
import posterUltimo from "@/assets/poster-ultimo.jpg";

interface Movie {
  id: string;
  title: string;
  year: number;
  director: string;
  poster: string;
}

const movies: Movie[] = [
  {
    id: "lucia-1968",
    title: "Lucía",
    year: 1968,
    director: "Humberto Solás",
    poster: posterLucia,
  },
  {
    id: "fresa-chocolate-1993",
    title: "Fresa y Chocolate",
    year: 1993,
    director: "Tomás Gutiérrez Alea",
    poster: posterFresa,
  },
  {
    id: "conducta-2014",
    title: "Conducta",
    year: 2014,
    director: "Ernesto Daranas",
    poster: posterChala,
  },
  {
    id: "suite-habana-2003",
    title: "Suite Habana",
    year: 2003,
    director: "Fernando Pérez",
    poster: posterSuite,
  },
  {
    id: "buena-vista-1999",
    title: "Los Músicos",
    year: 1999,
    director: "Wim Wenders",
    poster: posterBuena,
  },
  {
    id: "ultimos-dias-2019",
    title: "Últimos Días",
    year: 2019,
    director: "Fernando Pérez",
    poster: posterUltimo,
  },
];

const MovieCard = ({ movie, isFavorite, onToggleFavorite }: { 
  movie: Movie; 
  isFavorite: boolean;
  onToggleFavorite: () => void;
}) => {
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
        
        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background/80"
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              isFavorite 
                ? 'fill-gold text-gold' 
                : 'text-foreground hover:text-gold'
            }`} 
          />
        </button>
      </div>
      
      <div className="mt-4 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-gold transition-colors duration-300">
            {movie.title}
          </h3>
          {isFavorite && (
            <Heart className="w-4 h-4 fill-gold text-gold flex-shrink-0 mt-1" />
          )}
        </div>
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
  const { isFavorite, toggleFavorite } = useFavorites();

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
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              isFavorite={isFavorite(movie.id)}
              onToggleFavorite={() => toggleFavorite(movie.id)}
            />
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
