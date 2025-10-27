import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Expert Line Production Services for Film & TV
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            From budgeting to scheduling to breaking down scripts, I deliver the expertise your production needs. 
            Whether you need a line producer for TV series, feature films, commercials, or web content, 
            my proven track record speaks for itself.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
