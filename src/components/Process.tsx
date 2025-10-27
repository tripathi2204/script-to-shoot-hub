import { Button } from "@/components/ui/button";

const Process = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">My 3-Step Line Production Process</h2>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get in Touch
              </Button>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-primary">1. Order</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Choose your service, share the requested project details, and complete payment to get started.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-primary">2. Expert Workflow</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I review your script and generate high-quality, production-ready material to ensure your results meet industry standards.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-primary">3. Deliver & Revise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive your finalized files, with the option to request revisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
