"use client";

import React, { useState } from "react";
import { SCHEDULE_DATA, ScheduleSlot } from "@/data/schedule";
import { 
  Clock, 
  Calendar, 
  Sun, 
  Sunset, 
  Moon, 
  ArrowRight,
  Flame
} from "lucide-react";

interface ScheduleSectionProps {
  onScheduleSlot: (modality: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onScheduleSlot }) => {
  const [filterShift, setFilterShift] = useState<string>("all");

  const filteredSlots = filterShift === "all"
    ? SCHEDULE_DATA
    : SCHEDULE_DATA.filter((s) => s.shift === filterShift);

  const getShiftBadge = (shift: ScheduleSlot["shift"]) => {
    switch (shift) {
      case "morning":
        return {
          label: "MANHÃ",
          icon: Sun,
          className: "text-zinc-200 bg-zinc-800 border-zinc-700",
        };
      case "afternoon":
        return {
          label: "TARDE / KIDS",
          icon: Sunset,
          className: "text-zinc-200 bg-zinc-800 border-zinc-700",
        };
      case "evening":
        return {
          label: "NOITE",
          icon: Moon,
          className: "text-blood-400 bg-blood-600/10 border-blood-500/30",
        };
    }
  };

  return (
    <section id="horarios" className="py-20 sm:py-28 bg-[#030303] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-asphalt-900 border border-blood-600/40 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest clip-tag">
            <Calendar className="w-3.5 h-3.5 text-blood-500" />
            <span>GRADE OPERACIONAL DE TREINOS</span>
          </div>

          <h2 className="font-combat text-5xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9]">
            HORÁRIOS DE COMBATE. <br />
            <span className="text-blood-600">
              DAS 06:30 ÀS 22:00.
            </span>
          </h2>

          <p className="font-sans text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Encaixe o treino antes de ir para o trabalho, no turno da tarde com seus filhos ou para descarregar toda a adrenalina à noite.
          </p>

          {/* Shift Filter Buttons with Tactical Pill Style */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setFilterShift("all")}
              className={`px-4 py-2 font-tactical text-xs uppercase tracking-wider font-bold clip-tag transition-all ${
                filterShift === "all"
                  ? "bg-blood-600 text-white shadow-spotlight-sharp"
                  : "bg-[#09090b] text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              TODOS OS TURNOS
            </button>
            <button
              onClick={() => setFilterShift("morning")}
              className={`px-4 py-2 font-tactical text-xs uppercase tracking-wider font-bold clip-tag flex items-center gap-1.5 transition-all ${
                filterShift === "morning"
                  ? "bg-blood-600 text-white shadow-spotlight-sharp"
                  : "bg-[#09090b] text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-zinc-300" />
              <span>MANHÃ (06:30 - 10:15)</span>
            </button>
            <button
              onClick={() => setFilterShift("afternoon")}
              className={`px-4 py-2 font-tactical text-xs uppercase tracking-wider font-bold clip-tag flex items-center gap-1.5 transition-all ${
                filterShift === "afternoon"
                  ? "bg-blood-600 text-white shadow-spotlight-sharp"
                  : "bg-[#09090b] text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              <Sunset className="w-3.5 h-3.5 text-zinc-300" />
              <span>TARDE & KIDS (15:00 - 18:30)</span>
            </button>
            <button
              onClick={() => setFilterShift("evening")}
              className={`px-4 py-2 font-tactical text-xs uppercase tracking-wider font-bold clip-tag flex items-center gap-1.5 transition-all ${
                filterShift === "evening"
                  ? "bg-blood-600 text-white shadow-spotlight-sharp"
                  : "bg-asphalt-900 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-blood-400" />
              <span>NOITE (18:30 - 22:00)</span>
            </button>
          </div>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSlots.map((slot, index) => {
            const badge = getShiftBadge(slot.shift);
            const BadgeIcon = badge.icon;
            return (
              <div
                key={index}
                className="p-5 bg-asphalt-900/90 border border-zinc-800/90 hover:border-blood-600/70 clip-chamfer-top flex flex-col justify-between group transition-all shadow-combat-plate"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-tactical text-sm font-bold text-blood-400 flex items-center gap-1.5 bg-black/90 px-3 py-1 border border-blood-700/40 clip-tag">
                      <Clock className="w-3.5 h-3.5 text-blood-500" />
                      {slot.time}
                    </span>

                    <span className={`inline-flex items-center gap-1 font-tactical text-[10px] font-bold tracking-wider px-2.5 py-0.5 border clip-tag ${badge.className}`}>
                      <BadgeIcon className="w-3 h-3" />
                      {badge.label}
                    </span>
                  </div>

                  <h3 className="font-combat text-2xl uppercase tracking-wide text-white group-hover:text-blood-400 transition-colors leading-tight">
                    {slot.modality}
                  </h3>

                  <div className="text-xs font-sans text-zinc-400 mt-3 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-tactical uppercase text-[10px] text-zinc-500 font-bold">Dias:</span>
                      <span className="text-zinc-200 font-medium">{slot.days}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-tactical uppercase text-[10px] text-zinc-500 font-bold">Nível:</span>
                      <span className="text-zinc-300">{slot.level}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/80">
                  <button
                    onClick={() => onScheduleSlot(slot.modality)}
                    className="w-full py-2.5 px-3 bg-asphalt-800 hover:bg-blood-600 text-zinc-300 hover:text-white font-tactical uppercase text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 transition-colors clip-tag"
                  >
                    <span>AGENDAR ESTE HORÁRIO</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
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

            {/* Video Player */}
            <div className="relative w-full rounded-none overflow-hidden bg-black border-2 border-zinc-800 shadow-spotlight-sharp aspect-video flex items-center justify-center">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/logo-urban-fight.jpg"
                className="w-full h-full object-cover bg-black"
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
