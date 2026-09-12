"use client";

import React from "react";
import { 
  ShieldCheck, 
  Flame, 
  Award, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  MapPin
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
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 border-b border-zinc-800/80">
      {/* Background Combat Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-combat-radial pointer-events-none opacity-80" />
      <div className="absolute top-24 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 -right-32 w-96 h-96 bg-red-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 combat-grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/30 text-xs font-semibold text-red-400 shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
            <span>SOB A LIDERANÇA DO MESTRE ANDRÉ</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/70 border border-zinc-800 text-xs text-zinc-300 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>Santo Expedito • Montes Claros - MG</span>
          </div>
        </div>

        {/* Central Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.08]">
            Transforme sua mente e seu corpo no{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-500">
              Maior Centro de Artes Marciais
            </span>{" "}
            de Montes Claros
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            Disciplina inabalável, queima calórica intensa, autodefesa real e evolução física e mental completa. Metodologia progressiva para todos os níveis — do iniciante absoluto que nunca lutou até atletas de alto rendimento.
          </p>

          {/* Dual CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartTriage}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-red-600 via-red-500 to-red-700 shadow-combat-glow hover:shadow-combat-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-red-400/40"
            >
              <span>Agendar Aula Experimental Gratuita</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onExploreModalities}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-red-500/50 transition-all duration-200"
            >
              <span>Conhecer as Modalidades</span>
            </button>
          </div>

          {/* Quick micro-bullets */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-zinc-400 pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-red-500" />
              1ª Aula 100% Grátis
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-red-500" />
              Sem taxa de matrícula oculta
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-red-500" />
              Ambiente seguro e acolhedor
            </span>
          </div>
        </div>

        {/* 4 Authority Cards */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {/* Badge 1 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-red-500/40 transition-colors backdrop-blur-sm relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-3 group-hover:scale-110 transition-transform">
              <Flame className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">+6 Modalidades</div>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Boxe, Muay Thai, Jiu-Jitsu, Jeet Kune Do, Defesa Pessoal e Kids.
            </p>
          </div>

          {/* Badge 2 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-red-500/40 transition-colors backdrop-blur-sm relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-3 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">Ambiente Familiar</div>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Espaço respeitoso, sem ego, seguro para homens, mulheres e crianças.
            </p>
          </div>

          {/* Badge 3 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-red-500/40 transition-colors backdrop-blur-sm relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-3 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">Equipe Graduada</div>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Supervisão direta do Mestre André e professores faixas pretas certificados.
            </p>
          </div>

          {/* Badge 4 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-red-500/40 transition-colors backdrop-blur-sm relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-3 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">Todos os Níveis</div>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Metodologia passo a passo desenhada para você que nunca treinou.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
