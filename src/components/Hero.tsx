"use client";

import React, { useRef, useEffect } from "react";
import { 
  ArrowRight, 
  MapPin, 
  Flame, 
  ShieldCheck, 
  Activity, 
  Trophy,
  CheckCircle2,
  Star
} from "lucide-react";

interface HeroProps {
  onStartTriage: () => void;
  onExploreModalities?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartTriage,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be deferred by browser power settings
      });
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-24 border-b border-zinc-900 bg-[#030303] w-full max-w-[100vw]">
      {/* Background Video: Dynamic Viewport Responsive (480p mobile, 1080p desktop) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center brightness-[0.55] contrast-110"
        >
          <source src="/hero-bg-480p.mp4" type="video/mp4" media="(max-width: 768px)" />
          <source src="/hero-bg-1080p.mp4" type="video/mp4" media="(min-width: 769px)" />
          <source src="/publichero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark Gradient Overlay for Absolute Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/70" />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 bg-asphalt-900/90 border border-blood-700/60 rounded-xl">
            <span className="w-2 h-2 rounded-full bg-blood-500" />
            <span className="font-tactical text-[11px] sm:text-xs uppercase tracking-widest text-blood-400 font-bold">
              QG OFICIAL • MESTRE ANDRÉ
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-asphalt-900/80 border border-zinc-800 rounded-xl text-[11px] sm:text-xs font-tactical text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-blood-500 shrink-0" />
            <span className="tracking-wide text-zinc-300 truncate">SANTO EXPEDITO • MONTES CLAROS</span>
          </div>
        </div>

        {/* Central High-Impact Content (Hick's Law & Clear Visual Hierarchy) */}
        <div className="max-w-4xl mx-auto text-center sm:text-left space-y-5 sm:space-y-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blood-950/80 border border-blood-600/50 text-blood-300 font-tactical text-xs font-bold uppercase tracking-wider mb-4 rounded-xl">
              <Flame className="w-3.5 h-3.5 text-blood-500" />
              <span>1ª AULA 100% GRATUITA • DO ZERO AO AVANÇADO</span>
            </div>
            
            <h1 className="font-combat text-5xl sm:text-7xl md:text-8xl xl:text-9xl uppercase font-black text-white tracking-tight leading-[0.9] sm:leading-[0.88] drop-shadow-2xl">
              FORJE SEU CORPO. <br />
              <span className="text-blood-500">BLINDE SUA MENTE.</span>
            </h1>
          </div>

          {/* New Clean High-Contrast Subtitle (WCAG 2.2 text-zinc-50) */}
          <p className="font-sans text-lg sm:text-2xl text-zinc-50 font-semibold max-w-3xl leading-snug drop-shadow-md">
            Agende sua aula experimental gratuita em Montes Claros e comece hoje mesmo sob a tutela direta do Mestre André.
          </p>

          <p className="font-sans text-sm sm:text-base md:text-lg text-zinc-200 max-w-2xl leading-relaxed font-normal">
            O maior centro de artes marciais de Montes Claros: Boxe, Muay Thai, Jiu-Jitsu, Krav Maga, Jeet Kune Do e Turmas Kids. Tatame profissional, acolhedor e 100% livre de ego.
          </p>

          {/* Unified Primary CTA: Zero Hick's Law Friction */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-start gap-4">
            <button
              onClick={onStartTriage}
              className="w-full sm:w-auto px-8 sm:px-12 py-5 bg-gradient-to-r from-blood-700 via-blood-600 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-combat uppercase tracking-wider text-2xl sm:text-3xl font-black rounded-xl shadow-spotlight-sharp transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-blood-400/80 flex items-center justify-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] cursor-pointer"
            >
              <span>AGENDE AGORA - 0 CUSTO</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Micro-guarantees */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 text-xs font-tactical uppercase tracking-wider text-zinc-300 pt-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-blood-500 rounded-full" />
              1ª Aula 100% Gratuita
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-blood-500 rounded-full" />
              Turmas do Zero ao Avançado
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
              Tatame Sem Ego
            </span>
          </div>
        </div>

        {/* Immediate Proof Bar (Validação Social Instantânea) */}
        <div className="max-w-4xl mx-auto bg-[#09090b]/95 border border-zinc-800 rounded-xl p-4 sm:p-5 shadow-2xl backdrop-blur-md mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Google Rating */}
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-hazard-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-hazard-400 text-hazard-400" />
                  ))}
                  <span className="font-bold text-white text-sm ml-1 font-tactical">4.9/5</span>
                </div>
                <p className="font-tactical text-[11px] uppercase tracking-wider text-zinc-300">
                  Avaliação 4.9/5 em Montes Claros
                </p>
              </div>
            </div>

            {/* Validation Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full md:w-auto">
              <div className="flex items-center gap-2 px-3 py-2 bg-zinc-900/80 rounded-lg border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-blood-500 shrink-0" />
                <span className="text-xs font-sans text-zinc-200 font-medium">+1.200 Alunos</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-zinc-900/80 rounded-lg border border-zinc-800">
                <ShieldCheck className="w-4 h-4 text-blood-500 shrink-0" />
                <span className="text-xs font-sans text-zinc-200 font-medium">Acolhedor & Seguro</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-zinc-900/80 rounded-lg border border-zinc-800">
                <Trophy className="w-4 h-4 text-blood-500 shrink-0" />
                <span className="text-xs font-sans text-zinc-200 font-medium">Mestre André</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Combat Authority Cards - Clean Rounded-xl Design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="p-4 sm:p-5 bg-asphalt-900/95 border border-zinc-800 hover:border-blood-500/80 shadow-combat-plate rounded-xl transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-tactical text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-300 font-bold">PROGRAMAS</span>
              <Flame className="w-4 h-4 text-blood-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-combat text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-none">
              6 MODALIDADES
            </div>
            <p className="text-xs text-zinc-200 mt-2 font-sans line-clamp-2">
              Boxe, Muay Thai, Jiu-Jitsu, Krav Maga, Jeet Kune Do e Kids.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-4 sm:p-5 bg-asphalt-900/95 border border-zinc-800 hover:border-blood-500/80 shadow-combat-plate rounded-xl transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-tactical text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-300 font-bold">INTENSIDADE</span>
              <Activity className="w-4 h-4 text-blood-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-combat text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-none">
              1000 KCAL/H
            </div>
            <p className="text-xs text-zinc-200 mt-2 font-sans line-clamp-2">
              Queima calórica acelerada, tônus muscular e saúde cardiovascular.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-4 sm:p-5 bg-asphalt-900/95 border border-zinc-800 hover:border-blood-500/80 shadow-combat-plate rounded-xl transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-tactical text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-300 font-bold">SEGURANÇA</span>
              <ShieldCheck className="w-4 h-4 text-blood-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-combat text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-none">
              ZERO EGO
            </div>
            <p className="text-xs text-zinc-200 mt-2 font-sans line-clamp-2">
              Ambiente de respeito mútuo. Iniciantes acompanhados passo a passo.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-4 sm:p-5 bg-asphalt-900/95 border border-zinc-800 hover:border-blood-500/80 shadow-combat-plate rounded-xl transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-tactical text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-300 font-bold">LINHAGEM</span>
              <Trophy className="w-4 h-4 text-blood-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-combat text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-none">
              MESTRE ANDRÉ
            </div>
            <p className="text-xs text-zinc-200 mt-2 font-sans line-clamp-2">
              Mais de 20 anos de experiência marcial formando campeões e cidadãos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

