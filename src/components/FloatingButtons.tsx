import { Phone, CircleChevronUp, } from "lucide-react"
import { motion } from "framer-motion";
import { Profile } from "@/config/globalconfig"
import { useState, useEffect } from "react";


export function FloatingButtons() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [showScroll, setShowScroll] = useState(false);

  // Lắng nghe sự kiện scroll để bật/tắt nút scrollToTop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* CSS toàn cục cho ripple */}
      <style>{`
        @keyframes ping-slow {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          80% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        .ripple {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>

      <div className="fixed bottom-6 left-6 flex flex-col space-y-3 z-50">
        {/* Nút Zalo */}
        <a
          href={Profile.zalo}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full shadow-lg"
        >
          <span
            className="ripple"
            style={{ backgroundColor: "rgba(96, 165, 250, 0.7)" }}
          />
          <img
            src="/zaloicon.webp"
            alt="Zalo"
            className="w-7 h-7 relative z-10"
          />
        </a>

        {/* Nút Facebook */}
        <a
          href={Profile.fanpage}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 flex items-center justify-center bg-[#1877F2] rounded-full shadow-lg"
        >
          <span
            className="ripple"
            style={{ backgroundColor: "rgba(59, 130, 246, 0.7)" }}
          />
          <img
            src="/fb-icon.png"
            alt="Facebook"
            className="w-10 h-10 relative z-10"
          />
        </a>

        {/* Nút gọi điện */}
        <a
          href={`tel:${Profile.phone}`}
          className="relative w-12 h-12 flex items-center justify-center bg-green-600 rounded-full shadow-lg"
        >
          <span
            className="ripple"
            style={{ backgroundColor: "rgba(34, 197, 94, 0.7)" }}
          />
          <Phone className="w-7 h-7 text-white relative z-10" />
        </a>

        {/* Nút scrollToTop bên phải */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-9 w-8 h-8 shadow-lg z-50 flex items-center justify-center bg-gray-800 text-white rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <CircleChevronUp className="h-7 w-7" />
        </motion.button>)}

      </div>
    </>
  )
}
