import galleryImage1 from "@assets/image (1)_1756557505584.png";
import galleryImage2 from "@assets/image_1756557505583.png";
import galleryImage3 from "@assets/image (2)_1756557505584.png";
import galleryImage4 from "@assets/Generated Image August 29, 2025 - 10_04PM_1756559010742.jpeg";
import galleryImage5 from "@assets/Generated Image August 29, 2025 - 10_11PM 2_1756559010741.jpeg";
import galleryImage6 from "@assets/Generated Image August 29, 2025 - 10_11PM 3_1756559010742.jpeg";
import galleryImage7 from "@assets/Generated Image August 29, 2025 - 10_11PM 4_1756559010742.jpeg";
import galleryImage8 from "@assets/Generated Image August 29, 2025 - 10_11PM_1756559010742.jpeg";
import galleryImage9 from "@assets/IMG_2440_1756559017329.jpeg";

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: galleryImage1,
      alt: "Označte svoje auto pre väčší rešpekt na cestách",
      title: "Starí rodičia na palube",
      description: "Pôvodný plagát - Signalizuje starostlivosť a ohľaduplnosť"
    },
    {
      id: 2,
      src: galleryImage2,
      alt: "Nočná bezpečnosť",
      title: "Nočná bezpečnosť",
      description: "Pôvodný plagát - Spot the S, Show Respect"
    },
    {
      id: 3,
      src: galleryImage3,
      alt: "Starí rodičia na palube",
      title: "Moderný dizajn",
      description: "Nový generátor obrazok S Senior Safety"
    },
    {
      id: 4,
      src: galleryImage4,
      alt: "S Senior Safety nálepka v akcii",
      title: "Reálne použitie",
      description: "Skutočná fotka S Senior Safety nálepky"
    },
    {
      id: 5,
      src: galleryImage5,
      alt: "S Senior Safety aplikácia na vozidle",
      title: "Moderný dizajn",
      description: "Nový generátor obrazok S Senior Safety"
    },
    {
      id: 6,
      src: galleryImage6,
      alt: "S Senior Safety pre skúsených vodičov",
      title: "Skúsení vodiči",
      description: "Pre vodičov s desaťročiami skúseností"
    },
    {
      id: 7,
      src: galleryImage7,
      alt: "Bezpečná jazda s S Senior Safety",
      title: "Bezpečná jazda",
      description: "Podporuje pokojnú a bezpečnú jazdu"
    },
    {
      id: 8,
      src: galleryImage8,
      alt: "Rešpekt na cestách",
      title: "Rešpekt na cestách",
      description: "Viac ohľaduplnosti voči starším vodičom"
    },
    {
      id: 9,
      src: galleryImage9,
      alt: "Komunitný duch S Senior Safety",
      title: "Komunitný duch",
      description: "Spoločná starostlivosť o seniorov"
    }
  ];

  return (
    <section id="galeria" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="gallery-title">Galéria produktov</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="gallery-subtitle">
            Pozrite si rôzne varianty a aplikácie našich bezpečnostných nálepiek
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              data-testid={`gallery-image-${image.id}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
