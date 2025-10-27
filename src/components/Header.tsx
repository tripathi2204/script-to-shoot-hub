import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            LineProducer.Online
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg py-2">
                  <button
                    onClick={() => scrollToSection("shooting-schedule")}
                    className="w-full text-left px-4 py-2 hover:bg-muted transition-colors"
                  >
                    Shooting Schedule
                  </button>
                  <button
                    onClick={() => scrollToSection("script-breakdown")}
                    className="w-full text-left px-4 py-2 hover:bg-muted transition-colors"
                  >
                    Script Breakdown
                  </button>
                  <button
                    onClick={() => scrollToSection("film-budgeting")}
                    className="w-full text-left px-4 py-2 hover:bg-muted transition-colors"
                  >
                    Film Budgeting
                  </button>
                </div>
              )}
            </div>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Me
            </Link>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <a 
              href="https://lineproducer.online/blog/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </a>
            <Button 
              onClick={() => setIsContactDialogOpen(true)}
              variant="ghost"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <div className="space-y-2">
              <p className="font-semibold text-primary">Services</p>
              <button
                onClick={() => scrollToSection("shooting-schedule")}
                className="block w-full text-left pl-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Shooting Schedule
              </button>
              <button
                onClick={() => scrollToSection("script-breakdown")}
                className="block w-full text-left pl-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Script Breakdown
              </button>
              <button
                onClick={() => scrollToSection("film-budgeting")}
                className="block w-full text-left pl-4 py-2 text-foreground hover:text-primary transition-colors"
              >
                Film Budgeting
              </button>
            </div>
            <Link 
              to="/about" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <a 
              href="https://lineproducer.online/blog/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-foreground hover:text-primary transition-colors"
            >
              Blog
            </a>
            <Button 
              onClick={() => {
                setIsContactDialogOpen(true);
                setIsMenuOpen(false);
              }}
              variant="ghost"
              className="block w-full text-left text-foreground hover:text-primary transition-colors p-0"
            >
              Contact Me
            </Button>
          </div>
        )}
      </nav>

      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Me</DialogTitle>
            <DialogDescription>
              To get in touch please mail me at firstdraftfilmworks@gmail.com
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
