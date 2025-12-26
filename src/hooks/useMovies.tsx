import { useState } from "react";
import { movies as localMovies, Movie } from "@/data/movies";

export const useMovies = () => {
  const [movies] = useState<Movie[]>(localMovies);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  return { movies, loading, error };
};