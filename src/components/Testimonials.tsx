import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Roger Margulies",
    title: "Riveting River Ent. Inc.",
    review: "....he has created numerous budgets for Riveting River Entertainment and we couldn't be more satisfied! We are most pleased with his attention to detail...."
  },
  {
    name: "Stogie Kenyatta",
    title: "Actor, Writer, & Comedian",
    review: "....a fantastic collaborative experience, he was efficient, creative & worked fast. I am very happy with the work he did on the budget as well as the Script deck...."
  },
  {
    name: "Nkem Ifejika",
    title: "Producer & Presenter",
    review: "....very communicative from the very beginning in wanting to understand what I wanted. Followed up with pertinent questions and took on my ideas/concerns...."
  },
  {
    name: "Kenneth Brown",
    title: "South Beach Ent. Group",
    review: "I have been working with Shubham on many of my projects. He always delivers above and beyond my expectations! Highly recommend!"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">Excellence Delivered, Every Time</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">What clients say about our services</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-[0_10px_40px_-10px_hsl(207_90%_54%_/_0.3)] transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">"{testimonial.review}"</p>
                <div>
                  <p className="font-semibold text-foreground">— {testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
