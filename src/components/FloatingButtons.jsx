import { Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button - Bottom Left */}
      <a
        href="https://wa.me/593996555617"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 group"
        aria-label="WhatsApp"
      >
        <div className="relative">
          {/* Pulsing effect */}
          <div className="absolute inset-0 w-16 h-16 sm:w-16 sm:h-16 bg-[#25D366] rounded-full animate-ping opacity-75"></div>

          {/* Main button */}
          <div className="relative w-20 h-20 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all">
            <svg viewBox="0 0 32 32" className="w-11 h-11 sm:w-9 sm:h-9" fill="white" aria-hidden="true">
              <path d="M16 0C7.159 0 0 7.163 0 16c0 2.82.736 5.588 2.132 8.02L0 32l8.225-2.118A15.862 15.862 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.325a13.255 13.255 0 0 1-6.77-1.865l-.486-.288-4.873 1.255 1.299-4.753-.318-.49A13.272 13.272 0 0 1 2.677 16 13.32 13.32 0 0 1 16 2.677c7.352 0 13.323 5.97 13.323 13.323 0 7.35-5.971 13.325-13.323 13.325zm7.246-9.935c-.395-.198-2.34-1.152-2.705-1.285-.363-.132-.628-.198-.894.198-.264.395-1.027 1.285-1.26 1.55-.232.264-.463.297-.858.099-.395-.198-1.666-.614-3.173-1.958-1.173-1.046-1.963-2.335-2.193-2.73-.232-.396-.025-.609.174-.807.18-.179.395-.463.595-.695.198-.232.264-.396.396-.66.132-.264.066-.495-.033-.693-.099-.198-.894-2.154-1.224-2.951-.322-.779-.651-.674-.894-.685-.231-.01-.495-.012-.76-.012-.264 0-.693.099-1.056.495-.363.395-1.386 1.354-1.386 3.303 0 1.95 1.419 3.834 1.617 4.099.198.264 2.798 4.272 6.786 5.993.951.41 1.693.656 2.27.84.953.304 1.82.261 2.506.158.764-.114 2.34-.957 2.672-1.882.331-.925.331-1.718.232-1.883-.099-.165-.364-.264-.76-.462z" />
            </svg>
          </div>
        </div>

        {/* Tooltip */}
        <div className="absolute left-24 sm:left-20 bottom-1/2 transform translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-sm">
          Escribenos por WhatsApp
        </div>
      </a>

      {/* Call Button */}
      <a
        href="tel:+593996555617"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 group"
        aria-label="Llamar ahora"
      >
        <div className="relative">
          {/* Pulsing effect */}
          <div className="absolute inset-0 w-16 h-16 sm:w-16 sm:h-16 bg-[#E3B221] rounded-full animate-ping opacity-75"></div>

          {/* Main button */}
          <div className="relative w-20 h-20 sm:w-16 sm:h-16 bg-[#E3B221] hover:bg-[#d4a51f] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all">
            <Phone className="w-10 h-10 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>

        {/* Tooltip */}
        <div className="absolute right-24 sm:right-20 bottom-1/2 transform translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-sm">
          <div className="flex flex-col">
            <span className="text-xs opacity-75">Llamar ahora</span>
            <span>099 655 5617</span>
          </div>
        </div>
      </a>
    </>
  );
}
