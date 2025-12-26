-- Crear tabla para el catálogo de videos
CREATE TABLE public.video_catalog (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  movie_id TEXT, -- Referencia opcional al catálogo local
  title TEXT NOT NULL,
  year INTEGER NOT NULL,
  director TEXT NOT NULL,
  poster_url TEXT NOT NULL,
  synopsis TEXT NOT NULL,
  duration TEXT NOT NULL,
  genre TEXT[] NOT NULL,
  video_url TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS con lectura pública
ALTER TABLE public.video_catalog ENABLE ROW LEVEL SECURITY;

-- Política: Cualquiera puede ver el catálogo de videos
CREATE POLICY "Public can view video catalog" 
ON public.video_catalog 
FOR SELECT 
USING (true);