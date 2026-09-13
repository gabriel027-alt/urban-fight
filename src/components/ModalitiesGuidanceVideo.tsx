"use client";

import React from "react";
import { URBAN_FIGHT_CONFIG } from "@/lib/utils";
import { 
  Flame, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Video 
} from "lucide-react";

interface ModalitiesGuidanceVideoProps {
  onStartTriage: () => void;
}

export const ModalitiesGuidanceVideo: React.FC<ModalitiesGuidanceVideoProps> = ({
  onStartTriage,
}) => {
  const whatsappUrl = `https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}?text=${encodeURIComponent(
    "Olá Mestre André! Assisti ao seu vídeo de recomendações e gostaria de agendar minha aula experimental gratuita na Urban Fight."
  )}`;

  return (
    <section id="orientacao-mestre" className="py-20 sm:py-28 bg-[#030303] relative overflow-hidden w-full max-w-[100vw] border-t border-zinc-900">
      {/* Background Combat Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blood-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-asphalt-900 border border-blood-600/50 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest clip-tag">
            <Video className="w-3.5 h-3.5 text-blood-500" />
            <span>QUAL MODALIDADE ESCOLHER? • ORIENTAÇÃO DO MESTRE</span>
          </div>

          <h2 className="font-combat text-3xl sm:text-5xl md:text-6xl uppercase font-black text-white tracking-tight leading-[0.95]">
            NÃO SABE QUAL MODALIDADE ESCOLHER? <br className="hidden sm:inline" />
            <span className="text-blood-600">ASSISTA À ORIENTAÇÃO DO MESTRE</span>
          </h2>

          <p className="font-sans text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ouça as recomendações diretas do Mestre André para encontrar a luta perfeita para o seu objetivo e perfil.
          </p>
        </div>

        {/* Cinematic Video Player Container (16:9, Solid Black, object-contain, no border clipping) */}
        <div className="relative max-w-4xl mx-auto bg-black border-2 border-zinc-800 hover:border-blood-600/80 transition-colors duration-300 clip-chamfer-top shadow-2xl overflow-hidden group">
          {/* Top Video Header Tag */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-zinc-950/95 border-b border-zinc-800/80 text-xs font-tactical">
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-blood-500 animate-pulse" />
              <span className="font-bold uppercase tracking-wider">VÍDEO OFICIAL • GUIA DE ESCOLHA MARCIAL</span>
            </div>
            <span className="text-zinc-500 hidden sm:inline-block uppercase tracking-widest text-[11px]">
              URBAN FIGHT • MONTES CLAROS
            </span>
          </div>

          {/* HTML5 Native Video Player */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            <video
              src="/video-mestre-recomendacoes.mp4"
              poster="/mestre-andre.jpg"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain bg-black"
            >
              Seu navegador não suporta a reprodução deste vídeo.
            </video>
          </div>

          {/* Bottom Video Highlights Bar */}
          <div className="p-4 sm:p-5 bg-zinc-950 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-3 text-zinc-300 font-tactical">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blood-500" />
                <span>Boxe vs Muay Thai vs Jiu-Jitsu</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blood-500" />
                <span>Defesa Urbana (Krav Maga & JKD)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blood-500" />
                <span>Turmas Kids & Família</span>
              </div>
            </div>

            <span className="text-blood-400 font-tactical text-[11px] font-bold uppercase tracking-wider">
              Áudio e Imagem em HD
            </span>
          </div>
        </div>

        {/* High-Conversion CTA Container directly below video */}
        <div className="mt-10 max-w-2xl mx-auto text-center space-y-4">
          <button
            onClick={onStartTriage}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blood-700 via-blood-600 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-combat uppercase tracking-wider text-xl sm:text-2xl font-black shadow-spotlight-sharp transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] clip-chamfer-top border border-blood-400/50 group"
          >
            <Flame className="w-5 h-5 text-white" />
            <span>QUERO AGENDAR MINHA AULA EXPERIMENTAL</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-tactical text-zinc-400 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blood-500" />
              Aula 100% Gratuita e Sem Compromisso
            </span>
            <span>•</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blood-400 hover:text-blood-300 underline underline-offset-4 transition-colors font-bold"
            >
              Ou prefere falar direto no WhatsApp? Clique aqui
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};