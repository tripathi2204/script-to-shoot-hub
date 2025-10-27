import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is included in a shooting schedule?",
    answer: "A shooting schedule includes a colored stripboard schedule, one-liners for each scene, daybreaks for day divisions, an editable source file in industry-standard format, PDF export, and a Day-Out-of-Day (DOOD) report for cast scheduling."
  },
  {
    question: "How detailed is the script breakdown?",
    answer: "The script breakdown is extremely detailed, covering every production element scene-by-scene including cast, extras, props, wardrobe, costumes, makeup, hair, sets, set dressing, SFX, VFX, vehicles, animals, and more. It includes breakdown sheets, one-liners, categorized elements, and eliminates duplicate scenes."
  },
  {
    question: "What does a film budget include?",
    answer: "A film budget includes a comprehensive topsheet with overall budget details, Above-the-Line (ATL) and Below-the-Line (BTL) costs, departmental categories, union fringe rates, an editable source file in industry format, and PDF export for easy sharing with investors and stakeholders."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project turnaround time varies depending on the scope and complexity of your production. After reviewing your script and requirements, I'll provide a realistic timeline. I pride myself on fast, efficient delivery without compromising quality."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes! After receiving your finalized files, you have the option to request revisions to ensure the deliverables meet your exact needs and expectations."
  },
  {
    question: "What formats do you provide the files in?",
    answer: "All deliverables are provided in industry-standard editable formats (such as Movie Magic Scheduling, Movie Magic Budgeting, or compatible alternatives) along with PDF exports for easy sharing and distribution."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
