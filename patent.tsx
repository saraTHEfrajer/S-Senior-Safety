import { Shield, Globe, Check } from "lucide-react";
import patentImage from "@assets/image (1)_1756557505584.png";

export default function Patent() {
  const benefits = [
    "Garantovaná kvalita a jedinečnosť",
    "Právna ochrana a dôveryhodnosť", 
    "EUIPO štandard ochrany známky"
  ];

  return (
    <section id="euipo" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="patent-title">EUIPO ochranná známka</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="patent-subtitle">
            Náš produkt je registrovaný ako ochranná známka EUIPO v procese schvaľovania.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4" data-testid="euipo-info">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Shield className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">EUIPO ochranná známka</h3>
                <p className="text-muted-foreground">V procese registrácie</p>
              </div>
            </div>

            <div className="flex items-start space-x-4" data-testid="europe-market-info">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Globe className="text-accent-foreground w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Európsky trh</h3>
                <p className="text-muted-foreground">Dostupné vo všetkých EÚ krajinách</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground" data-testid="benefits-title">Čo to znamená pre vás?</h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-muted-foreground"
                    data-testid={`benefit-${index + 1}`}
                  >
                    <Check className="text-primary mr-3 w-5 h-5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img 
                src={patentImage} 
                alt="S Senior Safety nálepka aplikácia" 
                className="w-full h-80 object-cover rounded-lg"
                data-testid="patent-hero-image"
              />
              <div className="absolute top-8 right-8 bg-white rounded-full p-3 shadow-lg" data-testid="eu-countries-badge">
                <div className="text-primary font-bold text-center">
                  <div className="text-2xl">27</div>
                  <div className="text-sm">EÚ krajín</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
