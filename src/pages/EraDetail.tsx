import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getEraById, eras } from "@/data/eras";
import { getMovieById } from "@/data/movies";
import { ArrowLeft, Calendar, Film, Users, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

const EraDetail = () => {
  const { id } = useParams<{ id: string }>();
  const era = getEraById(id || "");
  
  // Get adjacent eras for navigation
  const currentIndex = eras.findIndex(e => e.id === id);
  const prevEra = currentIndex > 0 ? eras[currentIndex - 1] : null;
  const nextEra = currentIndex < eras.length - 1 ? eras[currentIndex + 1] : null;
  
  if (!era) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-serif text-4xl text-foreground mb-4">Época no encontrada</h1>
            <Link to="/epocas" className="text-gold hover:text-gold/80 transition-colors">
              ← Volver a Épocas
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Get representative movies
  const representativeMovies = era.representativeMovieIds
    .map(movieId => getMovieById(movieId))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative py-16 md:py-24 bg-gradient-to-b from-card to-background border-b border-hairline"
        >
          <div className="container mx-auto px-6 lg:px-12">
            <Link 
              to="/epocas" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Épocas
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-gold" />
                <span className="text-gold font-medium">{era.period}</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                {era.name}
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {era.shortDescription}
              </p>
            </motion.div>
          </div>
        </motion.section>
        
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-serif text-2xl text-foreground mb-4 flex items-center gap-3">
                  <Film className="w-6 h-6 text-gold" />
                  Panorama General
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {era.fullDescription}
                </p>
              </motion.section>
              
              {/* Historical Context */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card border border-hairline rounded-lg p-6 md:p-8"
              >
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Contexto Histórico
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {era.historicalContext}
                </p>
              </motion.section>
              
              {/* Characteristics */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-gold" />
                  Características
                </h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {era.characteristics.map((char, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 bg-card border border-hairline rounded-lg p-4"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                      <span className="text-muted-foreground">{char}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
              
              {/* Representative Movies */}
              {representativeMovies.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="font-serif text-2xl text-foreground mb-6">
                    Películas Representativas
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {representativeMovies.map((movie) => (
                      <Link
                        key={movie!.id}
                        to={`/pelicula/${movie!.id}`}
                        className="group bg-card border border-hairline rounded-lg overflow-hidden hover:border-gold/50 transition-all duration-300"
                      >
                        <div className="aspect-[2/3] overflow-hidden">
                          <img 
                            src={movie!.poster} 
                            alt={movie!.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-serif text-lg text-foreground group-hover:text-gold transition-colors">
                            {movie!.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {movie!.year} · {movie!.director}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>
            
            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Key Figures */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-card border border-hairline rounded-lg p-6"
              >
                <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-gold" />
                  Figuras Clave
                </h3>
                <ul className="space-y-3">
                  {era.keyFigures.map((figure, index) => (
                    <li 
                      key={index}
                      className="text-muted-foreground border-b border-hairline pb-3 last:border-0 last:pb-0"
                    >
                      {figure}
                    </li>
                  ))}
                </ul>
              </motion.section>
              
              {/* Era Navigation */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-card border border-hairline rounded-lg p-6"
              >
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Explorar Otras Épocas
                </h3>
                <div className="space-y-3">
                  {prevEra && (
                    <Link
                      to={`/epoca/${prevEra.id}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors group"
                    >
                      <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      <div>
                        <span className="text-xs uppercase tracking-wider opacity-60">Anterior</span>
                        <p className="text-sm">{prevEra.name}</p>
                      </div>
                    </Link>
                  )}
                  {nextEra && (
                    <Link
                      to={`/epoca/${nextEra.id}`}
                      className="flex items-center justify-end gap-3 text-muted-foreground hover:text-gold transition-colors group text-right"
                    >
                      <div>
                        <span className="text-xs uppercase tracking-wider opacity-60">Siguiente</span>
                        <p className="text-sm">{nextEra.name}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.section>
            </aside>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EraDetail;
