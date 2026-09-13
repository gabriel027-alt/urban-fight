"use client";

import React from "react";
import { Quote, Star, ShieldCheck } from "lucide-react";

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

export const SocialProofSection: React.FC = () => {
  return (
    <section 
      id="prova-social" 
      className="py-16 sm:py-20 bg-[#030303] relative overflow-hidden w-full max-w-[100vw] border-t border-zinc-900"
    >
      {/* Background Combat Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blood-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-asphalt-900 border border-blood-600/40 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest clip-tag">
            <Quote className="w-3.5 h-3.5 text-blood-500" />
            <span>PROVA SOCIAL • EXPERIÊNCIA REAL NO TATAME</span>
          </div>
        </div>

        {/* Tactical Testimonial Card */}
        <div className="relative bg-[#08080a] border-2 border-zinc-800 hover:border-blood-600/70 transition-all duration-300 clip-chamfer-top p-6 sm:p-10 md:p-12 shadow-spotlight-sharp group">
          {/* Subtle Top Accent Strip */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blood-600 to-transparent opacity-75" />

          {/* Blood-Red Quotation Icon */}
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
    </section>
  );
};
