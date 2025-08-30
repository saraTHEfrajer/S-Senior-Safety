import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Mária Horváthová",
      age: "68 rokov",
      location: "Bratislava",
      initials: "MH",
      bgColor: "bg-primary",
      testimonial: "Odkedy mám nálepku na aute, všimla som si, že ostatní vodiči sú ku mne ohľaduplnejší. Cítim sa bezpečnejšie na cestách."
    },
    {
      id: 2,
      name: "Ján Novák",
      age: "72 rokov",
      location: "Košice",
      initials: "JN",
      bgColor: "bg-secondary",
      testimonial: "Výborná kvalita, jednoducho sa lepí a vyzerá profesionálne. Môžem odporučiť všetkým seniorom."
    },
    {
      id: 3,
      name: "Elena Veselá",
      age: "66 rokov",
      location: "Žilina",
      initials: "EV",
      bgColor: "bg-accent",
      testimonial: "Ako babička, ktorá často vozí vnúčatá, si cením túto nálepku. Dáva mi pocit istoty a rešpektu."
    }
  ];

  const StarRating = () => (
    <div className="flex text-accent text-sm">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="testimonials-title">Čo hovoria naši zákazníci</h2>
          <p className="text-muted-foreground" data-testid="testimonials-subtitle">Reálne skúsenosti od vodičov, ktorí už používajú S Senior Safety</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-card border border-border"
              data-testid={`testimonial-${testimonial.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${testimonial.bgColor} text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg`}>
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-foreground" data-testid={`testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`testimonial-info-${testimonial.id}`}>
                      {testimonial.age}, {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4" data-testid={`testimonial-text-${testimonial.id}`}>
                  "{testimonial.testimonial}"
                </p>
                <StarRating />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
