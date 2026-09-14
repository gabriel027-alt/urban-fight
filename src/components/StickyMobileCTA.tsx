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
      setIsVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-[#050505]/98 backdrop-blur-xl border-t border-zinc-800 shadow-2xl animate-in slide-in-from-bottom duration-300 w-full max-w-[100vw] overflow-hidden">
      <div className="flex items-center gap-2">
        <button
          onClick={onTriggerTriage}
          className="flex-1 py-3 px-4 bg-gradient-to-r from-blood-700 via-blood-600 to-blood-800 text-white font-combat uppercase tracking-wider text-lg font-black clip-chamfer-top border border-blood-500/70 flex items-center justify-center gap-2 shadow-spotlight-sharp active:scale-95 transition-all"
        >
          <Flame className="w-4 h-4 text-white" />
          <span>AGENDAR AULA GRÁTIS</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <a
          href={`https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}?text=${encodeURIComponent(
            "Olá! Gostaria de agendar minha aula experimental gratuita na Urban Fight Montes Claros."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg clip-chamfer-top border border-emerald-400/60 active:scale-95 transition-transform shrink-0"
          aria-label="Chamar no WhatsApp"
        >
          <Send className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
