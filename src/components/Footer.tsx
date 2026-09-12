"use client";

import React from "react";
import { URBAN_FIGHT_CONFIG } from "@/lib/utils";
import { 
  Flame, 
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

  return (
    <footer className="bg-combat-950 border-t border-zinc-800/80 pt-16 pb-24 sm:pb-16 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-600/30 border border-red-400/30">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-black uppercase text-white font-sans">
                  URBAN <span className="text-red-500">FIGHT</span>
                </span>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                  Montes Claros • MG
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Centro de artes marciais de elite sob a liderança técnica do Mestre André. Transformando vidas por meio da disciplina, saúde, queima calórica e defesa pessoal real.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={URBAN_FIGHT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-red-400 hover:border-red-500/50 transition-colors"
                aria-label="Instagram da Urban Fight"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="WhatsApp da Urban Fight"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#modalidades" className="hover:text-red-400 transition-colors">
                  Modalidades
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-red-400 transition-colors">
                  Método Mestre André
                </a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-red-400 transition-colors">
                  Estrutura do Tatame
                </a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-red-400 transition-colors">
                  Grade de Horários
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-red-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Modalities List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">
              Programas Oficiais
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-zinc-300">Boxe Tradicional (Nobre Arte)</span>
              </li>
              <li>
                <span className="text-zinc-300">Muay Thai & Kickboxing</span>
              </li>
              <li>
                <span className="text-zinc-300">Jiu-Jitsu Brasileiro (BJJ)</span>
              </li>
              <li>
                <span className="text-zinc-300">Jeet Kune Do & Defesa Pessoal</span>
              </li>
              <li>
                <span className="text-zinc-300">Taekwondo & Turmas Infantis (Kids)</span>
              </li>
            </ul>
          </div>

          {/* Physical Address & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">
              Localização & Contato
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  Av. Cula Mangabeira, 1497 - Santo Expedito, Montes Claros - MG
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block">{URBAN_FIGHT_CONFIG.workingHours.weekdays}</span>
                  <span className="block">{URBAN_FIGHT_CONFIG.workingHours.saturday}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-zinc-200 font-bold">{URBAN_FIGHT_CONFIG.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Urban Fight Montes Claros. Todos os direitos reservados. Liderança: Mestre André.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
