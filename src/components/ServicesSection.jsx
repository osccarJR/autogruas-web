import { Truck, Wrench, Route, Phone, ArrowRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

const services = [
  {
    title: "Grua para autos livianos",
    description:
      "Traslado seguro de autos particulares dentro de Quito. Operadores capacitados y maniobras cuidadosas para proteger tu vehículo.",
    icon: Truck,
    imageUrl: "/images/Gr%C3%BAa%20para%20autos%20livianos.png",
    cta: "Solicitar grua",
    color: "bg-[#E3B221]",
  },
  {
    title: "Grua para rescate vehicular",
    description:
      "Rescate con grua en zanjas, lodo, pendientes o zonas de difícil acceso. Servicio profesional con equipos de arrastre y traccion.",
    icon: Wrench,
    imageUrl: "/images/Gr%C3%BAa%20para%20rescate%20vehicular.png",
    cta: "Solicitar grua",
    color: "bg-gray-700",
  },
  {
    title: "Traslados locales y programados",
    description:
      "Servicio de grua para talleres, domicilios, patios de retención y movimientos programados. Puntualidad y seguimiento por teléfono.",
    icon: Route,
    imageUrl: "/images/Traslados%20locales%20y%20programados.png",
    cta: "Cotizar traslado",
    color: "bg-blue-600",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6 text-3xl sm:text-4xl lg:text-5xl">Servicios de gruas</h2>
          <div className="w-20 h-1 bg-[#E3B221] mx-auto mb-6"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Nos especializamos solo en gruas para resolver emergencias, vehículos varados y traslados de forma rapida y segura.
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

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 sm:p-12 text-center shadow-2xl">
          <h3 className="text-white mb-4 text-2xl sm:text-3xl">Necesitas una grua ahora?</h3>
          <p className="text-white/90 mb-8 text-lg">Llámanos o escríbenos y enviamos la unidad más cercana.</p>

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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>escríbenos por WhatsApp</span>
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



