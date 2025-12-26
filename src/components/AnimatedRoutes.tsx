import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./PageTransition";
import Index from "@/pages/Index";
import Auth from "@/pages/Auth";
import MovieDetail from "@/pages/MovieDetail";
import Movies from "@/pages/Movies";
import Directors from "@/pages/Directors";
import DirectorDetail from "@/pages/DirectorDetail";
import Eras from "@/pages/Eras";
import EraDetail from "@/pages/EraDetail";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/peliculas"
          element={
            <PageTransition>
              <Movies />
            </PageTransition>
          }
        />
        <Route
          path="/directores"
          element={
            <PageTransition>
              <Directors />
            </PageTransition>
          }
        />
        <Route
          path="/director/:id"
          element={
            <PageTransition>
              <DirectorDetail />
            </PageTransition>
          }
        />
        <Route
          path="/epocas"
          element={
            <PageTransition>
              <Eras />
            </PageTransition>
          }
        />
        <Route
          path="/epoca/:id"
          element={
            <PageTransition>
              <EraDetail />
            </PageTransition>
          }
        />
        <Route
          path="/pelicula/:id"
          element={
            <PageTransition>
              <MovieDetail />
            </PageTransition>
          }
        />
        <Route
          path="/acerca"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/auth"
          element={
            <PageTransition>
              <Auth />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
