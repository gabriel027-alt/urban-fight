"use client";

import React, { useState } from "react";
import Image from "next/image";
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
import { URBAN_FIGHT_CONFIG } from "@/lib/utils";

interface ModalityStyle {
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  badgeDot: string;
  iconBorder: string;
  iconBg: string;
  iconColor: string;
  hoverBorder: string;
  taglineColor: string;
  categoryTag: string;
}

const MODALITY_STYLES: Record<string, ModalityStyle> = {
  "boxe-tradicional": {
    badgeBg: "bg-red-500/15",
    badgeText: "text-red-300",
    badgeBorder: "border-red-500/30",
    badgeDot: "bg-red-500",
    iconBorder: "border-red-500/30 group-hover:border-red-500/70",
    iconBg: "bg-red-950/50",
    iconColor: "text-red-500",
    hoverBorder: "hover:border-red-500/70",
    taglineColor: "text-red-400",
    categoryTag: "Nobre Arte • 900 kcal/h",
  },
  "kickboxing-muaythai": {
    badgeBg: "bg-amber-500/15",
    badgeText: "text-amber-300",
    badgeBorder: "border-amber-500/30",
    badgeDot: "bg-amber-500",
    iconBorder: "border-amber-500/30 group-hover:border-amber-500/70",
    iconBg: "bg-amber-950/50",
    iconColor: "text-amber-400",
    hoverBorder: "hover:border-amber-500/70",
    taglineColor: "text-amber-400",
    categoryTag: "8 Armas • 1000 kcal/h",
  },
  "jiu-jitsu": {
    badgeBg: "bg-sky-500/15",
    badgeText: "text-sky-300",
    badgeBorder: "border-sky-500/30",
    badgeDot: "bg-sky-500",
    iconBorder: "border-sky-500/30 group-hover:border-sky-500/70",
    iconBg: "bg-sky-950/50",
    iconColor: "text-sky-400",
    hoverBorder: "hover:border-sky-500/70",
    taglineColor: "text-sky-400",
    categoryTag: "Arte Suave • Solo & Submissão",
  },
  "jeet-kune-do-defesa": {
    badgeBg: "bg-zinc-400/15",
    badgeText: "text-zinc-200",
    badgeBorder: "border-zinc-500/30",
    badgeDot: "bg-zinc-300",
    iconBorder: "border-zinc-500/30 group-hover:border-zinc-400/70",
    iconBg: "bg-zinc-900/60",
    iconColor: "text-zinc-200",
    hoverBorder: "hover:border-zinc-400/70",
    taglineColor: "text-zinc-300",
    categoryTag: "Tática & Sobrevivência Urbana",
  },
  "krav-maga": {
    badgeBg: "bg-orange-500/15",
    badgeText: "text-orange-300",
    badgeBorder: "border-orange-500/30",
    badgeDot: "bg-orange-500",
    iconBorder: "border-orange-500/30 group-hover:border-orange-500/70",
    iconBg: "bg-orange-950/50",
    iconColor: "text-orange-400",
    hoverBorder: "hover:border-orange-500/70",
    taglineColor: "text-orange-400",
    categoryTag: "Defesa Militar • Instintivo",
  },
  "taekwondo-kids": {
    badgeBg: "bg-emerald-500/15",
    badgeText: "text-emerald-300",
    badgeBorder: "border-emerald-500/30",
    badgeDot: "bg-emerald-500",
    iconBorder: "border-emerald-500/30 group-hover:border-emerald-500/70",
    iconBg: "bg-emerald-950/50",
    iconColor: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/70",
    taglineColor: "text-emerald-400",
    categoryTag: "Turma Kids • Disciplina & Família",
  },
};

const defaultStyle: ModalityStyle = {
  badgeBg: "bg-blood-600/20",
  badgeText: "text-blood-300",
  badgeBorder: "border-blood-500/30",
  badgeDot: "bg-blood-500",
  iconBorder: "border-blood-500/30 group-hover:border-blood-500/70",
  iconBg: "bg-blood-950/50",
  iconColor: "text-blood-400",
  hoverBorder: "hover:border-blood-500/70",
  taglineColor: "text-blood-400",
  categoryTag: "Treino Especializado",
};

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
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    e.currentTarget.style.setProperty("--rotate-x", `${rotateX}deg`);
    e.currentTarget.style.setProperty("--rotate-y", `${rotateY}deg`);
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--rotate-x", "0deg");
    e.currentTarget.style.setProperty("--rotate-y", "0deg");
    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  const renderIcon = (iconName: Modality["iconName"], customClass?: string) => {
    const iconCls = `w-6 h-6 stroke-[2.2] ${customClass || "text-blood-500"}`;
    switch (iconName) {
      case "Flame":
        return <Flame className={iconCls} />;
      case "Zap":
        return <Zap className={iconCls} />;
      case "Swords":
        return <Swords className={iconCls} />;
      case "Shield":
        return <Shield className={iconCls} />;
      case "Sparkles":
        return <Sparkles className={iconCls} />;
      default:
        return <Activity className={iconCls} />;
    }
  };

  return (
    <section id="modalidades" className="scroll-mt-20 md:scroll-mt-24 py-20 sm:py-28 bg-[#030303] relative overflow-hidden w-full max-w-[100vw] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-asphalt-900 border border-blood-600/40 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest rounded-xl">
            <Crosshair className="w-3.5 h-3.5 text-blood-500" />
            <span>ARSENAL DE COMBATE & LINHAGEM LENDÁRIA</span>
          </div>

          <h2 className="font-combat text-5xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9]">
            ESCOLHA O SEU ESTILO. <br />
            <span className="text-blood-600">
              DOMINE O TATAME.
            </span>
          </h2>

          <p className="font-sans text-zinc-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Metodologias consagradas de artes marciais adaptadas pelo Mestre André para a sua evolução física, autodefesa eficiente e queima calórica acelerada.
          </p>

          {/* Tactical Filter Pills (48px Touch Target & Focus Rings) */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {MODALITIES_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[48px] px-5 py-2.5 text-xs sm:text-sm font-tactical uppercase tracking-wider font-bold rounded-xl transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] ${
                  activeCategory === cat.id
                    ? "bg-blood-600 text-white shadow-spotlight-sharp border border-blood-400"
                    : "bg-[#0a0a0c] text-zinc-200 hover:text-white hover:bg-zinc-900 border border-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Tilt Modalities Grid with Background Images & Specular Glare */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModalities.map((item) => {
            const style = MODALITY_STYLES[item.id] || defaultStyle;

            return (
              <div key={item.id} className="tilt-perspective h-full">
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className={`tilt-card tilt-card-inner relative bg-zinc-950/80 border border-zinc-800 ${style.hoverBorder} rounded-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between group shadow-xl transition-all duration-300 h-full`}
                >
                  {/* Photo Background with Next.js Image & group-hover:scale-105 zoom */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 brightness-[0.85] contrast-105"
                    />
                  </div>

                  {/* Gradiente inteligente: topo translúcido para exibição nítida das fotos e base escura para contraste do texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/15 pointer-events-none" />

                  {/* Specular Glare Effect */}
                  <div className="tilt-glare" />

                  {/* Content Header */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className={`w-12 h-12 ${style.iconBg} backdrop-blur-md border ${style.iconBorder} flex items-center justify-center rounded-xl shadow-lg transition-colors`}>
                        {renderIcon(item.iconName, style.iconColor)}
                      </div>

                      {/* Micro-badge único e refinado */}
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 ${style.badgeBg} border ${style.badgeBorder} ${style.badgeText} font-tactical text-[11px] font-bold uppercase tracking-wider rounded-lg backdrop-blur-md shadow-sm`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${style.badgeDot} animate-pulse`} />
                        <span>{item.badge || style.categoryTag}</span>
                      </div>
                    </div>

                    {/* Title and Category Tag */}
                    <div className="space-y-1.5 mb-4">
                      <span className={`font-tactical text-[10px] uppercase tracking-widest ${style.taglineColor} font-bold block`}>
                        {style.categoryTag}
                      </span>
                      <h3 className="font-combat text-3xl sm:text-4xl uppercase tracking-wide text-white group-hover:text-blood-400 transition-colors leading-none drop-shadow-md">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs text-zinc-300 italic pt-0.5 line-clamp-1">
                        &ldquo;{item.tagline}&rdquo;
                      </p>
                    </div>

                    {/* Description: caixa baixa, natural e legível com alto contraste */}
                    <p className="font-sans text-sm text-zinc-200 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>

                    {/* Tactical Metrics: Burn & Intensity */}
                    <div className="grid grid-cols-2 gap-2 mb-6 p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl shadow-inner">
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
                        <span className="font-tactical text-xs font-bold text-zinc-200 flex items-center gap-1 mt-0.5">
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
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-200 font-sans leading-snug">
                          <Check className="w-3.5 h-3.5 text-blood-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    {/* Audience */}
                    <div className="border-t border-white/10 pt-3 mb-6">
                      <div className="flex items-center gap-1.5 font-tactical text-[10px] uppercase tracking-wider text-zinc-400 mb-1 font-bold">
                        <UserCheck className="w-3 h-3 text-blood-400" />
                        <span>PERFIL DO ALUNO:</span>
                      </div>
                      <p className="text-xs text-zinc-300 font-sans">
                        {item.targetAudience.join(" • ")}
                      </p>
                    </div>
                  </div>

                  {/* Action Button (48px Touch Target & Focus Rings) */}
                  <button
                    onClick={() => onSelectModality(item.name)}
                    className="relative z-10 w-full min-h-[48px] py-3.5 px-4 bg-black/80 hover:bg-blood-600 text-white font-combat uppercase tracking-wider text-lg font-bold border border-white/15 hover:border-blood-500 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md group-hover:shadow-spotlight-sharp focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] cursor-pointer"
                  >
                    <span>QUERO TREINAR ESSA MODALIDADE</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner: Multi-Modalities / Cross-Training Package */}
        <div className="mt-14 relative bg-gradient-to-b md:bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-blood-600/70 rounded-xl p-6 sm:p-10 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Red Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blood-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blood-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blood-600/20 border border-blood-500/50 text-blood-400 font-tactical text-xs font-bold uppercase tracking-wider rounded-lg">
                <Flame className="w-3.5 h-3.5 text-blood-500" />
                <span>COMBO DE ARTES MARCIAIS • CROSS-TRAINING</span>
              </div>

              <h3 className="font-combat text-3xl sm:text-4xl lg:text-5xl uppercase font-black text-white tracking-tight leading-tight">
                QUER TREINAR MAIS DE UMA MODALIDADE?
              </h3>

              <p className="font-sans text-sm sm:text-base text-zinc-200 leading-relaxed">
                Combine a contundência da <strong className="text-white font-semibold">Trocação</strong> (Boxe ou Muay Thai) com a inteligência de solo do <strong className="text-white font-semibold">Jiu-Jitsu</strong> ou a defesa urbana do <strong className="text-white font-semibold">Krav Maga & Jeet Kune Do</strong>. Fale diretamente com o Mestre André e nossa recepção para entender as condições especiais e montar um plano personalizado com múltiplos treinos na semana.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="inline-flex items-center gap-2 text-xs font-tactical text-zinc-200 bg-zinc-950/90 px-3 py-1.5 border border-zinc-800 rounded-lg">
                  <Check className="w-3.5 h-3.5 text-blood-500 shrink-0" />
                  <span>Descontos Progressivos em Combos</span>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-tactical text-zinc-200 bg-zinc-950/90 px-3 py-1.5 border border-zinc-800 rounded-lg">
                  <Check className="w-3.5 h-3.5 text-blood-500 shrink-0" />
                  <span>Grade Integrada Sem Choque de Horários</span>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-tactical text-zinc-200 bg-zinc-950/90 px-3 py-1.5 border border-zinc-800 rounded-lg">
                  <Check className="w-3.5 h-3.5 text-blood-500 shrink-0" />
                  <span>Evolução Técnica & Condicionamento Completo</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0">
              <a
                href={`https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                  "Olá Mestre André! Gostaria de saber mais sobre os planos combinados para treinar mais de uma modalidade na Urban Fight."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-8 py-4 bg-blood-600 hover:bg-blood-500 text-white font-combat uppercase tracking-wider text-xl font-bold rounded-xl border border-blood-400/50 shadow-spotlight-sharp transition-all group focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
              >
                <span>CONSULTAR PLANOS COMBINADOS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>
              <span className="block text-center lg:text-right text-[11px] font-tactical text-zinc-300 uppercase tracking-widest mt-2">
                Atendimento direto com Mestre André
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
