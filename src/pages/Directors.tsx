import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { movies } from "@/data/movies";
import { directors, getDirectorByName } from "@/data/directors";

const DirectorInitials = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-background flex items-center justify-center border border-hairline">
      <span className="font-serif text-lg text-gold/60">{initials}</span>
    </div>
  );
};

const Directors = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Directores
          </h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Explora el cine cubano a través de sus directores más destacados.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directors.map((director) => {
              const directorMovies = movies.filter((m) => m.director === director.name);
              return (
                <Link
                  key={director.id}
                  to={`/director/${director.id}`}
                  className="group bg-card border border-hairline rounded-lg p-6 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
                >
                  <div className="flex items-start gap-4">
                    {director.photo ? (
                      <img 
                        src={director.photo} 
                        alt={director.name}
                        className="w-12 h-12 rounded-full object-cover border border-hairline"
                      />
                    ) : (
                      <DirectorInitials name={director.name} />
                    )}
                    <div className="flex-1">
                      <h2 className="font-serif text-xl text-foreground group-hover:text-gold transition-colors mb-1">
                        {director.name}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {director.birthYear} - {director.deathYear || "presente"}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    {directorMovies.length} {directorMovies.length === 1 ? 'película' : 'películas'} en catálogo
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {directorMovies.slice(0, 3).map((movie) => (
                      <span
                        key={movie.id}
                        className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground"
                      >
                        {movie.title}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Directors;
