"use client";

import React from "react";
import { Quote, Star, ShieldCheck, Flame, ArrowRight, Video } from "lucide-react";
import { URBAN_FIGHT_CONFIG } from "@/lib/utils";

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

interface SocialProofSectionProps {
  onStartTriage?: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({
  onStartTriage,
}) => {
  return (
    <section 
      id="prova-social" 
      className="scroll-mt-20 md:scroll-mt-24 py-20 sm:py-28 bg-[#030303] relative overflow-hidden w-full max-w-[100vw] border-t border-b border-zinc-900"
    >
      {/* Background Combat Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blood-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-asphalt-900 border border-blood-600/50 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest">
              <Video className="w-3.5 h-3.5 text-blood-500" />
              <span>DEPOIMENTOS REAIS • A VOZ DO TATAME</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-zinc-900/95 border border-amber-500/50 text-amber-400 font-tactical text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white">5.0 • AVALIAÇÃO OFICIAL NO GOOGLE</span>
            </div>
          </div>

          <h2 className="font-combat text-4xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9]">
            O QUE DIZEM NOSSOS <br />
            <span className="text-blood-600">ALUNOS NO TATAME</span>
          </h2>

          <p className="font-sans text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A transformação física, mental e técnica contada por quem treina, sua e evolui todos os dias na Urban Fight. Nota máxima 5.0 avaliada pelos alunos no Google.
          </p>
        </div>

        {/* 2-Column Responsive Video Grid (2 cols desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {/* Video 1: Depoimento no Tatame */}
          <div className="relative bg-[#08080a] border-2 border-zinc-800 hover:border-blood-600/80 transition-all duration-300 rounded-xl shadow-spotlight-sharp overflow-hidden group flex flex-col justify-between">
            {/* Video Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-zinc-950/95 border-b border-zinc-800/80 text-xs font-tactical">
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-blood-500" />
                <span className="font-bold uppercase tracking-wider">DEPOIMENTO DO ALUNO</span>
              </div>
              <span className="text-blood-400 uppercase tracking-widest text-[11px] font-bold">
                TATAME OFICIAL
              </span>
            </div>

            {/* Video Player 16:9 */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                src="/provasocial-urban1.mp4"
                poster="/logo-urban-fight.jpg"
                controls
                playsInline
                preload="metadata"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="w-full h-full object-contain bg-black"
              >
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>

            {/* Video Footer Bar */}
            <div className="p-4 sm:p-5 bg-zinc-950 border-t border-zinc-800/80 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 font-tactical text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-blood-500 shrink-0" />
                <span className="font-bold uppercase tracking-wider">Superação, Técnica e Confiança</span>
              </div>
              <span className="text-zinc-300 uppercase tracking-widest text-[11px] hidden sm:inline">
                URBAN FIGHT
              </span>
            </div>
          </div>

          {/* Video 2: Depoimento do Igor */}
          <div className="relative bg-[#08080a] border-2 border-zinc-800 hover:border-blood-600/80 transition-all duration-300 rounded-xl shadow-spotlight-sharp overflow-hidden group flex flex-col justify-between">
            {/* Video Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-zinc-950/95 border-b border-zinc-800/80 text-xs font-tactical">
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-blood-500" />
                <span className="font-bold uppercase tracking-wider">DEPOIMENTO DO IGOR</span>
              </div>
              <span className="text-blood-400 uppercase tracking-widest text-[11px] font-bold">
                ALUNO URBAN FIGHT
              </span>
            </div>

            {/* Video Player 16:9 */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                src="/provasocial-urban2.mp4"
                poster="/logo-urban-fight.jpg"
                controls
                playsInline
                preload="metadata"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="w-full h-full object-contain bg-black"
              >
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>

            {/* Video Footer Bar */}
            <div className="p-4 sm:p-5 bg-zinc-950 border-t border-zinc-800/80 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 font-tactical text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-blood-500 shrink-0" />
                <span className="font-bold uppercase tracking-wider">Comunidade Sem Ego & Acolhimento</span>
              </div>
              <span className="text-zinc-300 uppercase tracking-widest text-[11px] hidden sm:inline">
                URBAN FIGHT
              </span>
            </div>
          </div>
        </div>

        {/* Highlight Instagram Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#08080a] border-2 border-zinc-800 hover:border-blood-600/70 transition-all duration-300 rounded-xl p-6 sm:p-10 md:p-12 shadow-spotlight-sharp group">
            {/* Subtle Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blood-600 to-transparent opacity-75" />

            {/* Blood-Red Quotation Icon & Stars */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="p-3 bg-blood-950/40 border border-blood-600/40 rounded-lg">
                <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-blood-600 fill-blood-600/20" />
              </div>

              {/* Google Verified 5.0 Rating */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-700/80 rounded-lg shadow-inner">
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0 p-0.5 shadow-sm">
                  <svg className="w-3 h-3" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-tactical text-xs text-white font-bold uppercase tracking-wider">
                  5.0 • AVALIAÇÃO NO GOOGLE
                </span>
              </div>
            </div>

            {/* Depoimento Real */}
            <blockquote className="font-combat text-2xl sm:text-4xl md:text-5xl text-white uppercase tracking-wide leading-tight mb-8">
              &ldquo;Não tem jeito, é o melhor lugar pra treinar 🥊&rdquo;
            </blockquote>

            {/* Author Details & Verified Social Proof Badge */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-blood-600/50 flex items-center justify-center text-blood-500 shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-combat text-xl sm:text-2xl text-white tracking-wider uppercase leading-none">
                    @whoami.dev
                  </p>
                  <span className="font-tactical text-xs text-zinc-300 uppercase tracking-wider">
                    - @whoami.dev (via Instagram)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-700 text-zinc-300 font-tactical text-xs font-bold uppercase tracking-wider rounded-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-blood-500" />
                  <span>Aluno Verificado</span>
                </span>
                <span className="font-tactical text-xs text-blood-400 uppercase tracking-wider">
                  Montes Claros • MG
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Reviews Trust Strip */}
        <div className="max-w-4xl mx-auto mt-8 bg-asphalt-900/90 border border-zinc-800 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-combat-plate">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="font-combat text-xl sm:text-2xl text-white uppercase tracking-wide">NOTA MÁXIMA 5.0 NO GOOGLE MAPS</span>
                <div className="flex items-center text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="font-sans text-xs sm:text-sm text-zinc-300 mt-0.5">
                Reconhecida com reputação impecável pelos alunos na Av. Cula Mangabeira, 1497 (Santo Expedito).
              </p>
            </div>
          </div>

          <a
            href={URBAN_FIGHT_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 hover:text-white font-tactical text-xs font-bold uppercase tracking-wider rounded-lg transition-colors inline-flex items-center gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
          >
            <span>CONFERIR AVALIAÇÕES</span>
            <ArrowRight className="w-3.5 h-3.5 text-blood-400" />
          </a>
        </div>

        {/* High Conversion CTA below Social Proof */}
        {onStartTriage && (
          <div className="mt-12 text-center">
            <button
              onClick={onStartTriage}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blood-700 via-blood-600 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-combat uppercase tracking-wider text-xl sm:text-2xl font-black shadow-spotlight-sharp transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] rounded-xl border border-blood-400/50 group focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
            >
              <Flame className="w-5 h-5 text-white" />
              <span>QUERO AGENDAR MINHA AULA EXPERIMENTAL</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
