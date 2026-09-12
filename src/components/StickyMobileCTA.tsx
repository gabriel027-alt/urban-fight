"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Flame, Send } from "lucide-react";
import { URBAN_FIGHT_CONFIG } from "@/lib/utils";

interface StickyMobileCTAProps {
  onTriggerTriage: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({
  onTriggerTriage,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down a bit from hero top
      setIsVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-combat-950/95 backdrop-blur-lg border-t border-zinc-800 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-2">
        <button
          onClick={onTriggerTriage}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-combat-glow active:scale-95 transition-all"
        >
          <Flame className="w-4 h-4" />
          <span>Agendar Aula Grátis</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <a
          href={`https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}?text=${encodeURIComponent(
            "Olá! Gostaria de agendar minha aula experimental gratuita na Urban Fight Montes Claros."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-950/40 active:scale-95 transition-transform shrink-0"
          aria-label="Chamar no WhatsApp"
        >
          <Send className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
