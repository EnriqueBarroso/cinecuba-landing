import { useState, useMemo } from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { movies, Movie } from "@/data/movies";

interface MovieSearchProps {
  onFilteredMovies: (movies: Movie[]) => void;
}

export const MovieSearch = ({ onFilteredMovies }: MovieSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedDirector, setSelectedDirector] = useState<string>("all");

  // Extract unique values for filters
  const genres = useMemo(() => {
    const allGenres = movies.flatMap((movie) => movie.genre);
    return [...new Set(allGenres)].sort();
  }, []);

  const years = useMemo(() => {
    const allYears = movies.map((movie) => movie.year);
    return [...new Set(allYears)].sort((a, b) => b - a);
  }, []);

  const directors = useMemo(() => {
    const allDirectors = movies.map((movie) => movie.director);
    return [...new Set(allDirectors)].sort();
  }, []);

  // Filter movies based on current filters
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch =
        searchQuery === "" ||
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.synopsis.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesGenre =
        selectedGenre === "all" || movie.genre.includes(selectedGenre);

      const matchesYear =
        selectedYear === "all" || movie.year.toString() === selectedYear;

      const matchesDirector =
        selectedDirector === "all" || movie.director === selectedDirector;

      return matchesSearch && matchesGenre && matchesYear && matchesDirector;
    });
  }, [searchQuery, selectedGenre, selectedYear, selectedDirector]);

  // Update parent component when filters change
  useMemo(() => {
    onFilteredMovies(filteredMovies);
  }, [filteredMovies, onFilteredMovies]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedGenre("all");
    setSelectedYear("all");
    setSelectedDirector("all");
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedGenre !== "all" ||
    selectedYear !== "all" ||
    selectedDirector !== "all";

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar por título, director o sinopsis..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 pr-4 py-6 bg-secondary border-hairline text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-gold focus:border-gold"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Genre Filter */}
        <Select value={selectedGenre} onValueChange={setSelectedGenre}>
          <SelectTrigger className="w-full sm:w-[160px] bg-secondary border-hairline text-foreground focus:ring-1 focus:ring-gold">
            <SelectValue placeholder="Género" />
          </SelectTrigger>
          <SelectContent className="bg-card border-hairline">
            <SelectItem value="all" className="text-foreground focus:bg-secondary focus:text-foreground">
              Todos los géneros
            </SelectItem>
            {genres.map((genre) => (
              <SelectItem 
                key={genre} 
                value={genre}
                className="text-foreground focus:bg-secondary focus:text-foreground"
              >
                {genre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Year Filter */}
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-full sm:w-[140px] bg-secondary border-hairline text-foreground focus:ring-1 focus:ring-gold">
            <SelectValue placeholder="Año" />
          </SelectTrigger>
          <SelectContent className="bg-card border-hairline">
            <SelectItem value="all" className="text-foreground focus:bg-secondary focus:text-foreground">
              Todos los años
            </SelectItem>
            {years.map((year) => (
              <SelectItem 
                key={year} 
                value={year.toString()}
                className="text-foreground focus:bg-secondary focus:text-foreground"
              >
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Director Filter */}
        <Select value={selectedDirector} onValueChange={setSelectedDirector}>
          <SelectTrigger className="w-full sm:w-[200px] bg-secondary border-hairline text-foreground focus:ring-1 focus:ring-gold">
            <SelectValue placeholder="Director" />
          </SelectTrigger>
          <SelectContent className="bg-card border-hairline">
            <SelectItem value="all" className="text-foreground focus:bg-secondary focus:text-foreground">
              Todos los directores
            </SelectItem>
            {directors.map((director) => (
              <SelectItem 
                key={director} 
                value={director}
                className="text-foreground focus:bg-secondary focus:text-foreground"
              >
                {director}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground hover:bg-secondary"
          >
            <X className="w-4 h-4 mr-2" />
            Limpiar filtros
          </Button>
        )}
      </div>

      {/* Results count */}
      {hasActiveFilters && (
        <p className="text-sm text-muted-foreground">
          {filteredMovies.length === 0 ? (
            "No se encontraron películas"
          ) : filteredMovies.length === 1 ? (
            "1 película encontrada"
          ) : (
            `${filteredMovies.length} películas encontradas`
          )}
        </p>
      )}
    </div>
  );
};
