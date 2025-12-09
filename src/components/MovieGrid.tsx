import { useState, useCallback, useMemo } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavorites } from "@/hooks/useFavorites";
import { movies, Movie } from "@/data/movies";
import { MovieSearch } from "./MovieSearch";
import { Button } from "@/components/ui/button";

const MOVIES_PER_PAGE = 6;

const MovieCard = ({ movie, isFavorite, onToggleFavorite }: { 
  movie: Movie; 
  isFavorite: boolean;
  onToggleFavorite: () => void;
}) => {
  return (
    <Link to={`/pelicula/${movie.id}`} className="group block">
      <article>
        <div className="relative aspect-[2/3] overflow-hidden bg-secondary">
          <img
            src={movie.poster}
            alt={`Poster de ${movie.title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-gold" />
          
          <button
            onClick={(e) => {
              e.preventDefault();
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
    </Link>
  );
};

export const MovieGrid = () => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilteredMovies = useCallback((movies: Movie[]) => {
    setFilteredMovies(movies);
    setCurrentPage(1); // Reset to first page when filters change
  }, []);

  const totalPages = Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);

  const paginatedMovies = useMemo(() => {
    const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
    return filteredMovies.slice(startIndex, startIndex + MOVIES_PER_PAGE);
  }, [filteredMovies, currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    document.getElementById("cartelera")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cartelera" className="py-20 lg:py-28 border-t border-hairline">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div className="space-y-2">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold">
              Colección
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium">
              Cartelera
            </h2>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <MovieSearch onFilteredMovies={handleFilteredMovies} />
        </div>

        {/* Grid */}
        {paginatedMovies.length > 0 ? (
          <div 
            key={currentPage}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 animate-fade-in"
          >
            {paginatedMovies.map((movie, index) => (
              <div 
                key={movie.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <MovieCard 
                  movie={movie} 
                  isFavorite={isFavorite(movie.id)}
                  onToggleFavorite={() => toggleFavorite(movie.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No se encontraron películas con los filtros seleccionados.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant="ghost"
                  size="sm"
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 ${
                    currentPage === page
                      ? "bg-gold text-primary-foreground hover:bg-gold/90"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary disabled:opacity-30"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
