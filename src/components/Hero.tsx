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
  Crosshair,
  Sparkles
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
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-zinc-900 bg-[#050505]">
      {/* 1. Dramatic Ring Spotlights (Crossed angular beams) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-ring-spotlight pointer-events-none opacity-90 animate-spotlight-pulse" />
      <div className="absolute -top-10 left-0 w-96 h-96 spotlight-beam-left opacity-40 pointer-events-none" />
      <div className="absolute -top-10 right-0 w-96 h-96 spotlight-beam-right opacity-40 pointer-events-none" />
      
      {/* Background Combat Texture */}
      <div className="absolute inset-0 bg-carbon opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood-600 to-transparent" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar on Mobile/Desktop */}
        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-asphalt-900 border border-blood-700/60 shadow-spotlight-sharp clip-tag">
            <span className="w-2 h-2 rounded-full bg-blood-500 animate-ping" />
            <span className="font-tactical text-xs uppercase tracking-widest text-blood-400 font-bold">
              QG OFICIAL • MESTRE ANDRÉ
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-asphalt-900/80 border border-zinc-800 clip-tag text-xs font-tactical text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-blood-500" />
            <span className="tracking-wide">SANTO EXPEDITO • MONTES CLAROS - MG</span>
          </div>
        </div>

        {/* 2-Column Hero Grid: Left Content, Right Official Logo with Red LED Glow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-14">
          {/* Left Column: Massive Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="font-tactical text-xs sm:text-sm uppercase tracking-[0.3em] text-hazard-400 font-bold block mb-2">
                [ CENTRO DE ALTO RENDIMENTO MARCIAL ]
              </span>
              <h1 className="font-combat text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-black text-white tracking-tight leading-[0.88] drop-shadow-2xl">
                FORJE SEU CORPO. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blood-500 via-blood-600 to-amber-500">
                  BLINDE SUA MENTE.
                </span>
              </h1>
            </div>

            <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal text-balance">
              O maior templo de artes marciais de Montes Claros. Focado em queima calórica devastadora, autodefesa real sem regras fúteis e disciplina militar sob a tutela direta do <strong className="text-white font-bold">Mestre André</strong>.
            </p>

            {/* Tactical Action Buttons (Dual CTAs with chamfered cuts) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onStartTriage}
                className="relative group overflow-hidden px-8 py-4 bg-gradient-to-r from-blood-700 via-blood-600 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-combat uppercase tracking-wider text-xl sm:text-2xl font-black shadow-spotlight-sharp transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] clip-chamfer-top border border-blood-500/50 flex items-center justify-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>AGENDAR AULA EXPERIMENTAL</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
              </button>

              <button
                onClick={onExploreModalities}
                className="px-7 py-4 bg-asphalt-900 hover:bg-asphalt-850 text-zinc-200 hover:text-white font-combat uppercase tracking-wider text-xl sm:text-2xl font-bold border border-zinc-800 hover:border-blood-600 transition-all clip-chamfer-top flex items-center justify-center gap-2"
              >
                <Crosshair className="w-5 h-5 text-blood-500" />
                <span>VER MODALIDADES</span>
              </button>
            </div>

            {/* Micro-guarantees */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-tactical uppercase tracking-wider text-zinc-400 pt-2">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 bg-hazard-400 rounded-full" />
                1ª AULA 100% CORTESIA
              </span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 bg-blood-500 rounded-full" />
                TURMAS DO ZERO AO AVANÇADO
              </span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
                TATAME LIVRE DE EGO
              </span>
            </div>
          </div>

          {/* Right Column: Official Logo Showcase with Red LED Backlighting Effects */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Red LED Glow Halos in multiple layers */}
              <div className="absolute inset-0 bg-blood-600/35 rounded-full blur-[90px] animate-pulse pointer-events-none" />
              <div className="absolute w-72 h-72 bg-blood-700/40 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute w-84 h-84 border-2 border-dashed border-blood-500/30 rounded-full animate-spin [animation-duration:40s] pointer-events-none" />
              
              {/* Outer Combat Ring with Chamfered Tag Accents */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-b from-blood-600 via-blood-900 to-black shadow-spotlight-red border-2 border-blood-500/70 flex items-center justify-center group">
                {/* Inner Bezel */}
                <div className="w-full h-full rounded-full overflow-hidden bg-black p-2 border border-zinc-700 relative shadow-inner">
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

              {/* Floating Tactical Badges */}
              <div className="absolute -top-2 left-4 z-20 bg-asphalt-900/95 border border-blood-600 px-3 py-1 clip-tag shadow-spotlight-sharp">
                <span className="font-tactical text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1">
                  <Flame className="w-3 h-3 text-blood-500" />
                  QG MONTES CLAROS
                </span>
              </div>

              <div className="absolute -bottom-2 right-4 z-20 bg-asphalt-900/95 border border-hazard-400 px-3 py-1 clip-tag shadow-hazard-glow">
                <span className="font-tactical text-[10px] font-bold uppercase tracking-wider text-hazard-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-hazard-400" />
                  CENTRO DE ALTA PERFORMANCE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Combat Authority Cards with Tactical Cut and Metric Styling */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="p-5 bg-asphalt-900/90 border-l-2 border-blood-600 border-t border-r border-b border-zinc-800/80 shadow-combat-plate clip-chamfer-top hover:border-blood-500 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-tactical text-[11px] uppercase tracking-wider text-zinc-500">PROGRAMAS</span>
              <Flame className="w-4 h-4 text-blood-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-combat text-4xl sm:text-5xl font-black text-white leading-none">
              +6 MODALIDADES
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-sans">
              Boxe, Muay Thai, Jiu-Jitsu, Jeet Kune Do, Defesa Urbana e Kids.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 bg-asphalt-900/90 border-l-2 border-hazard-400 border-t border-r border-b border-zinc-800/80 shadow-combat-plate clip-chamfer-top hover:border-hazard-400 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-tactical text-[11px] uppercase tracking-wider text-zinc-500">INTENSIDADE</span>
              <Activity className="w-4 h-4 text-hazard-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-combat text-4xl sm:text-5xl font-black text-white leading-none">
              1000 KCAL/H
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-sans">
              Queima lipídica extrema, tônus muscular e preparo cardiovascular.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 bg-asphalt-900/90 border-l-2 border-blood-600 border-t border-r border-b border-zinc-800/80 shadow-combat-plate clip-chamfer-top hover:border-blood-500 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-tactical text-[11px] uppercase tracking-wider text-zinc-500">SEGURANÇA</span>
              <ShieldCheck className="w-4 h-4 text-blood-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-combat text-4xl sm:text-5xl font-black text-white leading-none">
              ZERO EGO
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-sans">
              Ambiente de fraternidade. Iniciantes preservados e acompanhados.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-5 bg-asphalt-900/90 border-l-2 border-blood-600 border-t border-r border-b border-zinc-800/80 shadow-combat-plate clip-chamfer-top hover:border-blood-500 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-tactical text-[11px] uppercase tracking-wider text-zinc-500">LINHAGEM</span>
              <Trophy className="w-4 h-4 text-blood-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-combat text-4xl sm:text-5xl font-black text-white leading-none">
              MESTRE ANDRÉ
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-sans">
              Supervisão de instrutores graduados e formadores de campeões em MOC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
