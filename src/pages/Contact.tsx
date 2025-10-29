import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, Clock, FileText } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().min(2, "Company name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number is required").max(20),
  city: z.string().min(2, "City is required").max(50),
  country: z.enum(["SA", "ES"], { required_error: "Please select a country" }),
  serviceInterest: z.string().min(1, "Please select a service"),
  quantity: z.string().min(1, "Quantity estimate is required"),
  budget: z.string().min(1, "Budget range is required"),
  deadline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form data:", data);

      setIsSuccess(true);
      toast.success("Quote request submitted successfully! We'll be in touch soon.");
      reset();

      // Show success for 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast.error("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = "https://wa.me/27000000000?text=Hi%20Arenaya,%20I'd%20like%20to%20discuss%20corporate%20gifting.";

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-up">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Let's create something memorable together. Fill out the form below or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Request a Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSuccess && (
                    <div className="mb-6 p-4 bg-secondary/10 border border-secondary rounded-lg">
                      <p className="text-foreground font-medium">Thank you for your inquiry!</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        We've received your request and will respond within 24 hours.
                      </p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline mt-2 inline-block"
                      >
                        Or chat with us on WhatsApp →
                      </a>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          {...register("name")}
                          placeholder="John Doe"
                          aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          {...register("company")}
                          placeholder="Your Company"
                          aria-invalid={errors.company ? "true" : "false"}
                        />
                        {errors.company && (
                          <p className="text-sm text-destructive">{errors.company.message}</p>
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
                          placeholder="john@company.com"
                          aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone / WhatsApp *</Label>
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
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          {...register("city")}
                          placeholder="Johannesburg"
                          aria-invalid={errors.city ? "true" : "false"}
                        />
                        {errors.city && (
                          <p className="text-sm text-destructive">{errors.city.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <select
                          id="country"
                          {...register("country")}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          aria-invalid={errors.country ? "true" : "false"}
                        >
                          <option value="">Select country</option>
                          <option value="SA">South Africa</option>
                          <option value="ES">Eswatini</option>
                        </select>
                        {errors.country && (
                          <p className="text-sm text-destructive">{errors.country.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceInterest">Service Interest *</Label>
                      <select
                        id="serviceInterest"
                        {...register("serviceInterest")}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-invalid={errors.serviceInterest ? "true" : "false"}
                      >
                        <option value="">Select a service</option>
                        <option value="real-estate">Real Estate Gifting</option>
                        <option value="dealership">Dealership Gifting</option>
                        <option value="corporate">Corporate Essentials</option>
                        <option value="apparel">Branded Apparel</option>
                        <option value="office-launch">Office Launch Kits</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                      {errors.serviceInterest && (
                        <p className="text-sm text-destructive">{errors.serviceInterest.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity Estimate *</Label>
                        <select
                          id="quantity"
                          {...register("quantity")}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          aria-invalid={errors.quantity ? "true" : "false"}
                        >
                          <option value="">Select range</option>
                          <option value="10-25">10-25 units</option>
                          <option value="26-50">26-50 units</option>
                          <option value="51-100">51-100 units</option>
                          <option value="101-250">101-250 units</option>
                          <option value="250+">250+ units</option>
                        </select>
                        {errors.quantity && (
                          <p className="text-sm text-destructive">{errors.quantity.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range *</Label>
                        <select
                          id="budget"
                          {...register("budget")}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          aria-invalid={errors.budget ? "true" : "false"}
                        >
                          <option value="">Select budget</option>
                          <option value="under-10k">Under R 10,000</option>
                          <option value="10k-25k">R 10,000 - R 25,000</option>
                          <option value="25k-50k">R 25,000 - R 50,000</option>
                          <option value="50k-100k">R 50,000 - R 100,000</option>
                          <option value="100k+">R 100,000+</option>
                        </select>
                        {errors.budget && (
                          <p className="text-sm text-destructive">{errors.budget.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deadline">Deadline (Optional)</Label>
                      <Input
                        id="deadline"
                        type="date"
                        {...register("deadline")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell us about your gifting needs, branding requirements, and any specific requests..."
                        rows={5}
                        aria-invalid={errors.message ? "true" : "false"}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:hello@arenaya.co.za"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        hello@arenaya.co.za
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Phone / WhatsApp</p>
                      <a
                        href="tel:+27000000000"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        +27 00 000 0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Mon - Fri: 9am - 5pm SAST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Download Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href="/assets/Arenaya_Catalogue.pdf" download>
                      <FileText className="w-4 h-4 mr-2" />
                      Product Catalogue (PDF)
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <a href="/assets/Arenaya_Company_Profile.pdf" download>
                      <FileText className="w-4 h-4 mr-2" />
                      Company Profile (PDF)
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
