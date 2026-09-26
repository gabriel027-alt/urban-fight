"use client";

import React, { useState, useEffect } from "react";
import { URBAN_FIGHT_CONFIG } from "@/lib/utils";

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling 150px for clean hero focus
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Olá, Mestre André! Gostaria de agendar minha aula experimental gratuita na Urban Fight Montes Claros."
  );
  const whatsappUrl = `https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}?text=${whatsappMessage}`;

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Contato direto via WhatsApp"
      className="hidden sm:block fixed sm:bottom-6 right-4 sm:right-6 z-40 sm:z-50 pb-[env(safe-area-inset-bottom)]"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Mestre André e recepção no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl shadow-emerald-950/60 border border-emerald-300/40 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
      >
        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10 drop-shadow-md"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.697c1.002.572 1.83.877 2.806.877 3.182 0 5.768-2.586 5.768-5.766 0-3.18-2.586-5.759-5.768-5.759zm3.374 8.167c-.14.394-.712.724-1.025.772-.314.048-.71.077-1.127-.058-.417-.135-.959-.344-1.638-.727-1.218-.687-2.008-1.921-2.069-2.002-.061-.081-.493-.655-.493-1.249 0-.594.312-.886.423-1.006.111-.12.242-.15.323-.15.081 0 .161.001.232.004.075.003.177-.029.277.211.101.242.344.839.374.9.03.061.05.132.01.213-.04.08-.06.13-.12.2-.061.071-.128.158-.183.212-.061.061-.124.127-.054.247.071.12.314.518.674.839.463.413.854.54 0.975.601.12.06.191.05.262-.03.071-.081.303-.353.384-.474.08-.12.161-.101.272-.06.111.04.707.333.828.394.12.06.201.09.231.141.03.05.03.292-.11.686z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.819.487 3.526 1.336 4.996L2.05 22l5.166-1.355C8.618 21.494 10.26 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.579 0-3.05-.444-4.303-1.214l-.309-.19-3.216.843.858-3.13-.207-.33C4.015 14.896 3.55 13.488 3.55 12c0-4.659 3.791-8.45 8.45-8.45 4.659 0 8.45 3.791 8.45 8.45 0 4.659-3.791 8.2-8.45 8.2z" />
        </svg>

        {/* Desktop Hover Label */}
        <span className="hidden lg:block absolute right-full mr-3.5 px-3 py-1.5 bg-[#09090b] text-zinc-100 text-xs font-tactical uppercase tracking-wider font-bold whitespace-nowrap rounded-xl border border-zinc-800 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Falar com Mestre André
        </span>
      </a>
    </aside>
  );
};
