import { User, Search, Menu, LogOut, Film } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Películas", href: "/peliculas" },
  { label: "Directores", href: "/directores" },
  { label: "Épocas", href: "/epocas" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background via-background/95 to-transparent backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo with film reel icon */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Film className="w-6 h-6 text-gold transition-transform duration-500 group-hover:rotate-180" />
            </div>
            <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              Cine<span className="text-gold">Cuba</span>
            </span>
          </Link>

          {/* Desktop Navigation - Cinephile style */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`
                  relative px-5 py-2 text-sm tracking-wide uppercase
                  transition-all duration-300 ease-out
                  ${isActive(link.href) 
                    ? "text-gold font-medium" 
                    : "text-muted-foreground font-light hover:text-foreground"
                  }
                `}
              >
                {link.label}
                {/* Active indicator - film strip style */}
                <span 
                  className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold
                    transition-all duration-300 ease-out
                    ${isActive(link.href) ? "w-full" : "w-0"}
                  `}
                />
                {/* Hover effect */}
                <span 
                  className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-foreground/30
                    transition-all duration-300 ease-out
                    ${!isActive(link.href) ? "group-hover:w-1/2 w-0" : "w-0"}
                  `}
                />
              </Link>
            ))}
          </div>

          {/* Decorative film strip separator */}
          <div className="hidden lg:flex items-center gap-1 mx-6 opacity-20">
            <div className="w-1 h-3 bg-foreground rounded-sm" />
            <div className="w-1 h-3 bg-foreground rounded-sm" />
            <div className="w-1 h-3 bg-foreground rounded-sm" />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="p-2.5 text-muted-foreground hover:text-gold transition-colors duration-300 rounded-full hover:bg-foreground/5">
              <Search className="w-5 h-5" />
            </button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-gold border-2 border-gold/50 overflow-hidden transition-all duration-300 hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    <User className="w-4 h-4 text-background" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-md border-hairline">
                  <DropdownMenuItem className="text-muted-foreground text-sm">
                    {user.email}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={handleSignOut}
                    className="text-destructive cursor-pointer"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link 
                to="/auth"
                className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-secondary/50 border border-hairline overflow-hidden hover:bg-gold hover:border-gold transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              >
                <User className="w-4 h-4 text-muted-foreground" />
              </Link>
            )}
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-hairline animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`
                    py-3 px-4 text-sm uppercase tracking-wide rounded-lg transition-all duration-300
                    ${isActive(link.href)
                      ? "text-gold bg-gold/10 font-medium border-l-2 border-gold"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-hairline my-2" />
              {user ? (
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="py-3 px-4 text-sm text-destructive hover:bg-destructive/10 rounded-lg text-left transition-colors"
                >
                  Cerrar Sesión
                </button>
              ) : (
                <Link
                  to="/auth"
                  className="py-3 px-4 text-sm text-gold hover:bg-gold/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Iniciar Sesión
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
