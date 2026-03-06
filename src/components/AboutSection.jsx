import { Target, Eye, Award, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6 text-3xl sm:text-4xl lg:text-5xl">Sobre Auto Gruas EC</h2>
          <div className="w-20 h-1 bg-[#E3B221] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            En <span className="text-[#E3B221]">Auto Gruas EC</span> somos un equipo especializado únicamente en gruas 24/7 en Quito.
            Nos enfocamos en traslado y rescate vehicular con Atención rapida, segura y profesional.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "500+", label: "Servicios mensuales", icon: Users },
            { number: "24/7", label: "Disponibilidad", icon: Award },
            { number: "20min", label: "Tiempo de respuesta", icon: Target },
            { number: "5/5", label: "calificación", icon: Eye },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <Icon className="w-8 h-8 text-[#E3B221] mb-3" />
                  <div className="text-3xl text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
            <div className="w-14 h-14 bg-[#E3B221] rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-gray-900 mb-4 text-2xl">Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              Brindar Servicio de gruas con respuesta inmediata para que cada cliente reciba una solución segura y confiable.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
            <div className="w-14 h-14 bg-[#E3B221] rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-gray-900 mb-4 text-2xl">Visión</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser la referencia de gruas en Quito por puntualidad, Atención profesional y calidad constante en cada traslado y rescate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}




