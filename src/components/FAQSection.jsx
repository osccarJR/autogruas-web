import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Me quedé varado en Quito, qué hago?",
    answer:
      "Llámanos de inmediato al 099 655 5617, comparte tu ubicación exacta y enviamos la grúa más cercana.",
  },
  {
    question: "¿Cuánto cuesta el servicio de grúa en Quito?",
    answer:
      "El valor depende de la distancia, tipo de vehículo y condiciones del rescate. Llámanos al 099 655 5617 para cotización inmediata.",
  },
  {
    question: "¿Cuánto tiempo tardan en llegar?",
    answer:
      "Nuestro tiempo promedio de llegada es de 20 minutos dentro de Quito, sujeto al tráfico y a la zona exacta.",
  },
  {
    question: "¿Cubren toda la ciudad de Quito?",
    answer:
      "Sí. Cubrimos norte, sur, centro, Cumbayá, Tumbaco, Los Chillos y sectores cercanos.",
  },
  {
    question: "¿Qué tipo de servicios manejan?",
    answer:
      "Solo trabajamos grúas: traslado de vehículos, rescates en zonas difíciles y traslados programados.",
  },
  {
    question: "¿Están disponibles en feriados y madrugada?",
    answer:
      "Sí. Atendemos 24 horas al día, 7 días a la semana, todo el año.",
  },
  {
    question: "¿Puedo solicitar por WhatsApp?",
    answer:
      "Claro. Escríbenos por WhatsApp o llámanos y coordinamos la grúa más cercana a tu ubicación.",
  },
  {
    question: "¿El servicio incluye seguro?",
    answer:
      "Sí, el traslado se realiza con protocolos de seguridad para proteger tu vehículo durante toda la maniobra.",
  },
  {
    question: "¿Puedo acompañar mi vehículo en la grúa?",
    answer:
      "En la mayoría de casos, sí. Te confirmamos al momento de coordinar según tipo de unidad y ruta.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6 text-3xl sm:text-4xl lg:text-5xl">Preguntas frecuentes</h2>
          <div className="w-20 h-1 bg-[#E3B221] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Resolvemos tus dudas sobre nuestro servicio de grúas en Quito.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-gray-900 text-lg pr-8">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#E3B221] transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-2xl border-2 border-[#E3B221]">
          <h3 className="text-gray-900 text-2xl mb-3">¿Tienes otra pregunta?</h3>
          <p className="text-gray-600 mb-6">Contáctanos directo y te ayudamos de inmediato.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+593996555617"
              className="flex items-center gap-2 bg-[#E3B221] hover:bg-[#d4a51f] text-white px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
              aria-label="Llamar a Auto Gruas EC"
            >
              <span>099 655 5617</span>
            </a>
            <a
              href="https://wa.me/593996555617"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
              aria-label="WhatsApp Auto Gruas EC"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}






