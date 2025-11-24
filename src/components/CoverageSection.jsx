import { MapPin, Navigation, CheckCircle } from "lucide-react";

export default function CoverageSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clear Title */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6 text-3xl sm:text-4xl lg:text-5xl">
            Cobertura en Quito y Valles
          </h2>
          <div className="w-20 h-1 bg-[#E3B221] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Llegamos rápidamente a donde nos necesites
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map/Image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1649960234302-a9402e57840d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWl0byUyMGVjdWFkb3IlMjBjaXR5fGVufDF8fHx8MTc2MTYyMjQwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Quito Ecuador"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-6 h-6 text-[#E3B221]" />
                  <span className="text-xl">Quito, Ecuador</span>
                </div>
                <p className="text-white/90">Servicio en toda la ciudad y valles</p>
              </div>
            </div>
            
            {/* Time Badge */}
            <div className="absolute top-4 right-4 bg-[#E3B221] text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl">20min</div>
                <div className="text-xs">Tiempo promedio</div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E3B221] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2 text-xl">Amplia cobertura</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Llegamos rápidamente a todo Quito, Cumbayá, Tumbaco, Los Chillos y zonas aledañas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2 text-xl">Respuesta rápida</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nuestro tiempo de respuesta promedio es de menos de 20 minutos en cualquier punto de la ciudad.
                  </p>
                </div>
              </div>
            </div>

            {/* Coverage List */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 className="text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#E3B221]" />
                Zonas de cobertura en Quito:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Norte de Quito",
                  "Sur de Quito",
                  "Centro Histórico",
                  "Cumbayá",
                  "Tumbaco",
                  "Los Chillos",
                  "Valle de los Chillos",
                  "Calderón",
                  "Carcelén",
                  "El Inca",
                  "La Carolina",
                  "Quitumbe",
                  "Conocoto",
                  "San Rafael",
                  "Guangüiltagua",
                  "Valles cercanos",
                ].map((zone, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#E3B221]" />
                    <span className="text-gray-700 text-sm">{zone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
