"use client";

import React from "react";
import Image from "next/image";
import { URBAN_FIGHT_CONFIG, scrollToSection } from "@/lib/utils";
import { 
  MapPin, 
  Phone, 
  Clock, 
  ArrowUp,
  Send
} from "lucide-react";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCtaClick = () => {
    scrollToSection("triagem-experimental", 80);
  };

  return (
    <footer className="bg-[#030303] border-t border-zinc-900 pt-16 pb-24 sm:pb-16 text-zinc-300 text-sm overflow-hidden w-full max-w-[100vw]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High-Converting Final Closure Section (CRO) */}
        <div className="relative bg-gradient-to-b from-[#09090b] to-[#040405] border border-blood-600/40 rounded-xl p-8 sm:p-12 mb-14 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blood-950/80 border border-blood-600/50 text-blood-400 font-tactical text-xs font-bold uppercase tracking-wider mb-4 rounded-xl">
            <span>SEU PRIMEIRO TREINO É 100% GRATUITO</span>
          </div>

          <h2 className="font-combat text-4xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9] mb-4">
            ÚLTIMA CHANCE PARA <span className="text-blood-500">FORJAR SEU DESTINO</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-zinc-200 max-w-2xl mx-auto leading-relaxed mb-6">
            Não adie mais sua saúde, autodefesa e transformação física. Venha treinar em um tatame profissional e acolhedor sob a supervisão técnica do Mestre André.
          </p>

          {/* Clickable Address */}
          <div className="mb-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Cula+Mangabeira,+1497+-+Santo+Expedito,+Montes+Claros+-+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-blood-500 rounded-xl text-zinc-200 hover:text-white transition-all text-xs sm:text-sm font-tactical focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
            >
              <MapPin className="w-4 h-4 text-blood-500 shrink-0" />
              <span>Av. Cula Mangabeira, 1497 - Santo Expedito, Montes Claros - MG</span>
            </a>
          </div>

          {/* Giant CTA Button */}
          <button
            onClick={handleCtaClick}
            className="w-full sm:w-auto min-h-[56px] px-8 sm:px-12 py-5 bg-gradient-to-r from-blood-700 via-blood-600 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-combat uppercase tracking-wider text-2xl sm:text-3xl font-black rounded-xl shadow-spotlight-sharp transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-blood-400/80 inline-flex items-center justify-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] cursor-pointer"
          >
            <span>GARANTIR VAGA NA TURMA ATUAL</span>
            <Send className="w-6 h-6" />
          </button>
        </div>

        {/* Brand, Social & Hours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-zinc-900 items-center">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-blood-500 shadow-spotlight-sharp flex-shrink-0 bg-black">
                <Image
                  src="/logo-urban-fight.jpg"
                  alt="Logo Oficial Urban Fight"
                  width={40}
                  height={40}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-combat text-2xl font-black uppercase text-white tracking-wider leading-none">
                  URBAN <span className="text-blood-500">FIGHT</span>
                </span>
                <p className="font-tactical text-[9px] uppercase tracking-[0.25em] text-zinc-300 font-bold -mt-0.5">
                  MONTES CLAROS • MG
                </p>
              </div>
            </div>

            <p className="font-sans text-xs text-zinc-300 leading-relaxed max-w-md">
              Centro de artes marciais de elite sob a liderança técnica do Mestre André. Transformando vidas por meio da disciplina, saúde, queima calórica e defesa pessoal real.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={URBAN_FIGHT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-asphalt-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-300 hover:text-blood-400 hover:border-blood-600 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
                aria-label="Instagram da Urban Fight"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-asphalt-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-300 hover:text-emerald-400 hover:border-emerald-600 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
                aria-label="WhatsApp da Urban Fight"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Operating Hours & Direct Phone */}
          <div className="lg:col-span-6 space-y-2 text-xs font-sans text-zinc-300 md:text-right">
            <div className="flex items-center md:justify-end gap-2 text-zinc-200 font-tactical text-sm">
              <Clock className="w-4 h-4 text-blood-500 shrink-0" />
              <span>{URBAN_FIGHT_CONFIG.workingHours.weekdays} • {URBAN_FIGHT_CONFIG.workingHours.saturday}</span>
            </div>
            <div className="flex items-center md:justify-end gap-2 font-tactical text-sm">
              <Phone className="w-4 h-4 text-blood-500 shrink-0" />
              <span className="text-zinc-100 font-bold">{URBAN_FIGHT_CONFIG.phoneDisplay}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright 2026 & Gabriel Batista Strategic Tech Signature */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-tactical uppercase tracking-wider text-zinc-300">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-zinc-200 font-bold">
              © 2026 URBAN FIGHT MONTES CLAROS • DIRETOR GERAL: MESTRE ANDRÉ
            </p>
            <p className="text-zinc-300 text-[11px] font-sans">
              Urban Fight Montes Claros • Arquitetura Digital &amp; Parceria Estratégica por Gabriel Batista
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors text-zinc-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] rounded-xl py-2 px-3"
          >
            <span>VOLTAR AO TOPO</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
