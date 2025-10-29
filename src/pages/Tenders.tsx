import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { toast } from "sonner";

const tenderSchema = z.object({
  company: z.string().min(2, "Company name is required").max(100),
  contactPerson: z.string().min(2, "Contact person is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number is required").max(20),
  tenderRef: z.string().min(1, "Tender reference is required").max(50),
  dueDate: z.string().min(1, "Due date is required"),
  quantities: z.string().min(1, "Quantity information is required"),
  deliveryCity: z.string().min(2, "Delivery city is required").max(50),
  notes: z.string().max(1000).optional(),
});

type TenderFormData = z.infer<typeof tenderSchema>;

const capabilities = [
  "CIPC registered in South Africa",
  "SARS tax compliance certificate available",
  "Cross-border delivery capability (SA & Eswatini)",
  "Partnership options with Eswatini-registered entities",
  "Experience with tender documentation and proposal packs",
  "Quality assurance and product verification processes",
  "Flexible payment terms for government and corporate clients",
  "Professional invoicing and documentation",
];

export default function Tenders() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TenderFormData>({
    resolver: zodResolver(tenderSchema),
  });

  const onSubmit = async (data: TenderFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Tender form data:", data);
      toast.success("Tender pack request submitted successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-up">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Tenders & Compliance
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Tender-ready supplier for South Africa & Eswatini
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Our Tender Capabilities
              </h2>
              <p className="text-lg text-muted-foreground">
                Fully compliant and ready to support your procurement processes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <Card key={index} className="border-l-4 border-l-secondary">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{capability}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/30">
              <CardContent className="p-8 lg:p-12 space-y-4">
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Compliance Statement
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Arenaya Corporate Gifting complies with all South African statutory and tax requirements,
                  including CIPC registration and SARS good standing. For Eswatini-based tenders, we collaborate
                  with registered partners to meet local statutory and tax obligations, ensuring full compliance
                  with cross-border procurement regulations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We have extensive experience preparing comprehensive proposal packs, including product specifications,
                  compliance certificates, pricing schedules, and delivery timelines. Our team is ready to support
                  your procurement process with professional documentation and responsive communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Request Tender Pack Form */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                Request Tender Pack
              </h2>
              <p className="text-lg text-muted-foreground">
                Provide your tender details and we'll prepare a comprehensive proposal
              </p>
            </div>

            <Card>
              <CardContent className="p-8 lg:p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        {...register("company")}
                        placeholder="Your Organization"
                        aria-invalid={errors.company ? "true" : "false"}
                      />
                      {errors.company && (
                        <p className="text-sm text-destructive">{errors.company.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Contact Person *</Label>
                      <Input
                        id="contactPerson"
                        {...register("contactPerson")}
                        placeholder="John Doe"
                        aria-invalid={errors.contactPerson ? "true" : "false"}
                      />
                      {errors.contactPerson && (
                        <p className="text-sm text-destructive">{errors.contactPerson.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="procurement@company.com"
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="+27 00 000 0000"
                        aria-invalid={errors.phone ? "true" : "false"}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tenderRef">Tender Reference *</Label>
                      <Input
                        id="tenderRef"
                        {...register("tenderRef")}
                        placeholder="e.g., RFQ-2025-001"
                        aria-invalid={errors.tenderRef ? "true" : "false"}
                      />
                      {errors.tenderRef && (
                        <p className="text-sm text-destructive">{errors.tenderRef.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dueDate">Tender Due Date *</Label>
                      <Input
                        id="dueDate"
                        type="date"
                        {...register("dueDate")}
                        aria-invalid={errors.dueDate ? "true" : "false"}
                      />
                      {errors.dueDate && (
                        <p className="text-sm text-destructive">{errors.dueDate.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantities">Quantities & Items Required *</Label>
                    <Input
                      id="quantities"
                      {...register("quantities")}
                      placeholder="e.g., 500 branded notebooks, 200 gift hampers"
                      aria-invalid={errors.quantities ? "true" : "false"}
                    />
                    {errors.quantities && (
                      <p className="text-sm text-destructive">{errors.quantities.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deliveryCity">Delivery City/Location *</Label>
                    <Input
                      id="deliveryCity"
                      {...register("deliveryCity")}
                      placeholder="e.g., Johannesburg, Mbabane"
                      aria-invalid={errors.deliveryCity ? "true" : "false"}
                    />
                    {errors.deliveryCity && (
                      <p className="text-sm text-destructive">{errors.deliveryCity.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      {...register("notes")}
                      placeholder="Any specific requirements, specifications, or compliance documents needed..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Tender Pack"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
