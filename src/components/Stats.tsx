import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Film } from "lucide-react";

const stats = [
  {
    icon: Award,
    heading: "5+ years in Business",
    text: "Proven track record in film pre-production"
  },
  {
    icon: Star,
    heading: "100+ Verified Reviews",
    text: "Satisfied clients worldwide"
  },
  {
    icon: Film,
    heading: "500+ Projects Delivered",
    text: "Successfully completed productions"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Why Work with Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border text-center hover:shadow-[0_10px_40px_-10px_hsl(207_90%_54%_/_0.3)] transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex justify-center">
                  <stat.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{stat.heading}</h3>
                <p className="text-muted-foreground">{stat.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
