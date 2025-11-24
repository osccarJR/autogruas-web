import { Truck, Battery, Fuel, DoorOpen, ShieldAlert, Wrench, Phone, ArrowRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

const services = [
  {
    title: "Traslado de Vehículos",
    description:
      "Servicio de grúa profesional para traslado seguro de tu vehículo a cualquier punto de Quito. Equipos modernos y operadores capacitados garantizan el cuidado de tu auto.",
    icon: Truck,
    imageUrl: "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?w=800&q=80",
    cta: "Solicitar Grúa",
    color: "bg-[#E3B221]",
  },
  {
    title: "Carga de Batería",
    description:
      "¿Tu batería se descargó? Llegamos con equipo especializado para cargar tu batería en el lugar. Servicio rápido para que sigas tu camino sin demoras.",
    icon: Battery,
    imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    cta: "Solicitar Carga",
    color: "bg-green-600",
  },
  {
    title: "Entrega de Combustible",
    description:
      "¿Te quedaste sin gasolina? Llevamos combustible de emergencia hasta donde estés. Servicio disponible 24/7 en toda la ciudad de Quito y valles cercanos.",
    icon: Fuel,
    imageUrl: "https://images.unsplash.com/photo-1545262810-77515befe149?w=800&q=80",
    cta: "Pedir Combustible",
    color: "bg-orange-600",
  },
  {
    title: "Apertura de Puertas",
    description:
      "Servicio profesional de apertura de puertas sin daños a tu vehículo. Técnicos especializados con herramientas adecuadas para cualquier tipo de auto.",
    icon: DoorOpen,
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
    cta: "Solicitar Apertura",
    color: "bg-blue-600",
  },
  {
    title: "Desbloqueo de Alarmas",
    description:
      "Problemas con tu alarma o sistema de seguridad? Nuestros expertos solucionan bloqueos y fallas en alarmas de todo tipo de vehículos de forma rápida y segura.",
    icon: ShieldAlert,
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    cta: "Solicitar Ayuda",
    color: "bg-red-600",
  },
  {
    title: "Servicios con Wincha",
    description:
      "Equipo especializado con wincha para rescate de vehículos en situaciones difíciles: zanjas, lodo, accidentes. Operación segura y profesional con maquinaria pesada.",
    icon: Wrench,
    imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    cta: "Solicitar Wincha",
    color: "bg-purple-600",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6 text-3xl sm:text-4xl lg:text-5xl">¿Qué problema tienes con tu auto?</h2>
          <div className="w-20 h-1 bg-[#E3B221] mx-auto mb-6"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Encuentra la solución que necesitas. Estamos listos para ayudarte en cualquier emergencia vehicular.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 hover:border-[#E3B221]"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-4 left-4">
                    <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-gray-900 mb-3 text-2xl">{service.title}</h3>

                  <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>

                  <a
                    href="tel:+593996555617"
                    className="inline-flex items-center gap-2 bg-[#E3B221] hover:bg-[#d4a51f] text-white px-5 py-3 rounded-lg transition-all shadow-md hover:shadow-lg group/btn w-full justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{service.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA inferior */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 sm:p-12 text-center shadow-2xl">
          <h3 className="text-white mb-4 text-2xl sm:text-3xl">¿No encuentras el servicio que necesitas?</h3>
          <p className="text-white/90 mb-8 text-lg">Contáctanos y te ayudamos con cualquier situación vehicular</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+593996555617"
              className="flex items-center gap-3 bg-[#E3B221] hover:bg-[#d4a51f] text-white px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-lg w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>099 655 5617</span>
            </a>

            <a
              href="https://wa.me/593996555617"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-lg w-full sm:w-auto justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967 ..."/>
              </svg>
              <span>Escríbenos por WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Disponible 24/7</span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-white/30"></div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#E3B221] rounded-full"></div>
                <span>Respuesta en 20 minutos</span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-white/30"></div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>+500 clientes al mes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
