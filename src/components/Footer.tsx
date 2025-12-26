import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-hairline">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="font-serif text-xl font-semibold tracking-tight">
            Cine<span className="text-gold">Cuba</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground font-light">
            <Link to="/videoteca" className="hover:text-foreground transition-colors">Videoteca</Link>
            <Link to="/acerca" className="hover:text-foreground transition-colors">Acerca de</Link>
            <a href="#" className="hover:text-foreground transition-colors">Términos</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
            <a href="mailto:contacto@cinecuba.org" className="hover:text-foreground transition-colors">Contacto</a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-light">
            © 2024 CineCuba. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
