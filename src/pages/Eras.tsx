import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { movies } from "@/data/movies";

const Eras = () => {
  // Group movies by decade
  const moviesByDecade = movies.reduce((acc, movie) => {
    const decade = Math.floor(movie.year / 10) * 10;
    const decadeLabel = `${decade}s`;
    if (!acc[decadeLabel]) {
      acc[decadeLabel] = [];
    }
    acc[decadeLabel].push(movie);
    return acc;
  }, {} as Record<string, typeof movies>);

  // Sort decades in descending order
  const sortedDecades = Object.keys(moviesByDecade).sort((a, b) => 
    parseInt(b) - parseInt(a)
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Épocas
          </h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Un recorrido por la historia del cine cubano a través de las décadas.
          </p>
          
          <div className="space-y-12">
            {sortedDecades.map((decade) => (
              <section key={decade}>
                <h2 className="font-serif text-2xl text-gold mb-6 border-b border-hairline pb-2">
                  Década de {decade}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {moviesByDecade[decade].map((movie) => (
                    <div
                      key={movie.id}
                      className="bg-card border border-hairline rounded-lg p-4 hover:border-gold/50 transition-colors"
                    >
                      <h3 className="font-serif text-lg text-foreground mb-1">
                        {movie.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {movie.year} · {movie.director}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Eras;
