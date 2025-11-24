import { Truck, Battery, Fuel, DoorOpen, ShieldAlert, Wrench, Phone, ArrowRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

const services = [
  {
    title: "Traslado de Vehiculos",
    description:
      "Servicio de grua profesional para traslado seguro de tu vehiculo a cualquier punto de Quito. Equipos modernos y operadores capacitados garantizan el cuidado de tu auto.",
    icon: Truck,
    imageUrl: "/images/Traslado%20de%20Veh%C3%ADculos.jpg",
    cta: "Solicitar Grua",
    color: "bg-[#E3B221]",
  },
  {
    title: "Carga de Bateria",
    description:
      "Tu bateria se descargo? Llegamos con equipo especializado para cargar tu bateria en el lugar. Servicio rapido para que sigas tu camino sin demoras.",
    icon: Battery,
    imageUrl: "/images/Carga%20de%20Bater%C3%ADa.png",
    cta: "Solicitar Carga",
    color: "bg-green-600",
  },
  {
    title: "Entrega de Combustible",
    description:
      "Te quedaste sin gasolina? Llevamos combustible de emergencia hasta donde estas. Servicio disponible 24/7 en toda la ciudad de Quito y valles cercanos.",
    icon: Fuel,
    imageUrl: "/images/Entrega%20de%20Combustible.png",
    cta: "Pedir Combustible",
    color: "bg-orange-600",
  },
  {
    title: "Apertura de Puertas",
    description:
      "Servicio profesional de apertura de puertas sin danos a tu vehiculo. Tecnicos especializados con herramientas adecuadas para cualquier tipo de auto.",
    icon: DoorOpen,
    imageUrl: "/images/Apertura%20de%20Puertas.png",
    cta: "Solicitar Apertura",
    color: "bg-blue-600",
  },
  {
    title: "Desbloqueo de Alarmas",
    description:
      "Problemas con tu alarma o sistema de seguridad? Nuestros expertos solucionan bloqueos y fallas en alarmas de todo tipo de vehiculos de forma rapida y segura.",
    icon: ShieldAlert,
    imageUrl: "/images/Desbloqueo%20de%20Alarmas.png",
    cta: "Solicitar Ayuda",
    color: "bg-red-600",
  },
  {
    title: "Servicios con Wincha",
    description:
      "Equipo especializado con wincha para rescate de vehiculos en situaciones dificiles: zanjas, lodo, accidentes. Operacion segura y profesional con maquinaria pesada.",
    icon: Wrench,
    imageUrl: "/images/Servicios%20con%20Wincha.png",
    cta: "Solicitar Wincha",
    color: "bg-purple-600",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6 text-3xl sm:text-4xl lg:text-5xl">Que problema tienes con tu auto?</h2>
          <div className="w-20 h-1 bg-[#E3B221] mx-auto mb-6"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Encuentra la solucion que necesitas. Estamos listos para ayudarte en cualquier emergencia vehicular.
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
          <h3 className="text-white mb-4 text-2xl sm:text-3xl">No encuentras el servicio que necesitas?</h3>
          <p className="text-white/90 mb-8 text-lg">Contactanos y te ayudamos con cualquier situacion vehicular</p>

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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967 ..." />
              </svg>
              <span>Escribenos por WhatsApp</span>
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
