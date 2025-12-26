import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MovieGrid } from "@/components/MovieGrid";

const Movies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        <MovieGrid />
      </main>
      
      <Footer />
    </div>
  );
};

export default Movies;
