"use client";

import React from "react";
import { Quote, Star, ShieldCheck, Flame, ArrowRight, Video } from "lucide-react";

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
      className="py-20 sm:py-28 bg-[#030303] relative overflow-hidden w-full max-w-[100vw] border-t border-b border-zinc-900"
    >
      {/* Background Combat Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blood-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-asphalt-900 border border-blood-600/50 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest clip-tag">
            <Video className="w-3.5 h-3.5 text-blood-500" />
            <span>DEPOIMENTOS REAIS • A VOZ DO TATAME</span>
          </div>

          <h2 className="font-combat text-4xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9]">
            O QUE DIZEM NOSSOS <br />
            <span className="text-blood-600">ALUNOS NO TATAME</span>
          </h2>

          <p className="font-sans text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A transformação física, mental e técnica contada por quem treina, sua e evolui todos os dias na Urban Fight.
          </p>
        </div>

        {/* 2-Column Responsive Video Grid (2 cols desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {/* Video 1: Depoimento no Tatame */}
          <div className="relative bg-[#08080a] border-2 border-zinc-800 hover:border-blood-600/80 transition-all duration-300 clip-chamfer-top shadow-spotlight-sharp overflow-hidden group flex flex-col justify-between">
            {/* Video Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-zinc-950/95 border-b border-zinc-800/80 text-xs font-tactical">
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-blood-500 animate-pulse" />
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
                controls
                playsInline
                preload="metadata"
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
              <span className="text-zinc-500 uppercase tracking-widest text-[11px] hidden sm:inline">
                URBAN FIGHT
              </span>
            </div>
          </div>

          {/* Video 2: Depoimento do Igor */}
          <div className="relative bg-[#08080a] border-2 border-zinc-800 hover:border-blood-600/80 transition-all duration-300 clip-chamfer-top shadow-spotlight-sharp overflow-hidden group flex flex-col justify-between">
            {/* Video Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-zinc-950/95 border-b border-zinc-800/80 text-xs font-tactical">
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-blood-500 animate-pulse" />
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
                controls
                playsInline
                preload="metadata"
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
              <span className="text-zinc-500 uppercase tracking-widest text-[11px] hidden sm:inline">
                URBAN FIGHT
              </span>
            </div>
          </div>
        </div>

        {/* Highlight Instagram Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#08080a] border-2 border-zinc-800 hover:border-blood-600/70 transition-all duration-300 clip-chamfer-top p-6 sm:p-10 md:p-12 shadow-spotlight-sharp group">
            {/* Subtle Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blood-600 to-transparent opacity-75" />

            {/* Blood-Red Quotation Icon & Stars */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="p-3 bg-blood-950/40 border border-blood-600/40 clip-tag">
                <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-blood-600 fill-blood-600/20" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-blood-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blood-500 text-blood-500" />
                ))}
                <span className="ml-2 font-tactical text-xs text-zinc-400 font-bold uppercase tracking-wider hidden sm:inline">
                  5.0 • AVALIAÇÃO OFICIAL
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
                  <span className="font-tactical text-xs text-zinc-400 uppercase tracking-wider">
                    - @whoami.dev (via Instagram)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-700 text-zinc-300 font-tactical text-xs font-bold uppercase tracking-wider clip-tag">
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

        {/* High Conversion CTA below Social Proof */}
        {onStartTriage && (
          <div className="mt-12 text-center">
            <button
              onClick={onStartTriage}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blood-700 via-blood-600 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-combat uppercase tracking-wider text-xl sm:text-2xl font-black shadow-spotlight-sharp transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] clip-chamfer-top border border-blood-400/50 group"
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
