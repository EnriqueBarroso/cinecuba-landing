import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Movie } from "@/data/movies";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("movies")
          .select("*")
          .order('created_at', { ascending: false }); // Las más nuevas primero

        if (error) throw error;

        // Mapeamos los datos de la DB (snake_case) a tu interfaz (camelCase)
        const mappedMovies: Movie[] = (data || []).map((m: any) => ({
          id: m.id,
          title: m.title,
          year: m.year,
          director: m.director,
          poster: m.poster,
          synopsis: m.synopsis,
          duration: m.duration,
          genre: m.genre || [],
          videoUrl: m.video_url, // Nota: En la DB es video_url, en el front es videoUrl
        }));

        setMovies(mappedMovies);
      } catch (err: any) {
        console.error("Error fetching movies:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};