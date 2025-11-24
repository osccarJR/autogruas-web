import { Phone, MessageSquare, Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    const whatsappMessage = `Hola, soy ${formData.name}. ${formData.message}. Mi teléfono es ${formData.phone}`;
    const whatsappUrl = `https://wa.me/593996555617?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    toast.success("Abriendo WhatsApp...");
    
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4 text-3xl sm:text-4xl lg:text-5xl">
            Comunícate con nosotros ahora
          </h2>
          <div className="w-20 h-1 bg-[#E3B221] mx-auto mb-6"></div>
          <p className="text-gray-600 text-xl">
            Estamos disponibles 24/7 para atenderte
          </p>
        </div>

        {/* WhatsApp & Phone */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <a
            href="https://wa.me/593996555617"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-10 rounded-2xl transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-12 h-12" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967 ..."/>
                </svg>
              </div>

              <div>
                <h3 className="text-2xl mb-2">Escríbenos por WhatsApp</h3>
                <p className="text-white/90 mb-4 text-lg">Respuesta inmediata</p>
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                  <span>Iniciar chat</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </a>

          <a
            href="tel:+593996555617"
            className="group relative bg-[#E3B221] hover:bg-[#d4a51f] text-white p-10 rounded-2xl transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Phone className="w-12 h-12 text-[#E3B221]" />
              </div>

              <div>
                <h3 className="text-2xl mb-2">Llámanos ahora</h3>
                <p className="text-white/90 mb-4 text-lg">Hablemos directamente</p>
                <div className="text-2xl">099 655 5617</div>
              </div>
            </div>
          </a>
        </div>

        {/* Formulario */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gray-50 p-8 sm:p-10 rounded-2xl border-2 border-gray-200">
            <h3 className="text-gray-900 text-2xl mb-2 text-center">O déjanos tus datos</h3>
            <p className="text-gray-600 text-center mb-8">Te contactaremos de inmediato</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E3B221]"
                    placeholder="Ej: Juan Pérez"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Tu teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E3B221]"
                    placeholder="Ej: 0999 999 999"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  ¿Qué servicio necesitas?
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E3B221] resize-none"
                  placeholder="Ej: Necesito trasladar mi auto desde..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E3B221] hover:bg-[#d4a51f] text-white py-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-lg"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Enviar mensaje</span>
              </button>
            </form>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="w-12 h-12 bg-[#E3B221] rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-gray-900 mb-2">Disponibilidad</h4>
            <p className="text-gray-600">24 horas / 7 días</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-gray-900 mb-2">Cobertura</h4>
            <p className="text-gray-600">Todo Quito y Valles</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-gray-900 mb-2">Email</h4>
            <a href="mailto:info@autogruasec.com" className="text-[#E3B221] hover:text-[#d4a51f] text-sm">
              info@autogruasec.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
