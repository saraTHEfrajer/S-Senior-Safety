import Logo from "@/components/ui/logo";

export default function Footer() {
  const quickLinks = [
    { href: "#produkt", label: "Produkt" },
    { href: "#vyhody", label: "Výhody" },
    { href: "#galeria", label: "Galéria" },
    { href: "#euipo", label: "EUIPO" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-gray-400 mb-4" data-testid="footer-description">
              Pomáhame vytvárať ohľaduplnejšie a bezpečnejšie cestné prostredie pre všetkých.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61580104706978" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-facebook-link"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a 
                href="https://www.instagram.com/sseniorsafety/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-instagram-link"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4" data-testid="footer-quick-links-title">Rýchle odkazy</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4" data-testid="footer-contact-title">Kontakt</h3>
            <div className="flex items-center mb-2">
              <i className="fas fa-envelope text-gray-400 mr-3"></i>
              <div>
                <p className="text-white font-medium">Gmail</p>
                <a 
                  href="mailto:sseniosafety.info@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  data-testid="footer-email-link"
                >
                  sseniosafety.info@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm" data-testid="footer-copyright">
            S Senior Safety © 2025. Všetky práva vyhradené. EUIPO ochranná známka v procese.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0" data-testid="footer-made-with-love">
            Vyrobené s <span className="text-red-500">❤️</span> pre bezpečnosť seniorov
          </p>
        </div>
      </div>
    </footer>
  );
}
