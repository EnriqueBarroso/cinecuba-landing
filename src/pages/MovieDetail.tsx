import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Play, Calendar, Clock, Film, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useFavorites } from "@/hooks/useFavorites";
import { Movie, getMovieById, getRelatedMovies } from "@/data/movies";
import { getDirectorByName } from "@/data/directors";
import { useVideoByMovieId } from "@/hooks/useVideoCatalog";

// Componente para tarjetas relacionadas (se mantiene igual, pero tipado)
const RelatedMovieCard = ({ 
  movie, 
  isFavorite, 
  onToggleFavorite 
}: { 
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
    </Link>
  );
};

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { data: videoInCatalog } = useVideoByMovieId(id);
  
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [relatedMovies, setRelatedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    setLoading(true);
    const foundMovie = getMovieById(id);
    setMovie(foundMovie);
    
    if (foundMovie) {
      setRelatedMovies(getRelatedMovies(id, 4));
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-gold">Cargando película...</div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 lg:px-12 py-32 text-center">
          <h1 className="font-serif text-3xl mb-4">Película no encontrada</h1>
          <Link to="/" className="text-gold hover:underline">
            Volver al inicio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const favorite = isFavorite(movie.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero with Video */}
      <section className="relative pt-20">
        <div className="w-full aspect-video bg-secondary relative">
          {movie.videoUrl ? (
            <iframe
              src={movie.videoUrl}
              title={movie.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-foreground/10 flex items-center justify-center mx-auto">
                  <Play className="w-8 h-8 text-foreground" />
                </div>
                <p className="text-muted-foreground">Video no disponible</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Movie Info */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Volver a cartelera</span>
          </Link>

          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
            {/* Poster */}
            <div className="hidden lg:block">
              <div className="aspect-[2/3] overflow-hidden bg-secondary sticky top-24">
                <img
                  src={movie.poster}
                  alt={`Poster de ${movie.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {movie.genre.map((g) => (
                    <span 
                      key={g}
                      className="text-xs uppercase tracking-wider px-3 py-1 border border-hairline text-muted-foreground"
                    >
                      {g}
                    </span>
                  ))}
                </div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
                  {movie.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{movie.year}</span>
                  </div>
                  <span className="text-hairline">•</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{movie.duration}</span>
                  </div>
                  <span className="text-hairline">•</span>
                  <div className="flex items-center gap-2">
                    <Film className="w-4 h-4" />
                    {(() => {
                      const director = getDirectorByName(movie.director);
                      return director ? (
                        <Link 
                          to={`/director/${director.id}`}
                          className="hover:text-gold transition-colors"
                        >
                          {movie.director}
                        </Link>
                      ) : (
                        <span>{movie.director}</span>
                      );
                    })()}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {videoInCatalog && (
                  <Button variant="hero" size="lg" className="gap-2" asChild>
                    <Link to={`/videoteca/${videoInCatalog.id}`}>
                      <Play className="w-5 h-5" />
                      Ver en Videoteca
                    </Link>
                  </Button>
                )}
                <Button 
                  variant={videoInCatalog ? "heroOutline" : "hero"}
                  size="lg" 
                  className="gap-2"
                  onClick={() => toggleFavorite(movie.id)}
                >
                  <Heart className={`w-5 h-5 ${favorite ? 'fill-gold text-gold' : ''}`} />
                  {favorite ? 'En favoritos' : 'Añadir a favoritos'}
                </Button>
              </div>

              {/* Badge if available in videoteca */}
              {videoInCatalog && (
                <div className="flex items-center gap-2 p-4 bg-gold/10 border border-gold/30 rounded-lg">
                  <Video className="w-5 h-5 text-gold" />
                  <span className="text-sm text-gold">
                    Esta película está disponible para ver en la Videoteca
                  </span>
                </div>
              )}

              <div className="space-y-4 border-t border-hairline pt-8">
                <h2 className="font-serif text-2xl">Sinopsis</h2>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  {movie.synopsis}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 border-t border-hairline pt-8">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-gold">Director</span>
                  {(() => {
                    const director = getDirectorByName(movie.director);
                    return director ? (
                      <Link 
                        to={`/director/${director.id}`}
                        className="block text-foreground hover:text-gold transition-colors"
                      >
                        {movie.director}
                      </Link>
                    ) : (
                      <p className="text-foreground">{movie.director}</p>
                    );
                  })()}
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-gold">Año</span>
                  <p className="text-foreground">{movie.year}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-gold">Duración</span>
                  <p className="text-foreground">{movie.duration}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-gold">Género</span>
                  <p className="text-foreground">{movie.genre.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Movies */}
      <section className="py-16 lg:py-24 border-t border-hairline">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold">
                Explora más
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium">
                Películas Relacionadas
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {relatedMovies.map((relatedMovie) => (
              <RelatedMovieCard 
                key={relatedMovie.id} 
                movie={relatedMovie}
                isFavorite={isFavorite(relatedMovie.id)}
                onToggleFavorite={() => toggleFavorite(relatedMovie.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MovieDetail;