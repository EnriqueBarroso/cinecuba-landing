import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

export const useFavorites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchFavorites();
    } else {
      setFavorites([]);
      setLoading(false);
    }
  }, [user]);

  const fetchFavorites = async () => {
    if (!user) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from('favorites')
      .select('movie_id')
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching favorites:', error);
    } else {
      setFavorites(data?.map(f => f.movie_id) || []);
    }
    setLoading(false);
  };

  const toggleFavorite = async (movieId: string) => {
    if (!user) {
      toast.error('Inicia sesión para guardar favoritos');
      return;
    }

    const isFavorite = favorites.includes(movieId);

    if (isFavorite) {
      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('movie_id', movieId);

      if (error) {
        toast.error('Error al eliminar de favoritos');
        return;
      }

      setFavorites(prev => prev.filter(id => id !== movieId));
      toast.success('Eliminado de favoritos');
    } else {
      const { error } = await supabase
        .from('favorites')
        .insert({ user_id: user.id, movie_id: movieId });

      if (error) {
        toast.error('Error al agregar a favoritos');
        return;
      }

      setFavorites(prev => [...prev, movieId]);
      toast.success('Agregado a favoritos');
    }
  };

  const isFavorite = (movieId: string) => favorites.includes(movieId);

  return { favorites, loading, toggleFavorite, isFavorite };
};
