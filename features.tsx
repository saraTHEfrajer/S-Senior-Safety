import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Chránený dizajn",
      description: "EUIPO ochranná známka v procese zaručuje jedinečnosť a kvalitu našej bezpečnostnej nálepky.",
      icon: "🛡️",
      color: "bg-primary/10"
    },
    {
      id: 2,
      title: "Jasne viditeľné",
      description: "Kontrastné farby a optimálna veľkosť zabezpečujú výbornú viditeľnosť za každého počasia.",
      icon: "👁️",
      color: "bg-secondary/10"
    },
    {
      id: 3,
      title: "Vodotesné",
      description: "Vysoká kvalita materiálov odolá všetkým poveternostným podmienkam.",
      icon: "💧",
      color: "bg-accent/10"
    },
    {
      id: 4,
      title: "Jednoduché odstránenie",
      description: "Špeciálne lepidlo umožňuje jednoduché odstránenie bez poškodenia laku.",
      icon: "✋",
      color: "bg-primary/10"
    },
    {
      id: 5,
      title: "Rešpekt na cestách",
      description: "Signalizuje ohľaduplnosť a trpezlivosť ostatným vodičom na cestách.",
      icon: "❤️",
      color: "bg-secondary/10"
    },
    {
      id: 6,
      title: "Pre seniorov 65+",
      description: "Špeciálne navrhnuté pre skúsených vodičov a starých rodičov.",
      icon: "👴",
      color: "bg-accent/10"
    }
  ];

  return (
    <section id="vyhody" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="features-title">Výhody našich nálepiek</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="features-subtitle">
            Objavte všetky výhody S Senior Safety nálepiek pre bezpečnejšiu jazdu seniorov
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              className="bg-card hover:shadow-md transition-shadow border border-border"
              data-testid={`feature-card-${feature.id}`}
            >
              <CardContent className="p-8">
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`feature-title-${feature.id}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`feature-description-${feature.id}`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
