import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Roger Margulies",
    review: "Outstanding work! The shooting schedule was meticulously organized and helped us save both time and money during production. Highly professional service."
  },
  {
    name: "Stogie Kenyatta",
    review: "The script breakdown was incredibly detailed and thorough. Every element was accounted for, which made our production process seamless. Will definitely work together again!"
  },
  {
    name: "Nkem Ifejika",
    review: "Excellent budgeting service! The preliminary budget was comprehensive and investor-ready. It gave us the confidence we needed to move forward with our project."
  },
  {
    name: "Kenneth Brown",
    review: "Professional, efficient, and reliable. The turnaround time was impressive without compromising quality. This is the line producer every filmmaker needs!"
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
                <p className="font-semibold text-foreground">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
