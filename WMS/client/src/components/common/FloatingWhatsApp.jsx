import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../../config/siteConfig";

function FloatingWhatsApp() {
  const whatsappNumber = siteConfig.contact.whatsapp.replace(
    /\D/g,
    ""
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
     className="
    group
    fixed
    bottom-6
    right-6
    z-50
    flex
    h-16
    w-16
    items-center
    justify-center
    rounded-full
    bg-orange-500
    text-white
    shadow-xl
    transition-all
    duration-300
    hover:scale-110
    hover:bg-orange-600
    hover:shadow-orange-500/40
  "
    >
      <FaWhatsapp className="text-4xl" />

      {/* Ping Animation */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  );
}

export default FloatingWhatsApp;