import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

// IMPORTA TU LOGO REAL DESDE /src/assets/
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

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoImage}
              alt="Auto GrA�as EC - Soluciones 24/7 en Quito"
              className="h-11 sm:h-14 lg:h-16"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("inicio")} className="text-gray-700 hover:text-[#E3B221] transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection("nosotros")} className="text-gray-700 hover:text-[#E3B221] transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection("servicios")} className="text-gray-700 hover:text-[#E3B221] transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection("contacto")} className="text-gray-700 hover:text-[#E3B221] transition-colors">
              Contacto
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:+593996555617"
              className="flex items-center gap-2 bg-[#E3B221] hover:bg-[#d4a51f] text-white px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">099 655 5617</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#E3B221] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">

            {/* Emergency Buttons */}
            <div className="flex flex-col space-y-3 mb-6">

              {/* Call Button */}
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

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/593996555617"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-5 rounded-2xl transition-all shadow-lg text-xl font-semibold"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967 ..."/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-sm opacity-90">Escribir por</span>
                  <span className="text-xl">WhatsApp</span>
                </div>
              </a>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <button onClick={() => scrollToSection("inicio")} className="text-gray-700 hover:text-[#E3B221] py-2 text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection("nosotros")} className="text-gray-700 hover:text-[#E3B221] py-2 text-left">
                Nosotros
              </button>
              <button onClick={() => scrollToSection("servicios")} className="text-gray-700 hover:text-[#E3B221] py-2 text-left">
                Servicios
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
