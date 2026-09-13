"use client";

import React from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  Flame, 
  MapPin,
  Play
} from "lucide-react";

interface MasterAndreSectionProps {
  onStartTriage: () => void;
}

export const MasterAndreSection: React.FC<MasterAndreSectionProps> = ({
  onStartTriage,
}) => {
  const martialRanks = [
    {
      title: "Jiu-Jitsu Brasileiro (BJJ)",
      rank: "Faixa Preta 4º Grau",
      details: "Linhagem direta de grandes mestres, especialista em alavancas e defesa pessoal no solo.",
      beltVisual: "bg-black border-y border-zinc-700 relative overflow-hidden flex items-center justify-end px-2",
      badgeText: "BJJ BLACK BELT",
    },
    {
      title: "Muay Thai & Kickboxing",
      rank: "Grau Preto / Kru Especialista",
      details: "Formação técnica em trocação pesada tailandesa e biomecânica do golpe com as 8 armas.",
      beltVisual: "bg-blood-950 border-y border-blood-800 relative overflow-hidden flex items-center justify-end px-2",
      badgeText: "KRU / TRADICIONAL",
    },
    {
      title: "Boxe Tradicional (Nobre Arte)",
      rank: "Treinador Chefe & Mentor",
      details: "Mecânica cirúrgica de punhos, esquivas elusivas e preparação física de atletas de alto rendimento.",
      beltVisual: "bg-zinc-900 border-y border-zinc-700 relative overflow-hidden flex items-center justify-end px-2",
      badgeText: "NOBRE ARTE",
    },
    {
      title: "Jeet Kune Do & Defesa Urbana",
      rank: "Instrutor Tático de Sobrevivência",
      details: "Aplicação de técnicas reais de desarmamento, neutralização rápida e resposta a agressões urbanas.",
      beltVisual: "bg-zinc-900 border-y border-zinc-700 relative overflow-hidden flex items-center justify-end px-2",
      badgeText: "TÁTICO & COMBATE",
    },
  ];

  return (
    <section id="metodo" className="py-20 sm:py-28 bg-[#030303] relative overflow-hidden border-t border-b border-zinc-900">
      {/* Background Lighting */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-blood-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[500px] h-[500px] bg-blood-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Header / Tactical Tag */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-asphalt-900 border border-blood-600/40 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest clip-tag mb-3">
            <Flame className="w-3.5 h-3.5 text-blood-500" />
            <span>LIDERANÇA & LINHAGEM TÉCNICA</span>
          </div>

          <h2 className="font-combat text-4xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9]">
            SOB A TUTELA DO <span className="text-blood-600">MESTRE ANDRÉ</span>
          </h2>
          <p className="font-tactical text-xs sm:text-sm text-zinc-400 uppercase tracking-widest mt-2">
            MAIS DE 20 ANOS FORJANDO GUERREIROS, CAMPEÕES E CIDADÃOS EM MONTES CLAROS
          </p>
        </div>

        {/* Asymmetric Editorial Poster Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Column 1: Real Photo of Mestre André + Main Interactive Video Player */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {/* Card 1: Official Real Photo of Mestre André with Illuminated Tactical Frame */}
            <div className="relative rounded-none clip-chamfer-top bg-[#09090b] p-1 border border-zinc-800 shadow-spotlight-sharp group">
              <div className="relative overflow-hidden bg-[#060608] p-5 flex flex-col sm:flex-row items-center gap-6">
                {/* Real Photo Thumbnail */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-blood-600 shadow-spotlight-sharp shrink-0 bg-black">
                  <Image
                    src="/mestre-andre.jpg"
                    alt="Foto Real do Mestre André"
                    width={176}
                    height={176}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Profile Details */}
                <div className="space-y-2 text-center sm:text-left">
                  <div className="inline-block px-2.5 py-0.5 bg-blood-600 text-white font-tactical text-[10px] font-bold uppercase tracking-wider clip-tag">
                    FUNDADOR & HEAD COACH
                  </div>
                  <h3 className="font-combat text-3xl sm:text-4xl font-black text-white uppercase tracking-wider leading-none">
                    MESTRE ANDRÉ
                  </h3>
                  <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                    Referência absoluta no ensino de artes marciais no Norte de Minas. Formador de atletas e pioneiro no acolhimento ao iniciante sem ego.
                  </p>
                  <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-tactical text-zinc-400">
                    <span className="flex items-center gap-1 text-blood-400">
                      <MapPin className="w-3.5 h-3.5 text-blood-500" />
                      Santo Expedito • Montes Claros
                    </span>
                    <span>•</span>
                    <span className="text-zinc-200 font-bold">Faixa Preta 4º Grau BJJ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Main Interactive Video Player of Mestre André (object-contain & aspect-video) */}
            <div className="relative rounded-none clip-chamfer-top bg-[#09090b] p-1 border border-blood-600 shadow-spotlight-sharp">
              <div className="relative w-full overflow-hidden bg-[#030303] p-4 sm:p-5 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between gap-2 z-10">
                  <span className="font-tactical text-[10px] tracking-widest text-zinc-200 font-bold bg-black border border-zinc-800 px-2.5 py-1 clip-tag flex items-center gap-1.5">
                    <Play className="w-3 h-3 text-blood-500 fill-blood-500" />
                    VÍDEO PRINCIPAL • PALAVRA DO MESTRE
                  </span>
                  <span className="font-tactical text-[10px] tracking-wider text-blood-400 bg-blood-950/80 border border-blood-600/50 px-2 py-0.5 clip-tag flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blood-500 animate-pulse" />
                    ASSISTA AO VÍDEO
                  </span>
                </div>

                {/* Video Player: aspect-video and object-contain to ensure Mestre André is NOT cut off */}
                <div className="relative w-full overflow-hidden bg-black border border-zinc-800 shadow-2xl flex items-center justify-center aspect-video">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster="/logo-urban-fight.jpg"
                    className="w-full h-full object-contain bg-black"
                    style={{ objectFit: "contain" }}
                  >
                    <source src="/video-urban2-mestre.mp4" type="video/mp4" />
                    Seu navegador não suporta a reprodução deste vídeo.
                  </video>
                </div>

                <p className="font-sans text-xs text-zinc-400 text-center sm:text-left">
                  Dê o play para ouvir diretamente do Mestre André sobre a metodologia e acolhimento da Urban Fight.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Lineage & Manifesto Editorial Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Engraved Manifesto Box */}
            <div className="p-6 sm:p-8 bg-[#09090b] border-l-4 border-blood-600 border-y border-r border-zinc-800 clip-chamfer-top shadow-combat-plate relative">
              <span className="font-tactical text-xs uppercase tracking-[0.25em] text-blood-500 font-bold block mb-2">
                {"// MANIFESTO DO TATAME"}
              </span>
              
              <blockquote className="font-combat text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-wide leading-tight">
                &ldquo;AQUI A VAIDADE MORRE, O MEDO É DOMADO E A VERDADEIRA FORÇA É CONSTRUÍDA GOLPE A GOLPE.&rdquo;
              </blockquote>

              <p className="font-sans text-sm text-zinc-300 mt-4 leading-relaxed">
                Na Urban Fight, a técnica serve para proteger sua família, superar os seus limites diários e descarregar o estresse de uma rotina pesada. Não formamos valentões; formamos pessoas seguras, saudáveis e respeitosas.
              </p>
            </div>

            {/* Graphic Martial Belt Ranks & Lineage */}
            <div className="space-y-3">
              <span className="font-tactical text-xs uppercase tracking-widest text-zinc-400 font-bold block">
                GRADE DE FORMAÇÃO & LINHAGEM TÉCNICA:
              </span>

              <div className="space-y-3">
                {martialRanks.map((rank, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#09090b] border border-zinc-800 hover:border-blood-600/60 transition-all clip-tag flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-combat text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-blood-400 transition-colors">
                          {rank.title}
                        </span>
                        <span className="font-tactical text-[10px] px-2 py-0.5 bg-zinc-800 text-zinc-300 font-bold">
                          {rank.rank}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 font-sans">
                        {rank.details}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <span className="font-tactical text-xs font-bold px-3 py-1.5 bg-blood-600/10 border border-blood-600/30 text-blood-400 tracking-wider">
                        {rank.badgeText}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CTA under Master supervision */}
            <div className="pt-2">
              <button
                onClick={onStartTriage}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blood-700 via-blood-600 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-combat uppercase tracking-wider text-xl font-black shadow-spotlight-sharp transition-all clip-chamfer-top flex items-center justify-center gap-3 border border-blood-500/50"
              >
                <span>TREINAR COM O MESTRE ANDRÉ</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
