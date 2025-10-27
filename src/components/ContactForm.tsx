import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SERVICE_OPTIONS = [
  "Shooting Schedule",
  "Script Breakdown",
  "Film Budgeting"
];

const PROJECT_TYPE_OPTIONS = [
  "Short Film",
  "Feature",
  "Series"
];

const BUDGET_OPTIONS = [
  "Under $3,000,000",
  "$3,000,001 - $6,250,000",
  "$6,250,001 - $9,000,000",
  "$9,000,001 - $12,500,000",
  "$12,500,001 - $15,000,000",
  "Over $15,000,000"
];

const WEBHOOK_URL = "https://n8n.n8n.in.net/webhook/50a824c3-a87c-493f-922e-80ecbbdfaed4";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    setValue,
  } = useForm();

  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    // Honeypot: If filled, block submission
    if (data.middleName) {
      setSubmitError("Spam detected.");
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      reset();
      setValue("service", "");
      setValue("projectType", "");
      setValue("projectBudgetRange", "");
    } catch (e: any) {
      setSubmitError(e.message || "Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Get in Touch</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ready to streamline your production? Let's discuss your project.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            autoComplete="off"
          >
            {/* Honeypot field */}
            <input
              type="text"
              {...register("middleName")}
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
            />

            <div>
              <Label htmlFor="name" className="text-foreground">Name *</Label>
              <Input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className="bg-card border-border text-foreground mt-2"
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">{String(errors.name.message)}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="bg-card border-border text-foreground mt-2"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{String(errors.email.message)}</p>
              )}
            </div>

            <div>
              <Label htmlFor="productionHouse" className="text-foreground">Production House</Label>
              <Input
                id="productionHouse"
                type="text"
                {...register("productionHouse")}
                className="bg-card border-border text-foreground mt-2"
              />
            </div>

            <div>
              <Label htmlFor="country" className="text-foreground">Country *</Label>
              <Input
                id="country"
                type="text"
                {...register("country", { required: "Country is required" })}
                className="bg-card border-border text-foreground mt-2"
              />
              {errors.country && (
                <p className="text-destructive text-sm mt-1">{String(errors.country.message)}</p>
              )}
            </div>

            <div>
              <Label htmlFor="service" className="text-foreground">Service of Interest *</Label>
              <Select
                onValueChange={(value) => setValue("service", value, { shouldValidate: true })}
              >
                <SelectTrigger className="bg-card border-border text-foreground mt-2">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" {...register("service", { required: "Select a service" })} />
              {errors.service && (
                <p className="text-destructive text-sm mt-1">{String(errors.service.message)}</p>
              )}
            </div>

            <div>
              <Label htmlFor="projectType" className="text-foreground">Project Type</Label>
              <Select onValueChange={(value) => setValue("projectType", value)}>
                <SelectTrigger className="bg-card border-border text-foreground mt-2">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {PROJECT_TYPE_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="scriptLength" className="text-foreground">Script Length</Label>
              <Input
                id="scriptLength"
                type="text"
                {...register("scriptLength")}
                className="bg-card border-border text-foreground mt-2"
              />
            </div>

            <div>
              <Label htmlFor="projectBudgetRange" className="text-foreground">Project Budget Range *</Label>
              <Select
                onValueChange={(value) => setValue("projectBudgetRange", value, { shouldValidate: true })}
              >
                <SelectTrigger className="bg-card border-border text-foreground mt-2">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {BUDGET_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" {...register("projectBudgetRange", { required: "Select a budget range" })} />
              {errors.projectBudgetRange && (
                <p className="text-destructive text-sm mt-1">
                  {String(errors.projectBudgetRange.message)}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground">Your Message</Label>
              <Textarea
                id="message"
                {...register("message")}
                className="bg-card border-border text-foreground resize-none mt-2"
                rows={4}
              />
            </div>

            {submitError && <p className="text-destructive">{submitError}</p>}
            {isSubmitSuccessful && (
              <p className="text-green-600">Thank you! We'll reply soon.</p>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
