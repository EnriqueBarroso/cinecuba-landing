import { useState, useEffect } from "react";
// Importamos los datos locales directamente
import { movies as localMovies, Movie } from "@/data/movies";

export const useMovies = () => {
  // Inicializamos el estado directamente con los datos locales
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulamos una carga muy rápida para que la transición se sienta suave
    // pero usamos los datos estáticos garantizados.
    const loadMovies = () => {
      try {
        setMovies(localMovies);
        setLoading(false);
      } catch (err) {
        setError("Error cargando películas locales");
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return { movies, loading, error };
};