import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Award, Calendar, Film, MapPin, Heart } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getDirectorById, Director } from "@/data/directors";
import { movies, Movie } from "@/data/movies";
import { useFavorites } from "@/hooks/useFavorites";

const DirectorInitials = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="w-full h-full bg-gradient-to-br from-gold/20 to-background flex items-center justify-center">
      <span className="font-serif text-6xl md:text-8xl text-gold/60">{initials}</span>
    </div>
  );
};

const DirectorFilmCard = ({ 
  movie, 
  isFavorite,
  onToggleFavorite 
}: { 
  movie: Movie;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}) => (
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
        <p className="text-sm text-muted-foreground">
          {movie.year} · {movie.duration}
        </p>
      </div>
    </article>
  </Link>
);

const DirectorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const director = id ? getDirectorById(id) : undefined;
  
  // Get movies by this director
  const directorMovies = director 
    ? movies.filter((m) => m.director === director.name)
    : [];

  if (!director) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 lg:px-12 py-32 text-center">
          <h1 className="font-serif text-3xl mb-4">Director no encontrado</h1>
          <Link to="/directores" className="text-gold hover:underline">
            Volver a directores
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const lifeYears = director.deathYear 
    ? `${director.birthYear} - ${director.deathYear}`
    : `${director.birthYear} - presente`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <Link 
            to="/directores" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Volver a directores</span>
          </Link>

          <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16">
            {/* Director Photo */}
            <div className="mx-auto lg:mx-0 w-full max-w-[320px]">
              <div className="aspect-[3/4] overflow-hidden bg-secondary border border-hairline">
                {director.photo ? (
                  <img
                    src={director.photo}
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <DirectorInitials name={director.name} />
                )}
              </div>
            </div>

            {/* Director Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gold">
                  Director
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
                  {director.name}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{lifeYears}</span>
                  </div>
                  <span className="text-hairline">•</span>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{director.nationality}</span>
                  </div>
                  <span className="text-hairline">•</span>
                  <div className="flex items-center gap-2">
                    <Film className="w-4 h-4" />
                    <span>{director.activeYears}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 border-t border-hairline pt-8">
                <h2 className="font-serif text-2xl">Biografía</h2>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  {director.biography}
                </p>
              </div>

              {/* Awards */}
              {director.awards.length > 0 && (
                <div className="space-y-4 border-t border-hairline pt-8">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-gold" />
                    <h2 className="font-serif text-2xl">Premios y Reconocimientos</h2>
                  </div>
                  <ul className="space-y-2">
                    {director.awards.map((award, index) => (
                      <li 
                        key={index}
                        className="text-muted-foreground pl-4 border-l-2 border-gold/30"
                      >
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filmography */}
      {directorMovies.length > 0 && (
        <section className="py-16 lg:py-24 border-t border-hairline">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-2 mb-12">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold">
                En nuestro catálogo
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium">
                Filmografía
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {directorMovies.map((movie) => (
                <DirectorFilmCard 
                  key={movie.id} 
                  movie={movie}
                  isFavorite={isFavorite(movie.id)}
                  onToggleFavorite={() => toggleFavorite(movie.id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default DirectorDetail;
