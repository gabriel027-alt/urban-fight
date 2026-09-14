"use client";

import React from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  MapPin, 
  Flame, 
  ShieldCheck, 
  Activity, 
  Trophy,
  Crosshair
} from "lucide-react";

interface HeroProps {
  onStartTriage: () => void;
  onExploreModalities: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartTriage,
  onExploreModalities,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-24 border-b border-zinc-900 bg-[#030303] w-full max-w-[100vw]">
      {/* Background Video in Absolute Position: Crystal Clear, Bright, and Centered */}
      <video
        src="/publichero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none brightness-100 contrast-105 z-0"
      >
        <source src="/publichero-bg.mp4" type="video/mp4" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Luminous Overlay: Crisp, bright, and vivid on mobile & desktop alike */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/70 pointer-events-none z-0" />

      {/* 1. Dramatic Ring Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] sm:h-[650px] bg-ring-spotlight pointer-events-none opacity-50 sm:opacity-80 animate-spotlight-pulse z-[1]" />
      <div className="hidden sm:block absolute -top-10 left-0 w-96 h-96 spotlight-beam-left opacity-30 pointer-events-none z-[1]" />
      <div className="hidden sm:block absolute -top-10 right-0 w-96 h-96 spotlight-beam-right opacity-30 pointer-events-none z-[1]" />
      
      {/* Background Combat Texture - subtle on desktop */}
      <div className="hidden md:block absolute inset-0 bg-carbon opacity-15 pointer-events-none z-[1]" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Bar on Mobile/Desktop */}
        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 bg-asphalt-900/90 border border-blood-700/60 shadow-spotlight-sharp rounded sm:clip-tag">
            <span className="w-2 h-2 rounded-full bg-blood-500 animate-ping" />
            <span className="font-tactical text-[11px] sm:text-xs uppercase tracking-widest text-blood-400 font-bold">
              QG OFICIAL • MESTRE ANDRÉ
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 sm:py-1.5 bg-asphalt-900/80 border border-zinc-800 rounded sm:clip-tag text-[11px] sm:text-xs font-tactical text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-blood-500 shrink-0" />
            <span className="tracking-wide text-zinc-300 truncate">SANTO EXPEDITO • MONTES CLAROS</span>
          </div>
        </div>

        {/* 2-Column Hero Grid: Left Content, Right Official Logo with Red LED Glow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center mb-8 sm:mb-14">
          {/* Left Column: Massive Headline, CTAs & Benefits */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            <div>
              <span className="font-tactical text-[11px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-blood-500 font-bold block mb-1.5 sm:mb-2">
                [ CENTRO DE ALTO RENDIMENTO MARCIAL ]
              </span>
              <h1 className="font-combat text-4xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-black text-white tracking-tight leading-[0.9] sm:leading-[0.88] drop-shadow-2xl">
                FORJE SEU CORPO. <br />
                <span className="text-blood-600">
                  BLINDE SUA MENTE.
                </span>
              </h1>
            </div>

            <p className="font-sans text-sm sm:text-base md:text-lg text-zinc-200 max-w-2xl leading-relaxed font-normal text-balance drop-shadow-md">
              O maior templo de artes marciais de Montes Claros. Focado em queima calórica devastadora, autodefesa real sem regras fúteis e disciplina militar sob a tutela direta do <strong className="text-white font-bold">Mestre André</strong>.
            </p>

            {/* Tactical Action Buttons (Dual CTAs with high contrast and smooth clean borders) */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onStartTriage}
                className="relative group overflow-hidden px-5 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blood-700 via-blood-600 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-combat uppercase tracking-wider text-base sm:text-xl lg:text-2xl font-black shadow-spotlight-sharp transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] rounded-sm sm:clip-chamfer-top border border-blood-500/50 flex items-center justify-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  <span>AGENDAR AULA EXPERIMENTAL</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
              </button>

              <button
                onClick={onExploreModalities}
                className="px-5 sm:px-7 py-3.5 sm:py-4 bg-black/80 hover:bg-asphalt-850 text-zinc-200 hover:text-white font-combat uppercase tracking-wider text-base sm:text-xl lg:text-2xl font-bold border border-zinc-700 hover:border-blood-600 transition-all rounded-sm sm:clip-chamfer-top flex items-center justify-center gap-2 backdrop-blur-sm shadow-md"
              >
                <Crosshair className="w-4 sm:w-5 h-4 sm:h-5 text-blood-500" />
                <span>VER MODALIDADES</span>
              </button>
            </div>

            {/* Micro-guarantees (Benefits with clean line spacing) */}
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs font-tactical uppercase tracking-wider text-zinc-300 pt-2 sm:pt-3">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blood-500 rounded-full" />
                1ª AULA 100% CORTESIA
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blood-500 rounded-full" />
                TURMAS DO ZERO AO AVANÇADO
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
                TATAME LIVRE DE EGO
              </span>
            </div>
          </div>

          {/* Right Column: Pristine Circular Official Logo with Red LED Glow */}
          <div className="lg:col-span-5 flex items-center justify-center py-4 sm:py-0">
            <div className="relative w-full max-w-[220px] sm:max-w-sm lg:max-w-md aspect-square flex items-center justify-center my-2 sm:my-0">
              {/* Red LED Glow Halos in multiple layers */}
              <div className="absolute inset-0 bg-blood-600/30 rounded-full blur-[50px] sm:blur-[90px] animate-pulse pointer-events-none" />
              <div className="absolute w-40 h-40 sm:w-72 sm:h-72 bg-blood-700/35 rounded-full blur-[35px] sm:blur-[60px] pointer-events-none" />
              
              {/* Outer Combat Ring */}
              <div className="relative z-10 w-44 h-44 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1.5 sm:p-2 bg-gradient-to-b from-blood-600 via-blood-900 to-black shadow-spotlight-red border-2 border-blood-500/70 flex items-center justify-center group">
                {/* Inner Bezel */}
                <div className="w-full h-full rounded-full overflow-hidden bg-black p-1.5 sm:p-2 border border-zinc-700 relative shadow-inner">
                  {/* Official Logo Image */}
                  <Image
                    src="/logo-urban-fight.jpg"
                    alt="Logo Oficial Urban Fight Montes Claros"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Subtle red spotlight sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blood-950/40 via-transparent to-blood-500/15 pointer-events-none rounded-full" />
                </div>
              </div>

              {/* Floating Tactical Badges - Cleanly displayed on tablet/desktop */}
              <div className="hidden sm:flex absolute -top-2 left-4 z-20 bg-asphalt-900/95 border border-blood-600 px-3 py-1 clip-tag shadow-spotlight-sharp">
                <span className="font-tactical text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1">
                  <Flame className="w-3 h-3 text-blood-500" />
                  QG MONTES CLAROS
                </span>
              </div>

              <div className="hidden sm:flex absolute -bottom-2 right-4 z-20 bg-[#09090b] border border-blood-600/80 px-3 py-1 clip-tag shadow-spotlight-sharp">
                <span className="font-tactical text-[10px] font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-blood-500" />
                  ALTA PERFORMANCE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Combat Authority Cards with Balanced Cuts */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="p-3.5 sm:p-5 bg-asphalt-900/95 border-l-2 border-blood-600 border-t border-r border-b border-zinc-800/80 shadow-combat-plate rounded-sm sm:clip-chamfer-top hover:border-blood-500 transition-all group">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="font-tactical text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-500">PROGRAMAS</span>
              <Flame className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-blood-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-combat text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-none">
              +6 MODALIDADES
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-1.5 sm:mt-2 font-sans line-clamp-2 sm:line-clamp-none">
              Boxe, Muay Thai, Jiu-Jitsu, Krav Maga, Jeet Kune Do e Kids.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-3.5 sm:p-5 bg-asphalt-900/95 border-l-2 border-blood-600 border-t border-r border-b border-zinc-800/80 shadow-combat-plate rounded-sm sm:clip-chamfer-top hover:border-blood-500 transition-all group">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="font-tactical text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-500">INTENSIDADE</span>
              <Activity className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-blood-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-combat text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-none">
              1000 KCAL/H
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-1.5 sm:mt-2 font-sans line-clamp-2 sm:line-clamp-none">
              Queima calórica, tônus muscular e preparo cardiovascular.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-3.5 sm:p-5 bg-asphalt-900/95 border-l-2 border-blood-600 border-t border-r border-b border-zinc-800/80 shadow-combat-plate rounded-sm sm:clip-chamfer-top hover:border-blood-500 transition-all group">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="font-tactical text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-500">SEGURANÇA</span>
              <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-blood-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-combat text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-none">
              ZERO EGO
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-1.5 sm:mt-2 font-sans line-clamp-2 sm:line-clamp-none">
              Ambiente acolhedor. Iniciantes acompanhados em cada golpe.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-3.5 sm:p-5 bg-asphalt-900/95 border-l-2 border-blood-600 border-t border-r border-b border-zinc-800/80 shadow-combat-plate rounded-sm sm:clip-chamfer-top hover:border-blood-500 transition-all group">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="font-tactical text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-500">LINHAGEM</span>
              <Trophy className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-blood-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-combat text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-none">
              MESTRE ANDRÉ
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-1.5 sm:mt-2 font-sans line-clamp-2 sm:line-clamp-none">
              Supervisão de quem tem mais de 20 anos de tatame em Montes Claros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

