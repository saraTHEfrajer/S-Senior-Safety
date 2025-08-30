import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="produkt" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="hero-title">
            S Senior Safety
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="hero-subtitle">
            Pomáhame vytvárať ohľaduplnejšie a bezpečnejšie cestné prostredie pre všetkých.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            data-testid="hero-cta-button"
          >
            Čoskoro v predaji
          </Button>
        </div>


        {/* Europe-wide Banner */}
        <div className="bg-gradient-to-r from-secondary to-blue-800 rounded-xl p-8 text-center text-primary-foreground mb-16 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4" data-testid="europe-banner-title">Čoskoro v celej Európe</h2>
            <p className="text-lg opacity-90" data-testid="europe-banner-text">S Senior Safety nálepky budú dostupné vo všetkých európskych krajinách</p>
          </div>
        </div>
      </div>
    </section>
  );
}
