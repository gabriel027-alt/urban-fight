"use client";

import React from "react";
import Image from "next/image";
import { URBAN_FIGHT_CONFIG } from "@/lib/utils";
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

  return (
    <footer className="bg-[#030304] border-t border-zinc-900 pt-16 pb-24 sm:pb-16 text-zinc-400 text-sm overflow-hidden w-full max-w-[100vw]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-blood-500 shadow-spotlight-sharp flex-shrink-0 bg-black">
                <Image
                  src="/logo-urban-fight.jpg"
                  alt="Logo Oficial Urban Fight"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-combat text-2xl font-black uppercase text-white tracking-wider leading-none">
                  URBAN <span className="text-blood-500">FIGHT</span>
                </span>
                <p className="font-tactical text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-bold -mt-0.5">
                  MONTES CLAROS • MG
                </p>
              </div>
            </div>

            <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-sm">
              Centro de artes marciais de elite sob a liderança técnica do Mestre André. Transformando vidas por meio da disciplina, saúde, queima calórica e defesa pessoal real.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={URBAN_FIGHT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-asphalt-900 border border-zinc-800 rounded-none flex items-center justify-center text-zinc-400 hover:text-blood-400 hover:border-blood-600 transition-colors"
                aria-label="Instagram da Urban Fight"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-asphalt-900 border border-zinc-800 rounded-none flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-600 transition-colors"
                aria-label="WhatsApp da Urban Fight"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-tactical text-xs font-bold uppercase text-white tracking-wider">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2 text-xs font-tactical uppercase tracking-wide">
              <li>
                <a href="#modalidades" className="hover:text-blood-400 transition-colors">
                  MODALIDADES
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-blood-400 transition-colors">
                  MESTRE ANDRÉ
                </a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-blood-400 transition-colors">
                  ESTRUTURA DA ARENA
                </a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-blood-400 transition-colors">
                  GRADE DE HORÁRIOS
                </a>
              </li>
              <li>
                <a href="#equipamentos" className="hover:text-blood-400 transition-colors">
                  EQUIPAMENTOS DE LUTA
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-blood-400 transition-colors">
                  PERGUNTAS FREQUENTES
                </a>
              </li>
            </ul>
          </div>

          {/* Modalities List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-tactical text-xs font-bold uppercase text-white tracking-wider">
              PROGRAMAS OFICIAIS
            </h4>
            <ul className="space-y-2 text-xs font-tactical uppercase tracking-wide text-zinc-400">
              <li>Boxe Tradicional (Nobre Arte)</li>
              <li>Muay Thai & Kickboxing</li>
              <li>Jiu-Jitsu Brasileiro (BJJ)</li>
              <li>Krav Maga & Defesa Pessoal</li>
              <li>Jeet Kune Do & Defesa Urbana</li>
              <li>Taekwondo & Turmas Kids</li>
            </ul>
          </div>

          {/* Physical Address & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-tactical text-xs font-bold uppercase text-white tracking-wider">
              SEDE SANTO EXPEDITO
            </h4>
            <div className="space-y-2 text-xs font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blood-500 shrink-0 mt-0.5" />
                <span>
                  Av. Cula Mangabeira, 1497 - Santo Expedito, Montes Claros - MG
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blood-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block">{URBAN_FIGHT_CONFIG.workingHours.weekdays}</span>
                  <span className="block">{URBAN_FIGHT_CONFIG.workingHours.saturday}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 font-tactical">
                <Phone className="w-4 h-4 text-blood-500 shrink-0" />
                <span className="text-zinc-200 font-bold">{URBAN_FIGHT_CONFIG.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tactical uppercase tracking-wider text-zinc-500">
          <p>
            © {new Date().getFullYear()} URBAN FIGHT MONTES CLAROS • DIRETOR GERAL: MESTRE ANDRÉ
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>VOLTAR AO TOPO</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
