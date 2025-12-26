import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { eras } from "@/data/eras";
import { movies } from "@/data/movies";
import { getMovieById } from "@/data/movies";
import { Calendar, ArrowRight, Film } from "lucide-react";
import { motion } from "framer-motion";

const Eras = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Épocas del Cine Cubano
            </h1>
            <p className="text-muted-foreground mb-12 max-w-3xl text-lg leading-relaxed">
              Un recorrido por más de un siglo de historia cinematográfica cubana, desde las primeras proyecciones 
              en 1897 hasta las producciones contemporáneas. Cada época refleja los cambios sociales, políticos 
              y artísticos de la isla.
            </p>
          </motion.div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold to-gold/50 hidden md:block" />
            
            <div className="space-y-16">
              {eras.map((era, index) => {
                const representativeMovies = era.representativeMovieIds
                  .slice(0, 2)
                  .map(id => getMovieById(id))
                  .filter(Boolean);
                
                const isEven = index % 2 === 0;
                
                return (
                  <motion.article
                    key={era.id}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`relative md:w-[calc(50%-2rem)] ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute top-6 hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-gold ${
                      isEven ? 'right-0 translate-x-[calc(100%+1.5rem)]' : 'left-0 -translate-x-[calc(100%+1.5rem)]'
                    }`}>
                      <div className="w-2 h-2 rounded-full bg-background" />
                    </div>
                    
                    <Link 
                      to={`/epoca/${era.id}`}
                      className="group block bg-card border border-hairline rounded-lg overflow-hidden hover:border-gold/50 transition-all duration-300"
                    >
                      <div className="p-6 md:p-8">
                        {/* Period Badge */}
                        <div className="flex items-center gap-2 mb-4">
                          <Calendar className="w-4 h-4 text-gold" />
                          <span className="text-gold text-sm font-medium tracking-wide">
                            {era.period}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3 group-hover:text-gold transition-colors">
                          {era.name}
                        </h2>
                        
                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {era.shortDescription}
                        </p>
                        
                        {/* Key Figures Preview */}
                        <div className="mb-6">
                          <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                            Figuras Destacadas
                          </h4>
                          <p className="text-sm text-foreground/80">
                            {era.keyFigures.slice(0, 3).join(" · ")}
                            {era.keyFigures.length > 3 && " ..."}
                          </p>
                        </div>
                        
                        {/* Representative Movies */}
                        {representativeMovies.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                              <Film className="w-3 h-3" />
                              Películas Representativas
                            </h4>
                            <div className="flex gap-3">
                              {representativeMovies.map((movie) => (
                                <div key={movie!.id} className="w-16 aspect-[2/3] rounded overflow-hidden">
                                  <img 
                                    src={movie!.poster} 
                                    alt={movie!.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* CTA */}
                        <div className="flex items-center gap-2 text-gold group-hover:gap-3 transition-all">
                          <span className="text-sm font-medium">Explorar época</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Eras;
