import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Play, Film, Star, Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useVideoCatalog, useFeaturedVideos, VideoItem } from "@/hooks/useVideoCatalog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const VideoCard = ({ video }: { video: VideoItem }) => {
  return (
    <Link to={`/videoteca/${video.id}`} className="group block">
      <article>
        <div className="relative aspect-[2/3] overflow-hidden bg-secondary">
          <img
            src={video.poster_url}
            alt={`Poster de ${video.title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
          
          {/* Play button on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center">
              <Play className="w-8 h-8 text-background fill-background ml-1" />
            </div>
          </div>

          {/* Featured badge */}
          {video.is_featured && (
            <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-gold/90 rounded">
              <Star className="w-3 h-3 text-background fill-background" />
              <span className="text-xs font-medium text-background">Destacada</span>
            </div>
          )}
        </div>
        
        <div className="mt-4 space-y-1">
          <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-gold transition-colors duration-300">
            {video.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
            <span>{video.year}</span>
            <span className="text-hairline">•</span>
            <span>{video.director}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

const Videoteca = () => {
  const { videos, loading, error } = useVideoCatalog();
  const { videos: featuredVideos } = useFeaturedVideos();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  // Extract unique genres and years for filters
  const { genres, years } = useMemo(() => {
    const genreSet = new Set<string>();
    const yearSet = new Set<number>();
    
    videos.forEach((video) => {
      video.genre.forEach((g) => genreSet.add(g));
      yearSet.add(video.year);
    });
    
    return {
      genres: Array.from(genreSet).sort(),
      years: Array.from(yearSet).sort((a, b) => b - a),
    };
  }, [videos]);

  // Filter videos
  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesSearch =
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.director.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesGenre =
        selectedGenre === "all" || video.genre.includes(selectedGenre);
      
      const matchesYear =
        selectedYear === "all" || video.year === parseInt(selectedYear);
      
      return matchesSearch && matchesGenre && matchesYear;
    });
  }, [videos, searchQuery, selectedGenre, selectedYear]);

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 lg:px-12 py-32 text-center">
          <h1 className="font-serif text-3xl mb-4">Error al cargar la videoteca</h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <Film className="w-8 h-8 text-gold" />
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold">
                Streaming
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium">
              Videoteca
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Disfruta de las joyas del cine cubano disponibles para ver en línea. 
              Películas clásicas y contemporáneas listas para reproducir.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {featuredVideos.length > 0 && (
        <section className="py-12 border-t border-hairline">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <h2 className="font-serif text-2xl">Destacadas</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {featuredVideos.slice(0, 4).map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-8 border-t border-hairline">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por título o director..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary border-hairline"
              />
            </div>
            
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-full md:w-[180px] bg-secondary border-hairline">
                <SelectValue placeholder="Género" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los géneros</SelectItem>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full md:w-[140px] bg-secondary border-hairline">
                <SelectValue placeholder="Año" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los años</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="space-y-4 animate-pulse">
                  <div className="aspect-[2/3] bg-secondary rounded" />
                  <div className="h-4 bg-secondary rounded w-3/4" />
                  <div className="h-3 bg-secondary rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : filteredVideos.length === 0 ? (
            <div className="text-center py-20">
              <Film className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-serif text-2xl mb-2">No hay videos disponibles</h3>
              <p className="text-muted-foreground">
                {videos.length === 0
                  ? "La videoteca está vacía. Pronto agregaremos contenido."
                  : "No se encontraron videos con los filtros seleccionados."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Videoteca;
