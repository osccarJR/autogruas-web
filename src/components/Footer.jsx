import { Mail, MessageCircle, Phone } from "lucide-react";

const logoImage = "/images/logo.png";

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={logoImage}
            alt="Auto Gruas EC - Soluciones 24/7 en Quito"
            className="h-20 sm:h-24"
          />
        </div>

        {/* Mensaje */}
        <div className="text-center mb-8">
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Tu aliado en emergencias vehiculares. Servicio profesional,
            rapido y confiable las 24 horas del dia.
          </p>

          {/* Contacto directo */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+593996555617"
              className="flex items-center gap-2 text-[#E3B221] hover:text-[#d4a51f] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>099 655 5617</span>
            </a>

            <span className="hidden sm:inline text-gray-600">|</span>

            <a
              href="https://wa.me/593996555617"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] hover:text-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>

            <span className="hidden sm:inline text-gray-600">|</span>

            <a
              href="mailto:info@autogruasec.com"
              className="flex items-center gap-2 text-gray-300 hover:text-[#E3B221] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@autogruasec.com</span>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-gray-300 hover:text-[#E3B221] transition-colors"
          >
            Inicio
          </button>

          <span className="text-gray-600">|</span>

          <button
            onClick={() => scrollToSection("nosotros")}
            className="text-gray-300 hover:text-[#E3B221] transition-colors"
          >
            Nosotros
          </button>

          <span className="text-gray-600">|</span>

          <button
            onClick={() => scrollToSection("servicios")}
            className="text-gray-300 hover:text-[#E3B221] transition-colors"
          >
            Servicios
          </button>

          <span className="text-gray-600">|</span>

          <button
            onClick={() => scrollToSection("por-que-elegirnos")}
            className="text-gray-300 hover:text-[#E3B221] transition-colors"
          >
            Por que elegirnos
          </button>

          <span className="text-gray-600">|</span>

          <button
            onClick={() => scrollToSection("cobertura")}
            className="text-gray-300 hover:text-[#E3B221] transition-colors"
          >
            Cobertura
          </button>

          <span className="text-gray-600">|</span>

          <button
            onClick={() => scrollToSection("faq")}
            className="text-gray-300 hover:text-[#E3B221] transition-colors"
          >
            FAQ
          </button>

          <span className="text-gray-600">|</span>

          <button
            onClick={() => scrollToSection("contacto")}
            className="text-gray-300 hover:text-[#E3B221] transition-colors"
          >
            Contacto
          </button>
        </div>

        {/* SEO keywords */}
        <div className="text-center mb-6 text-xs text-gray-500 max-w-4xl mx-auto">
          Gruas 24/7 en Quito - Auxilio vehicular Ecuador - Traslado de autos -
          Carga de bateria - Combustible emergencia - Norte, Sur y Valles de Quito
        </div>

        {/* Derechos */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            {`(c) ${currentYear} Auto Gruas EC - Todos los derechos reservados - Servicio 24/7 en Quito, Ecuador`}
          </p>
        </div>
      </div>
    </footer>
  );
}
