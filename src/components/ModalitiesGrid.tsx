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
              className="tilt-card relative bg-[#09090b] border border-zinc-800 hover:border-blood-600/80 clip-chamfer-top p-6 sm:p-7 flex flex-col justify-between overflow-hidden group shadow-combat-plate"
            >
              {/* Dynamic Specular Glare Layer */}
              <div className="tilt-glare" />

              {/* Background Fighter Photo with Heavy Dark Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-45 transition-opacity duration-500 scale-105 pointer-events-none"
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/85 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-blood-950/20 via-transparent to-black pointer-events-none" />

              {/* Content Header */}
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-11 h-11 bg-black border border-zinc-700/80 flex items-center justify-center clip-tag group-hover:border-blood-500 transition-colors">
                    {renderIcon(item.iconName)}
                  </div>
                  {item.badge && (
                    <span className="px-2.5 py-1 text-[10px] font-tactical font-bold tracking-wider uppercase bg-blood-600/20 border border-blood-500/40 text-blood-400 clip-tag">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Title and Tagline */}
                <div className="space-y-1 mb-4">
                  {item.legendTribute && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-1 bg-black/90 border border-blood-600/40 text-[10px] font-tactical uppercase tracking-wider text-blood-400 clip-tag">
                      <span className="w-1.5 h-1.5 rounded-full bg-blood-500 animate-pulse" />
                      <span>{item.legendTribute}</span>
                    </div>
                  )}
                  <h3 className="font-combat text-3xl sm:text-4xl uppercase tracking-wide text-white group-hover:text-blood-400 transition-colors leading-none">
                    {item.name}
                  </h3>
                  <p className="font-tactical text-xs text-zinc-400 uppercase tracking-wider italic pt-1">
                    &ldquo;{item.tagline}&rdquo;
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3 mb-6">
                  {item.description}
                </p>

                {/* Tactical Metrics: Burn & Intensity */}
                <div className="grid grid-cols-2 gap-2 mb-6 p-3 bg-black border border-zinc-800 clip-tag">
                  <div>
                    <span className="font-tactical text-[9px] uppercase tracking-widest text-zinc-500 font-bold block">
                      GASTO CALÓRICO
                    </span>
                    <span className="font-tactical text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                      <Flame className="w-3.5 h-3.5 text-blood-500" />
                      {item.caloriesBurn}
                    </span>
                  </div>
                  <div>
                    <span className="font-tactical text-[9px] uppercase tracking-widest text-zinc-500 font-bold block">
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
                  <span className="font-tactical text-[10px] uppercase tracking-wider text-zinc-400 font-bold block">
                    VANTAGENS IMEDIATAS:
                  </span>
                  {item.benefits.slice(0, 3).map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                      <Check className="w-3.5 h-3.5 text-blood-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Audience */}
                <div className="border-t border-zinc-800/80 pt-3 mb-6">
                  <div className="flex items-center gap-1.5 font-tactical text-[10px] uppercase tracking-wider text-zinc-400 mb-1">
                    <UserCheck className="w-3 h-3 text-blood-400" />
                    <span>PERFIL DO ALUNO:</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-sans">
                    {item.targetAudience.join(" • ")}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectModality(item.name)}
                className="relative z-10 w-full py-3.5 px-4 bg-black hover:bg-blood-600 text-zinc-200 hover:text-white font-combat uppercase tracking-wider text-lg font-bold border border-zinc-800 hover:border-blood-500 clip-chamfer-top flex items-center justify-center gap-2 transition-all shadow-md group-hover:shadow-spotlight-sharp"
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
