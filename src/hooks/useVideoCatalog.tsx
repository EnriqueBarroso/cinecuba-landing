import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface VideoItem {
  id: string;
  movie_id: string | null;
  title: string;
  year: number;
  director: string;
  poster_url: string;
  synopsis: string;
  duration: string;
  genre: string[];
  video_url: string;
  is_featured: boolean;
  created_at: string;
}

export const useVideoCatalog = () => {
  const { data: videos = [], isLoading, error } = useQuery({
    queryKey: ["video-catalog"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("video_catalog")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data as VideoItem[];
    },
  });

  return { videos, loading: isLoading, error: error?.message || null };
};

export const useFeaturedVideos = () => {
  const { data: videos = [], isLoading, error } = useQuery({
    queryKey: ["video-catalog", "featured"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("video_catalog")
        .select("*")
        .eq("is_featured", true)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data as VideoItem[];
    },
  });

  return { videos, loading: isLoading, error: error?.message || null };
};

export const useVideoById = (id: string | undefined) => {
  return useQuery({
    queryKey: ["video-catalog", id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase
        .from("video_catalog")
        .select("*")
        .eq("id", id)
        .maybeSingle();
      
      if (error) throw error;
      return data as VideoItem | null;
    },
    enabled: !!id,
  });
};

export const useVideoByMovieId = (movieId: string | undefined) => {
  return useQuery({
    queryKey: ["video-catalog", "movie", movieId],
    queryFn: async () => {
      if (!movieId) return null;
      const { data, error } = await supabase
        .from("video_catalog")
        .select("*")
        .eq("movie_id", movieId)
        .maybeSingle();
      
      if (error) throw error;
      return data as VideoItem | null;
    },
    enabled: !!movieId,
  });
};

export const useRelatedVideos = (currentId: string | undefined, limit = 4) => {
  return useQuery({
    queryKey: ["video-catalog", "related", currentId, limit],
    queryFn: async () => {
      if (!currentId) return [];
      const { data, error } = await supabase
        .from("video_catalog")
        .select("*")
        .neq("id", currentId)
        .limit(limit);
      
      if (error) throw error;
      return data as VideoItem[];
    },
    enabled: !!currentId,
  });
};
