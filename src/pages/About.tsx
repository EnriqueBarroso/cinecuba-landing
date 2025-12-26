import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Film, Heart, Globe, Users, BookOpen, Award, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative py-20 md:py-32 bg-gradient-to-b from-card to-background border-b border-hairline overflow-hidden"
        >
          {/* Decorative film strip pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-gold rounded-full" />
            <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-gold rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-gold" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Film className="w-8 h-8 text-gold" />
                <span className="text-gold font-medium tracking-wide uppercase text-sm">Nuestra Misión</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                Preservando el patrimonio cinematográfico de Cuba
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                CineCuba es un archivo digital dedicado a documentar, preservar y difundir la rica 
                historia del cine cubano, desde sus orígenes en 1897 hasta las producciones contemporáneas.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif text-3xl text-foreground mb-6">Nuestra Visión</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Creemos que el cine cubano es uno de los tesoros culturales más importantes de América Latina. 
                  Desde los documentales revolucionarios de Santiago Álvarez hasta las obras intimistas de 
                  Fernando Pérez, el cine de la isla ha producido algunas de las películas más innovadoras 
                  y emocionantes del continente.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestra visión es crear el archivo más completo del cine cubano, accesible para 
                  investigadores, estudiantes, cinéfilos y el público general en todo el mundo.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="font-serif text-3xl text-foreground mb-6">¿Por Qué CineCuba?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  El cine cubano enfrenta desafíos únicos de preservación. Muchas películas clásicas 
                  existen solo en copias deterioradas, y la información sobre cineastas y producciones 
                  está dispersa en archivos de difícil acceso.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  CineCuba surge como respuesta a esta necesidad: un espacio digital donde converge 
                  la historia, el análisis crítico y la celebración del séptimo arte cubano.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-card border-y border-hairline">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Nuestros Valores
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Guiados por el amor al cine y el compromiso con la preservación cultural.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Pasión",
                  description: "Amor profundo por el cine cubano y su legado artístico e histórico."
                },
                {
                  icon: BookOpen,
                  title: "Rigor",
                  description: "Investigación meticulosa y documentación precisa de cada obra y cineasta."
                },
                {
                  icon: Globe,
                  title: "Accesibilidad",
                  description: "Hacer el cine cubano accesible a audiencias globales sin barreras."
                },
                {
                  icon: Users,
                  title: "Comunidad",
                  description: "Construir una comunidad de cinéfilos, investigadores y amantes del cine."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Qué Ofrecemos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Un archivo vivo del cine cubano, en constante crecimiento y actualización.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Film,
                  title: "Catálogo de Películas",
                  description: "Fichas detalladas de películas cubanas con sinopsis, fichas técnicas, y contexto histórico.",
                  link: "/peliculas",
                  linkText: "Explorar películas"
                },
                {
                  icon: Users,
                  title: "Perfiles de Directores",
                  description: "Biografías completas de los cineastas que han forjado la identidad del cine cubano.",
                  link: "/directores",
                  linkText: "Conocer directores"
                },
                {
                  icon: Award,
                  title: "Historia por Épocas",
                  description: "Un recorrido cronológico por las diferentes etapas del cine cubano y su evolución.",
                  link: "/epocas",
                  linkText: "Ver épocas"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-hairline rounded-lg p-8 hover:border-gold/50 transition-colors group"
                >
                  <feature.icon className="w-10 h-10 text-gold mb-6" />
                  <h3 className="font-serif text-xl text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{feature.description}</p>
                  <Link 
                    to={feature.link}
                    className="text-gold text-sm font-medium hover:text-gold/80 transition-colors inline-flex items-center gap-2 group-hover:gap-3"
                  >
                    {feature.linkText} →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 bg-card border-y border-hairline">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8 italic">
                &ldquo;El cine cubano es un espejo de nuestra identidad, un testimonio de nuestras luchas 
                y un canto a nuestros sueños.&rdquo;
              </p>
              <cite className="text-muted-foreground not-italic">
                — Tomás Gutiérrez Alea, director de &ldquo;Memorias del Subdesarrollo&rdquo;
              </cite>
            </motion.blockquote>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <Mail className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="font-serif text-3xl text-foreground mb-4">
                ¿Quieres Colaborar?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                CineCuba es un proyecto en constante evolución. Si tienes información, materiales 
                o simplemente quieres contribuir a preservar el patrimonio cinematográfico cubano, 
                nos encantaría escucharte.
              </p>
              <a 
                href="mailto:contacto@cinecuba.org"
                className="inline-flex items-center gap-2 bg-gold text-background px-8 py-3 rounded-lg font-medium hover:bg-gold/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contáctanos
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
