import { Clock, Settings, Shield, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Atención 24/7",
    description: "Respuesta inmediata en todo momento del día.",
    color: "bg-blue-500",
  },
  {
    icon: Settings,
    title: "Tecnología avanzada",
    description: "Grúas modernas y equipos de última generación.",
    color: "bg-purple-500",
  },
  {
    icon: Shield,
    title: "Seguridad garantizada",
    description: "Cuidamos tu vehículo y tu tranquilidad.",
    color: "bg-green-500",
  },
  {
    icon: MapPin,
    title: "Cobertura completa",
    description: "Llegamos a toda la ciudad y valles cercanos.",
    color: "bg-orange-500",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6 text-3xl sm:text-4xl lg:text-5xl">
            ¿Por qué elegirnos?
          </h2>
          <div className="w-20 h-1 bg-[#E3B221] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Tu mejor opción en asistencia vehicular en Quito
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 text-center"
              >
                <div
                  className={`w-16 h-16 ${reason.color} rounded-xl flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-gray-900 mb-3 text-lg">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
