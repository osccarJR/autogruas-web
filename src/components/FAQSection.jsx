import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto cuesta el servicio de grúa en Quito?",
    answer:
      "El costo varía según la distancia y tipo de servicio. Llámanos al 099 655 5617 para una cotización inmediata y sin compromiso. Ofrecemos precios justos y transparentes.",
  },
  {
    question: "¿Cuánto tiempo tardan en llegar?",
    answer:
      "Nuestro tiempo de respuesta promedio es de 20 minutos en cualquier punto de Quito. Trabajamos 24/7 para atenderte en el momento que nos necesites.",
  },
  {
    question: "¿Cubren toda la ciudad de Quito?",
    answer:
      "Sí, cubrimos todo Quito: Norte, Sur, Centro Histórico, Cumbayá, Tumbaco, Los Chillos y valles cercanos. Tenemos unidades estratégicamente ubicadas para respuesta rápida.",
  },
  {
    question: "¿Qué servicios ofrecen además de traslado?",
    answer:
      "Ofrecemos traslado de vehículos, carga de batería, entrega de combustible, apertura de puertas, desbloqueo de alarmas y servicios especiales con equipos pesados.",
  },
  {
    question: "¿Están disponibles en días feriados y madrugada?",
    answer:
      "¡Absolutamente! Estamos disponibles 24 horas al día, 7 días a la semana, 365 días al año. Incluyendo feriados, fines de semana y madrugadas.",
  },
  {
    question: "¿Cómo puedo solicitar el servicio?",
    answer:
      "Puedes llamarnos al 099 655 5617, escribirnos por WhatsApp o llenar el formulario de contacto. Respondemos inmediatamente y enviamos la grúa más cercana a tu ubicación.",
  },
  {
    question: "¿El servicio incluye seguro?",
    answer:
      "Sí, todos nuestros servicios cuentan con seguro de responsabilidad civil. Tu vehículo está protegido durante todo el proceso de traslado.",
  },
  {
    question: "¿Puedo acompañar mi vehículo en la grúa?",
    answer:
      "Sí, en la mayoría de casos puedes acompañar tu vehículo. Nuestras grúas cuentan con espacio para pasajeros siguiendo todas las medidas de seguridad.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6 text-3xl sm:text-4xl lg:text-5xl">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-1 bg-[#E3B221] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Resolvemos tus dudas sobre nuestro servicio de grúas en Quito
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
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

        {/* CTA after FAQ */}
        <div className="mt-12 text-center bg-white p-8 rounded-2xl border-2 border-[#E3B221]">
          <h3 className="text-gray-900 text-2xl mb-3">
            ¿Tienes otra pregunta?
          </h3>
          <p className="text-gray-600 mb-6">
            Contáctanos directamente y te ayudaremos de inmediato
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+593996555617"
              className="flex items-center gap-2 bg-[#E3B221] hover:bg-[#d4a51f] text-white px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
              aria-label="Llamar a Auto Grúas EC"
            >
              📞 <span>099 655 5617</span>
            </a>
            <a
              href="https://wa.me/593996555617"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
              aria-label="WhatsApp Auto Grúas EC"
            >
              💬 <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
