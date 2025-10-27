import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Film, Target } from "lucide-react";
import aboutHeroImg from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold text-foreground">About Me</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Shubham, an engineer by qualification who discovered his true calling in the world of filmmaking. 
                  My journey began as an Assistant Director with leading production houses, where I gained invaluable, 
                  hands-on experience in the art and craft of storytelling.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Five years ago, I transitioned into providing Line Production services with a mission to offer filmmakers 
                  top-tier support — streamlining processes, optimizing budgets, and ensuring faster turnarounds. I believe 
                  these services are true game changers for the industry. Yet, at the heart of it all, my passion remains 
                  unchanged: to contribute to films that create a lasting impact.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden shadow-[0_10px_40px_-10px_hsl(207_90%_54%_/_0.3)]">
                  <img 
                    src={aboutHeroImg} 
                    alt="Shubham - Line Producer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">Experience & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="bg-card border-border text-center hover:shadow-[0_10px_40px_-10px_hsl(207_90%_54%_/_0.3)] transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">
                    <Award className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">5+ Years</h3>
                  <p className="text-muted-foreground">In Business</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center hover:shadow-[0_10px_40px_-10px_hsl(207_90%_54%_/_0.3)] transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">
                    <Star className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">100+</h3>
                  <p className="text-muted-foreground">Verified Reviews</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center hover:shadow-[0_10px_40px_-10px_hsl(207_90%_54%_/_0.3)] transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">
                    <Film className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">500+</h3>
                  <p className="text-muted-foreground">Projects Delivered</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center hover:shadow-[0_10px_40px_-10px_hsl(207_90%_54%_/_0.3)] transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">
                    <Target className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Worldwide</h3>
                  <p className="text-muted-foreground">Client Base</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
