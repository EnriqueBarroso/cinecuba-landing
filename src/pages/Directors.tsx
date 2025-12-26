import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { movies } from "@/data/movies";

const Directors = () => {
  // Extract unique directors from movies
  const directors = [...new Set(movies.map((movie) => movie.director))].sort();

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
              const directorMovies = movies.filter((m) => m.director === director);
              return (
                <div
                  key={director}
                  className="bg-card border border-hairline rounded-lg p-6 hover:border-gold/50 transition-colors"
                >
                  <h2 className="font-serif text-xl text-foreground mb-2">
                    {director}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {directorMovies.length} {directorMovies.length === 1 ? 'película' : 'películas'}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {directorMovies.slice(0, 3).map((movie) => (
                      <span
                        key={movie.id}
                        className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground"
                      >
                        {movie.title}
                      </span>
                    ))}
                  </div>
                </div>
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
