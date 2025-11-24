import { Phone, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-12 sm:pb-0 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1644503584825-91dfe48edca6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3clMjB0cnVjayUyMGNpdHl8ZW58MXx8fHwxNzYxNjIyMzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/85 to-gray-800/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E3B221] text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full mb-6 sm:mb-8 shadow-lg">
            <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></span>
            <span className="text-base sm:text-lg">Atención inmediata 24/7</span>
          </div>

          {/* Heading */}
          <h1 className="text-white mb-6 sm:mb-8 leading-tight">
            <span className="block text-3xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">
              🚨 ¿Problemas con tu auto?
            </span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl text-[#E3B221]">
              Llegamos en 20 minutos
            </span>
          </h1>

          {/* Subtexto */}
          <p className="text-white text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Servicio de grúas y auxilio vehicular en{" "}
            <span className="text-[#E3B221]">todo Quito</span>.<br className="hidden sm:block" />
            Profesionales, rápidos y disponibles siempre.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12">
            <a
              href="tel:+593996555617"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#E3B221] hover:bg-[#d4a51f] text-white px-8 sm:px-10 py-6 sm:py-5 rounded-2xl sm:rounded-full transition-all shadow-xl hover:shadow-2xl text-xl sm:text-xl"
              aria-label="Llamar a Auto Grúas EC"
            >
              <Phone className="w-7 h-7 sm:w-6 sm:h-6" />
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                <span className="text-sm sm:hidden opacity-90">Llamar ahora:</span>
                <span>099 655 5617</span>
              </div>
            </a>

            <a
              href="https://wa.me/593996555617"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 sm:px-10 py-6 sm:py-5 rounded-2xl sm:rounded-full transition-all shadow-xl hover:shadow-2xl text-xl sm:text-xl"
              aria-label="WhatsApp Auto Grúas EC"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-6 sm:h-6" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/95 text-base sm:text-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#E3B221]" />
              <span>+500 clientes al mes</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#E3B221]" />
              <span>Servicio garantizado</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#E3B221]" />
              <span>Toda la ciudad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
