import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: InsertContact) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Správa odoslaná",
        description: "Vaša správa bola úspešne odoslaná. Ozývame sa čoskoro!",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Chyba",
        description: error.message || "Nastala chyba pri odosielaní správy",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactMethods = [
    {
      id: 1,
      name: "Facebook",
      description: "Sledujte naše aktuality a novinky",
      icon: "fab fa-facebook-f",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      buttonText: "Navštíviť Facebook",
      url: "https://www.facebook.com/profile.php?id=61580104706978"
    },
    {
      id: 2,
      name: "Instagram", 
      description: "Pozrite si fotky a videá produktu",
      icon: "fab fa-instagram",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600",
      buttonText: "Navštíviť Instagram",
      url: "https://www.instagram.com/sseniorsafety/"
    },
    {
      id: 3,
      name: "Gmail",
      description: "Napíšte nám email s otázkami",
      icon: "fas fa-envelope",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      buttonText: "Poslať email",
      url: "mailto:sseniosafety.info@gmail.com"
    }
  ];

  return (
    <section id="kontakt" className="py-16 bg-secondary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="contact-title">Kontaktné informácie</h2>
          <p className="text-primary-foreground/80" data-testid="contact-subtitle">
            Sledujte nás na sociálnych sieťach a zostaňte v kontakte s S Senior Safety
          </p>
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center" data-testid="contact-form-title">
                Napíšte nám správu
              </h3>
              
              {isSubmitted ? (
                <div className="text-center p-8" data-testid="contact-success">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-white text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Správa odoslaná!</h4>
                  <p className="text-primary-foreground/80">
                    Ďakujeme za vašu správu. Ozývame sa čoskoro!
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 bg-primary hover:bg-primary/90"
                    data-testid="contact-new-message"
                  >
                    Napísať novú správu
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary-foreground">Meno *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Vaše meno" 
                                {...field} 
                                className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50"
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary-foreground">Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="vas@email.com" 
                                {...field} 
                                className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50"
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground">Telefón (voliteľné)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="+421 xxx xxx xxx" 
                              {...field} 
                              className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50"
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground">Správa *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Napíšte nám vašu správu..." 
                              rows={5}
                              {...field} 
                              className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50 resize-none"
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={contactMutation.isPending}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? "Odosielanie..." : "Odoslať správu"}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Social Media Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method) => (
            <Card 
              key={method.id} 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors"
              data-testid={`contact-card-${method.name.toLowerCase()}`}
            >
              <CardContent className="p-8 text-center">
                <div className={`${method.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${method.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2" data-testid={`contact-name-${method.id}`}>{method.name}</h3>
                <p className="text-primary-foreground/80 mb-4" data-testid={`contact-description-${method.id}`}>
                  {method.description}
                </p>
                <Button
                  asChild
                  className={`${method.bgColor} text-white ${method.hoverColor} transition-colors`}
                  data-testid={`contact-button-${method.name.toLowerCase()}`}
                >
                  <a 
                    href={method.url} 
                    target={method.name !== "Gmail" ? "_blank" : undefined}
                    rel={method.name !== "Gmail" ? "noopener noreferrer" : undefined}
                  >
                    {method.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
