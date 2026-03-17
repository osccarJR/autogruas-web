import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

import logoImage from "/images/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3">
          <div className="flex items-center">
            <img
              src={logoImage}
              alt="Auto Gruas EC - Grúas 24/7 en Quito"
              className="h-11 sm:h-14 lg:h-16"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("inicio")} className="text-gray-700 hover:text-[#E3B221] transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection("nosotros")} className="text-gray-700 hover:text-[#E3B221] transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection("servicios")} className="text-gray-700 hover:text-[#E3B221] transition-colors">
              Gruas
            </button>
            <button onClick={() => scrollToSection("por-que-elegirnos")} className="text-gray-700 hover:text-[#E3B221] transition-colors">
              Por qué elegirnos
            </button>
            <button onClick={() => scrollToSection("cobertura")} className="text-gray-700 hover:text-[#E3B221] transition-colors">
              Cobertura
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-gray-700 hover:text-[#E3B221] transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection("contacto")} className="text-gray-700 hover:text-[#E3B221] transition-colors">
              Contacto
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:+593996555617"
              className="flex items-center gap-2 bg-[#E3B221] hover:bg-[#d4a51f] text-white px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">099 655 5617</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#E3B221] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 mb-6">
              <a
                href="tel:+593996555617"
                className="flex items-center justify-center gap-3 bg-[#E3B221] hover:bg-[#d4a51f] text-white px-8 py-5 rounded-2xl transition-all shadow-lg text-xl font-semibold"
              >
                <Phone className="w-6 h-6" />
                <div className="flex flex-col items-start">
                  <span className="text-sm opacity-90">Llamar ahora</span>
                  <span className="text-xl">099 655 5617</span>
                </div>
              </a>

              <a
                href="https://wa.me/593996555617"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-5 rounded-2xl transition-all shadow-lg text-xl font-semibold"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-sm opacity-90">Escribir por</span>
                  <span className="text-xl">WhatsApp</span>
                </div>
              </a>
            </div>

            <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <button onClick={() => scrollToSection("inicio")} className="text-gray-700 hover:text-[#E3B221] py-2 text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection("nosotros")} className="text-gray-700 hover:text-[#E3B221] py-2 text-left">
                Nosotros
              </button>
              <button onClick={() => scrollToSection("servicios")} className="text-gray-700 hover:text-[#E3B221] py-2 text-left">
                Gruas
              </button>
              <button onClick={() => scrollToSection("por-que-elegirnos")} className="text-gray-700 hover:text-[#E3B221] py-2 text-left">
                Por qué elegirnos
              </button>
              <button onClick={() => scrollToSection("cobertura")} className="text-gray-700 hover:text-[#E3B221] py-2 text-left">
                Cobertura
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-gray-700 hover:text-[#E3B221] py-2 text-left">
                FAQ
              </button>
              <button onClick={() => scrollToSection("contacto")} className="text-gray-700 hover:text-[#E3B221] py-2 text-left">
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}



