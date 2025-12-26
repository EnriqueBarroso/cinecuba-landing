-- Tabla para las escenas de las películas
CREATE TABLE imagenes_peliculas (
    id SERIAL PRIMARY KEY,
    movie_id UUID NOT NULL,
    url_imagen TEXT NOT NULL,
    descripcion TEXT,
    es_principal BOOLEAN DEFAULT false,
    FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE
);