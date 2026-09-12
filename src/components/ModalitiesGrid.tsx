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
  UserCheck,
  Target
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

  const renderIcon = (iconName: Modality["iconName"]) => {
    switch (iconName) {
      case "Flame":
        return <Flame className="w-6 h-6 text-red-500" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-amber-500" />;
      case "Swords":
        return <Swords className="w-6 h-6 text-blue-400" />;
      case "Shield":
        return <Shield className="w-6 h-6 text-red-500" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
      default:
        return <Activity className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="modalidades" className="py-20 bg-combat-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5" />
            <span>Modalidades & Programas Oficiais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Escolha sua Luta. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              Conquiste o seu Melhor Físico.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg">
            Do alto gasto calórico à autodefesa pura. Todas as turmas contam com turmas exclusivas para iniciantes e acompanhamento próximo dos instrutores.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {MODALITIES_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-red-600 text-white shadow-combat-glow border border-red-500"
                    : "bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modalities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModalities.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 hover:border-red-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-950/20 group relative overflow-hidden"
            >
              {/* Top ambient color aura */}
              <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.accentColor} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity`} />

              <div>
                {/* Header of the card */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/90 border border-zinc-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {renderIcon(item.iconName)}
                  </div>
                  {item.badge && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-red-600/20 border border-red-500/30 text-red-400">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Modality Title & Tagline */}
                <h3 className="text-xl font-black text-white group-hover:text-red-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-zinc-400 mt-1 mb-3 italic">
                  &ldquo;{item.tagline}&rdquo;
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-300 line-clamp-3 mb-5 leading-relaxed">
                  {item.description}
                </p>

                {/* Metric Pills (Intensity & Calories) */}
                <div className="grid grid-cols-2 gap-2 mb-5 p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 font-bold block">Gasto Estimado</span>
                    <span className="font-bold text-amber-400 flex items-center gap-1 mt-0.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      {item.caloriesBurn}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 font-bold block">Intensidade</span>
                    <span className="font-bold text-red-400 flex items-center gap-1 mt-0.5">
                      <Activity className="w-3.5 h-3.5 text-red-400" />
                      {item.intensity}
                    </span>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-2 mb-5">
                  <span className="text-xs uppercase font-bold text-zinc-400 block tracking-wider">
                    Principais Benefícios:
                  </span>
                  {item.benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Target Audience */}
                <div className="border-t border-zinc-800/80 pt-3 mb-6">
                  <span className="text-[11px] uppercase font-semibold text-zinc-500 block mb-1 flex items-center gap-1">
                    <UserCheck className="w-3 h-3 text-red-400" />
                    Indicado para:
                  </span>
                  <p className="text-xs text-zinc-400">
                    {item.targetAudience.join(" • ")}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectModality(item.name)}
                className="w-full py-3 px-4 rounded-xl bg-zinc-800/90 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 text-white text-xs sm:text-sm font-bold border border-zinc-700/80 hover:border-red-500/80 flex items-center justify-center gap-2 transition-all duration-200 group-hover:shadow-combat-glow"
              >
                <span>Quero treinar essa modalidade</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
