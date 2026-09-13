"use client";

import React, { useState } from "react";
import { 
  OFFICIAL_MODALITIES_SCHEDULE, 
  ScheduleHour
} from "@/data/schedule";
import { 
  Clock, 
  Calendar, 
  ArrowRight,
  Flame,
  Users
} from "lucide-react";

interface ScheduleSectionProps {
  onScheduleSlot: (modality: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onScheduleSlot }) => {
  const [filterModality, setFilterModality] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "TODAS AS MODALIDADES" },
    { id: "boxe", label: "BOXE" },
    { id: "kickboxing", label: "KICKBOXING" },
    { id: "jiu-jitsu", label: "JIU-JITSU" },
    { id: "taekwondo", label: "TAEKWONDO" },
    { id: "krav-maga", label: "KRAV MAGA" },
    { id: "jeet-kune-do", label: "JEET KUNE DO" },
  ];

  const displayedModalities = filterModality === "all"
    ? OFFICIAL_MODALITIES_SCHEDULE
    : OFFICIAL_MODALITIES_SCHEDULE.filter((m) => m.id === filterModality);

  const renderHourBadge = (h: ScheduleHour, idx: number) => {
    if (h.tag === "Feminino") {
      return (
        <span
          key={idx}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-blood-950 border border-blood-500/80 text-blood-200 font-tactical text-xs font-bold clip-tag shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blood-500 animate-pulse" />
          <span>{h.time} (Fem)</span>
        </span>
      );
    }
    if (h.tag === "Kids") {
      return (
        <span
          key={idx}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-950 border border-blue-500/80 text-blue-200 font-tactical text-xs font-bold clip-tag shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span>{h.time} (Kids)</span>
        </span>
      );
    }
    if (h.tag === "Adulto") {
      return (
        <span
          key={idx}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-800 border border-zinc-600 text-white font-tactical text-xs font-bold clip-tag shadow-sm"
        >
          <span>{h.time} (Adulto)</span>
        </span>
      );
    }
    if (h.tag === "Misto") {
      return (
        <span
          key={idx}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-800 border border-zinc-600 text-zinc-100 font-tactical text-xs font-bold clip-tag shadow-sm"
        >
          <span>{h.time} (Misto)</span>
        </span>
      );
    }
    if (h.tag === "JKD / Krav Maga") {
      return (
        <span
          key={idx}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-950 border border-amber-500/80 text-amber-200 font-tactical text-xs font-bold clip-tag shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span>{h.time} (JKD/Krav Maga)</span>
        </span>
      );
    }

    return (
      <span
        key={idx}
        className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-800 hover:bg-zinc-750 border border-zinc-600 text-white font-tactical text-xs font-bold clip-tag shadow-sm transition-colors"
      >
        <Clock className="w-3 h-3 text-blood-400" />
        <span>{h.time}</span>
      </span>
    );
  };

  return (
    <section id="horarios" className="py-20 sm:py-28 bg-[#030303] relative overflow-hidden w-full max-w-[100vw] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-zinc-900 border border-blood-600/50 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest clip-tag">
            <Calendar className="w-3.5 h-3.5 text-blood-500" />
            <span>GRADE OFICIAL DE COMBATE • SEDE SANTO EXPEDITO</span>
          </div>

          <h2 className="font-combat text-5xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9]">
            HORÁRIOS OFICIAIS. <br />
            <span className="text-blood-600">
              ESCOLHA SEU TURNO.
            </span>
          </h2>

          <p className="font-sans text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto">
            Grade oficial da Urban Fight Montes Claros. Turmas abertas pela manhã, tarde e noite com divisões mistas, femininas e infantis (Kids).
          </p>

          {/* Modality Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterModality(tab.id)}
                className={`px-4 py-2 font-tactical text-xs uppercase tracking-wider font-bold clip-tag transition-all ${
                  filterModality === tab.id
                    ? "bg-blood-600 text-white shadow-spotlight-sharp border-b-2 border-blood-400"
                    : "bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Official Modalities Schedule Cards (High Contrast bg-zinc-900/95 & border-zinc-700) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {displayedModalities.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/95 border border-zinc-700 hover:border-blood-500 clip-chamfer-top p-6 sm:p-7 flex flex-col justify-between shadow-2xl transition-all group"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="border-b border-zinc-800 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-tactical text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-blood-600/25 border border-blood-500/50 text-blood-300 clip-tag">
                      {item.badge}
                    </span>
                    <span className="font-tactical text-[11px] text-zinc-400 flex items-center gap-1">
                      <Users className="w-3 h-3 text-blood-500" />
                      {item.audience}
                    </span>
                  </div>

                  <h3 className="font-combat text-3xl sm:text-4xl text-white uppercase tracking-wide group-hover:text-blood-400 transition-colors leading-none">
                    {item.name}
                  </h3>
                </div>

                {/* Days and Hours List */}
                <div className="space-y-4">
                  {item.schedules.map((sch, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex items-center gap-1.5 text-zinc-200 font-tactical text-xs font-bold uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-blood-500" />
                        <span>{sch.day}:</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 pl-3">
                        {sch.hours.map((h, hIdx) => renderHourBadge(h, hIdx))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-zinc-800">
                <button
                  onClick={() => onScheduleSlot(item.name)}
                  className="w-full py-3 px-4 bg-zinc-800 hover:bg-blood-600 text-white font-combat uppercase tracking-wider text-base font-bold clip-chamfer-top flex items-center justify-center gap-2 border border-zinc-600 hover:border-blood-500 transition-all shadow-md group-hover:shadow-spotlight-sharp"
                >
                  <span>AGENDAR NESTA MODALIDADE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Presentation Video: Gym Atmosphere & Dynamics */}
        <div className="mt-16 bg-asphalt-900 border border-zinc-800 clip-chamfer-top p-6 sm:p-8 shadow-combat-plate relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blood-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-blood-600/40 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest clip-tag mb-1.5">
                  <Flame className="w-3.5 h-3.5 text-blood-500" />
                  <span>VÍDEO DE APRESENTAÇÃO • ENERGIA DO TATAME</span>
                </div>
                <h3 className="font-combat text-3xl sm:text-4xl uppercase tracking-wide text-white leading-none">
                  SINTA A VIBRAÇÃO DOS TREINOS NA URBAN FIGHT
                </h3>
              </div>
              <span className="font-tactical text-xs text-zinc-400 uppercase tracking-wider">
                GRAVADO AO VIVO NA SEDE SANTO EXPEDITO
              </span>
            </div>

            {/* Video Player: Container adjusted to display full video fluidly and centered with object-contain */}
            <div className="relative w-full max-w-4xl mx-auto rounded-none overflow-hidden bg-black border-2 border-zinc-800 shadow-spotlight-sharp aspect-video flex items-center justify-center">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/logo-urban-fight.jpg"
                className="w-full h-full object-contain bg-black"
                style={{ objectFit: "contain" }}
              >
                <source src="/video-urban1-apresentacao.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-zinc-400">
              <p>
                Confira como nossos alunos se preparam, a intensidade dos exercícios aeróbicos e o suporte técnico em cada golpe.
              </p>
              <button
                onClick={() => onScheduleSlot("Aula Experimental")}
                className="shrink-0 px-6 py-3 bg-blood-600 hover:bg-blood-500 text-white font-combat uppercase tracking-wider text-xl font-bold clip-chamfer-top transition-all shadow-spotlight-sharp"
              >
                EXPERIMENTAR ESTE TREINO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
