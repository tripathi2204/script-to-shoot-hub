import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-primary block mb-4">
              LineProducer.Online
            </Link>
            <p className="text-muted-foreground text-sm">
              Expert line production services for film and television productions worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("shooting-schedule")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Shooting Schedule
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("script-breakdown")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Script Breakdown
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("film-budgeting")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Film Budgeting
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Me
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("testimonials")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <a 
                  href="mailto:firstdraftfilmworks@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Latest Articles</h3>
            <a 
              href="https://lineproducer.online/blog/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Visit Our Blog
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} LineProducer.Online. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
