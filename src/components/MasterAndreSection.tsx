"use client";

import React from "react";
import { 
  ArrowRight, 
  Flame, 
  MapPin
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
      beltVisual: "bg-blood-900 border-y border-blood-700 relative overflow-hidden flex items-center justify-end px-2",
      badgeText: "KRU / TRADICIONAL",
    },
    {
      title: "Boxe Tradicional (Nobre Arte)",
      rank: "Treinador Chefe & Mentor",
      details: "Mecânica cirúrgica de punhos, esquivas elusivas e preparação física de atletas de alto rendimento.",
      beltVisual: "bg-zinc-850 border-y border-zinc-600 relative overflow-hidden flex items-center justify-end px-2",
      badgeText: "NOBRE ARTE",
    },
    {
      title: "Jeet Kune Do & Defesa Urbana",
      rank: "Instrutor Tático de Sobrevivência",
      details: "Aplicação de técnicas reais de desarmamento, neutralização rápida e resposta a agressões urbanas.",
      beltVisual: "bg-amber-950 border-y border-hazard-500/40 relative overflow-hidden flex items-center justify-end px-2",
      badgeText: "TÁTICO & COMBATE",
    },
  ];

  return (
    <section id="metodo" className="py-20 sm:py-28 bg-[#070709] relative overflow-hidden border-t border-b border-zinc-900">
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
            SOB A TUTELA DO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blood-500 to-amber-500">MESTRE ANDRÉ</span>
          </h2>
          <p className="font-tactical text-xs sm:text-sm text-zinc-400 uppercase tracking-widest mt-2">
            MAIS DE 20 ANOS FORJANDO GUERREIROS, CAMPEÕES E CIDADÃOS EM MONTES CLAROS
          </p>
        </div>

        {/* Asymmetric Editorial Poster Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Visual Column: Atmospheric Fighter / Master Portrait */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 rounded-none clip-chamfer-top bg-gradient-to-b from-zinc-800/80 via-asphalt-900 to-black p-1 border-2 border-zinc-800 group shadow-spotlight-sharp">
              {/* Inner frame */}
              <div className="relative h-full min-h-[480px] sm:min-h-[560px] w-full overflow-hidden bg-[#0a0a0d] flex flex-col justify-end p-6 sm:p-8">
                {/* Background Fighter Photography Treatment */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop')`,
                  }}
                />

                {/* Dramatic Vignette and Red Grading Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/80 via-transparent to-blood-950/40 mix-blend-multiply" />
                
                {/* Corner Tactical Mark */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-tactical text-[10px] tracking-widest text-hazard-400 font-bold bg-black/90 border border-hazard-400/40 px-2 py-1">
                    URBAN FIGHT • MOC/MG
                  </span>
                </div>

                {/* Poster Content on the bottom of the photo */}
                <div className="relative z-10 space-y-3">
                  <div className="inline-block px-3 py-1 bg-blood-600 text-white font-tactical text-xs font-bold uppercase tracking-wider">
                    DIRETOR GERAL & HEAD COACH
                  </div>

                  <h3 className="font-combat text-4xl sm:text-5xl font-black text-white uppercase tracking-wider leading-none">
                    MESTRE ANDRÉ
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Referência no ensino de artes marciais no Norte de Minas. Mentor técnico de atletas profissionais e pioneiro no método de acolhimento ao iniciante sem ego.
                  </p>

                  <div className="pt-2 flex items-center gap-3 text-xs font-tactical text-zinc-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blood-500" />
                      Santo Expedito
                    </span>
                    <span>•</span>
                    <span className="text-zinc-300 font-bold">Faixa Preta 4º Grau BJJ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lineage & Manifesto Editorial Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            {/* Engraved Manifesto Box */}
            <div className="p-6 sm:p-8 bg-asphalt-900/90 border-l-4 border-blood-600 border-y border-r border-zinc-800 clip-chamfer-top shadow-combat-plate relative">
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
                    className="p-4 bg-asphalt-850 border border-zinc-800/90 hover:border-blood-600/60 transition-all clip-tag flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
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
