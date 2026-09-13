"use client";

import React, { useState } from "react";
import { 
  MODALITIES, 
  MODALITIES_CATEGORIES, 
  Modality 
} from "@/data/modalities";
import { 
  Flame, 
  Zap, 
  Swords, 
  Shield, 
  Sparkles, 
  Activity, 
  Check, 
  ArrowRight,
  Crosshair,
  UserCheck
} from "lucide-react";

interface ModalitiesGridProps {
  onSelectModality: (modalityName: string) => void;
}

export const ModalitiesGrid: React.FC<ModalitiesGridProps> = ({
  onSelectModality,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredModalities = activeCategory === "all"
    ? MODALITIES
    : MODALITIES.filter((m) => m.category === activeCategory);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    e.currentTarget.style.setProperty("--rotate-x", `${rotateX}deg`);
    e.currentTarget.style.setProperty("--rotate-y", `${rotateY}deg`);
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--rotate-x", "0deg");
    e.currentTarget.style.setProperty("--rotate-y", "0deg");
  };

  const renderIcon = (iconName: Modality["iconName"]) => {
    switch (iconName) {
      case "Flame":
        return <Flame className="w-5 h-5 text-blood-500" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-blood-500" />;
      case "Swords":
        return <Swords className="w-5 h-5 text-zinc-300" />;
      case "Shield":
        return <Shield className="w-5 h-5 text-blood-500" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-zinc-300" />;
      default:
        return <Activity className="w-5 h-5 text-blood-500" />;
    }
  };

  return (
    <section id="modalidades" className="py-20 sm:py-28 bg-[#030303] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-asphalt-900 border border-blood-600/40 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest clip-tag">
            <Crosshair className="w-3.5 h-3.5 text-blood-500" />
            <span>ARSENAL DE COMBATE & LINHAGEM LENDÁRIA</span>
          </div>

          <h2 className="font-combat text-5xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9]">
            ESCOLHA O SEU ESTILO. <br />
            <span className="text-blood-600">
              DOMINE O TATAME.
            </span>
          </h2>

          <p className="font-sans text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Da nobreza clássica de Muhammad Ali à filosofia direta de Bruce Lee: metodologias consagradas adaptadas pelo Mestre André para a sua evolução física, autodefesa e queima extrema.
          </p>

          {/* Tactical Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {MODALITIES_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-tactical uppercase tracking-wider font-bold transition-all clip-tag ${
                  activeCategory === cat.id
                    ? "bg-blood-600 text-white shadow-spotlight-sharp border-b-2 border-blood-400"
                    : "bg-[#0a0a0c] text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Tilt Modalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 tilt-perspective">
          {filteredModalities.map((item) => (
            <div
              key={item.id}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: "perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))",
                transition: "transform 0.15s ease-out, box-shadow 0.2s ease",
              }}
              className="tilt-card relative bg-zinc-900/95 border border-zinc-700 hover:border-blood-500 clip-chamfer-top p-6 sm:p-7 flex flex-col justify-between overflow-hidden group shadow-2xl transition-all"
            >
              {/* Dynamic Specular Glare Layer */}
              <div className="tilt-glare" />

              {/* Background Athlete Photo with Smart Lighting - High Quality, Clean and Visible */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-85 transition-opacity duration-500 scale-105 pointer-events-none"
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
              />
              {/* Smart Lighting: clear at top to showcase athlete action, smooth dark gradient toward bottom for pure white text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/25 pointer-events-none" />

              {/* Content Header */}
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-11 h-11 bg-zinc-950 border border-zinc-600 flex items-center justify-center clip-tag group-hover:border-blood-500 transition-colors shadow-md">
                    {renderIcon(item.iconName)}
                  </div>
                  {item.badge && (
                    <span className="px-2.5 py-1 text-[10px] font-tactical font-bold tracking-wider uppercase bg-blood-600/30 border border-blood-500/50 text-blood-300 clip-tag shadow-sm">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Title and Tagline */}
                <div className="space-y-1 mb-4">
                  {item.legendTribute && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-1 bg-zinc-950/90 border border-blood-500/60 text-[10px] font-tactical uppercase tracking-wider text-blood-300 clip-tag shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blood-500 animate-pulse" />
                      <span>{item.legendTribute}</span>
                    </div>
                  )}
                  <h3 className="font-combat text-3xl sm:text-4xl uppercase tracking-wide text-white group-hover:text-blood-400 transition-colors leading-none">
                    {item.name}
                  </h3>
                  <p className="font-tactical text-xs text-zinc-200 uppercase tracking-wider italic pt-1">
                    &ldquo;{item.tagline}&rdquo;
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-zinc-200 leading-relaxed line-clamp-3 mb-6">
                  {item.description}
                </p>

                {/* Tactical Metrics: Burn & Intensity */}
                <div className="grid grid-cols-2 gap-2 mb-6 p-3 bg-zinc-950/80 border border-zinc-700 clip-tag shadow-inner">
                  <div>
                    <span className="font-tactical text-[9px] uppercase tracking-widest text-zinc-400 font-bold block">
                      GASTO CALÓRICO
                    </span>
                    <span className="font-tactical text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                      <Flame className="w-3.5 h-3.5 text-blood-500" />
                      {item.caloriesBurn}
                    </span>
                  </div>
                  <div>
                    <span className="font-tactical text-[9px] uppercase tracking-widest text-zinc-400 font-bold block">
                      INTENSIDADE
                    </span>
                    <span className="font-tactical text-xs font-bold text-blood-400 flex items-center gap-1 mt-0.5">
                      <Activity className="w-3.5 h-3.5 text-blood-400" />
                      {item.intensity}
                    </span>
                  </div>
                </div>

                {/* Benefits checklist */}
                <div className="space-y-2 mb-6">
                  <span className="font-tactical text-[10px] uppercase tracking-wider text-zinc-300 font-bold block">
                    VANTAGENS IMEDIATAS:
                  </span>
                  {item.benefits.slice(0, 3).map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-200 font-sans">
                      <Check className="w-3.5 h-3.5 text-blood-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Audience */}
                <div className="border-t border-zinc-800 pt-3 mb-6">
                  <div className="flex items-center gap-1.5 font-tactical text-[10px] uppercase tracking-wider text-zinc-300 mb-1 font-bold">
                    <UserCheck className="w-3 h-3 text-blood-400" />
                    <span>PERFIL DO ALUNO:</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-sans">
                    {item.targetAudience.join(" • ")}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectModality(item.name)}
                className="relative z-10 w-full py-3.5 px-4 bg-zinc-800 hover:bg-blood-600 text-white font-combat uppercase tracking-wider text-lg font-bold border border-zinc-600 hover:border-blood-500 clip-chamfer-top flex items-center justify-center gap-2 transition-all shadow-md group-hover:shadow-spotlight-sharp"
              >
                <span>QUERO TREINAR ESSA MODALIDADE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
