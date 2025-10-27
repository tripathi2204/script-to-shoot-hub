import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import shootingScheduleImg from "@/assets/shooting-schedule.jpg";
import scriptBreakdownImg from "@/assets/script-breakdown.jpg";
import filmBudgetingImg from "@/assets/film-budgeting.jpg";

const services = [
  {
    id: "shooting-schedule",
    title: "Shooting Schedule",
    tagline: "Colored shooting stripboard",
    image: shootingScheduleImg,
    description: "Using AI-assisted sorting and industry-standard software, I create accurate, cost-effective, and color-coded stripboard schedules optimized for shooting order and time. Leveraging my years of expertise, I tighten timelines to ensure a smooth production flow that maximizes budget efficiency.",
    highlights: [
      "Colored Stripboard schedule",
      "One-Liners summarizing each scene",
      "Daybreaks included for day divisions",
      "Editable Source File provided in Industry-Format",
      "PDF Export for easy sharing",
      "Day-Out-of-Day (DOOD) Report for cast"
    ]
  },
  {
    id: "script-breakdown",
    title: "Script Breakdown",
    tagline: "Scene-by-scene script breakdown",
    image: scriptBreakdownImg,
    description: "Using AI-powered workflows and expert oversight, I deliver detailed, scene-by-scene script breakdowns that identify every key production element — including cast and extras, props, wardrobe and costumes, makeup and hair, sets and set dressing, special effects (SFX) and visual effects (VFX), vehicles, animals, and more. I also provide precise one-liners to ensure nothing is overlooked, giving your team everything they need to stay on budget, on schedule, and fully prepared for production.",
    highlights: [
      "Scene-by-Scene Breakdown Sheets",
      "One-Liners summarizing each scene",
      "Categories Categorized element wise",
      "Duplicate Scenes & redundancies eliminated",
      "Editable Source File provided in Industry-Format",
      "PDF Export for easy sharing"
    ]
  },
  {
    id: "film-budgeting",
    title: "Film Budgeting",
    tagline: "Preliminary Budgets with topsheet",
    image: filmBudgetingImg,
    description: "Using AI-powered workflows and industry-standard software, I create detailed, investor-ready budgets that cover every aspect of your production — from Above-the-Line (ATL) costs like script development and key talent, to Below-the-Line (BTL) production costs like crew, locations, and equipment, and post-production expenses such as editing and VFX. Incorporating the latest union and non-union rates, each budget provides a clear, comprehensive financial plan that minimizes surprises and ensures funding covers your entire project.",
    highlights: [
      "Topsheet will overall budget details",
      "ATL & BTL costs listed out",
      "Categories Categorized as per departments",
      "Fringe applied as per union rules",
      "Editable Source File provided in Industry-Format",
      "PDF Export for easy sharing"
    ]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} id={service.id} className="bg-card border-border overflow-hidden hover:shadow-[0_10px_40px_-10px_hsl(207_90%_54%_/_0.3)] transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-primary font-semibold">{service.tagline}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
