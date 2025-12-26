import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Film, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useVideoById, useRelatedVideos, VideoItem } from "@/hooks/useVideoCatalog";
import { getMovieById } from "@/data/movies";

const RelatedVideoCard = ({ video }: { video: VideoItem }) => {
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
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center">
              <Play className="w-6 h-6 text-background fill-background ml-0.5" />
            </div>
          </div>
        </div>
        
        <div className="mt-4 space-y-1">
          <h3 className="font-serif text-base font-medium text-foreground group-hover:text-gold transition-colors duration-300 line-clamp-1">
            {video.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
            <span>{video.year}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

const VideoPlayer = () => {
  const { id } = useParams<{ id: string }>();
  const { data: video, isLoading, error } = useVideoById(id);
  const { data: relatedVideos = [] } = useRelatedVideos(id, 4);

  // Check if this video is linked to a local catalog movie
  const linkedMovie = video?.movie_id ? getMovieById(video.movie_id) : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-gold">Cargando video...</div>
      </div>
    );
  }

  if (error || !video) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 lg:px-12 py-32 text-center">
          <h1 className="font-serif text-3xl mb-4">Video no encontrado</h1>
          <Link to="/videoteca" className="text-gold hover:underline">
            Volver a la videoteca
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Video Player */}
      <section className="relative pt-20">
        <div className="w-full aspect-video bg-secondary relative">
          <iframe
            src={video.video_url}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Video Info */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <Link 
            to="/videoteca" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Volver a videoteca</span>
          </Link>

          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
            {/* Poster */}
            <div className="hidden lg:block">
              <div className="aspect-[2/3] overflow-hidden bg-secondary sticky top-24">
                <img
                  src={video.poster_url}
                  alt={`Poster de ${video.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {video.genre.map((g) => (
                    <span 
                      key={g}
                      className="text-xs uppercase tracking-wider px-3 py-1 border border-hairline text-muted-foreground"
                    >
                      {g}
                    </span>
                  ))}
                </div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
                  {video.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{video.year}</span>
                  </div>
                  <span className="text-hairline">•</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{video.duration}</span>
                  </div>
                  <span className="text-hairline">•</span>
                  <div className="flex items-center gap-2">
                    <Film className="w-4 h-4" />
                    <span>{video.director}</span>
                  </div>
                </div>

                {/* Link to catalog if available */}
                {linkedMovie && (
                  <Link
                    to={`/pelicula/${linkedMovie.id}`}
                    className="inline-flex items-center gap-2 text-sm text-gold hover:underline"
                  >
                    <Film className="w-4 h-4" />
                    Ver ficha completa en catálogo
                  </Link>
                )}
              </div>

              <div className="space-y-4 border-t border-hairline pt-8">
                <h2 className="font-serif text-2xl">Sinopsis</h2>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  {video.synopsis}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 border-t border-hairline pt-8">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-gold">Director</span>
                  <p className="text-foreground">{video.director}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-gold">Año</span>
                  <p className="text-foreground">{video.year}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-gold">Duración</span>
                  <p className="text-foreground">{video.duration}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-gold">Género</span>
                  <p className="text-foreground">{video.genre.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Videos */}
      {relatedVideos.length > 0 && (
        <section className="py-16 lg:py-24 border-t border-hairline">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-end justify-between mb-12">
              <div className="space-y-2">
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold">
                  Continúa viendo
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-medium">
                  Más en la Videoteca
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {relatedVideos.map((relatedVideo) => (
                <RelatedVideoCard key={relatedVideo.id} video={relatedVideo} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default VideoPlayer;
