"use client";

import React, { useState } from "react";
import { SCHEDULE_DATA, ScheduleSlot } from "@/data/schedule";
import { 
  Clock, 
  Calendar, 
  Sun, 
  Sunset, 
  Moon, 
  ArrowRight
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
          label: "Manhã",
          icon: Sun,
          className: "text-amber-400 bg-amber-400/10 border-amber-400/20",
        };
      case "afternoon":
        return {
          label: "Tarde / Kids",
          icon: Sunset,
          className: "text-orange-400 bg-orange-400/10 border-orange-400/20",
        };
      case "evening":
        return {
          label: "Noite",
          icon: Moon,
          className: "text-red-400 bg-red-400/10 border-red-400/20",
        };
    }
  };

  return (
    <section id="horarios" className="py-20 bg-combat-900/40 relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Grade Flexível de Horários</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Horários para Caber na Sua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              Rotina Mais Ocupada.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg">
            Aulas das 06:30 da manhã às 22:00 da noite. Escolha o melhor turno para treinar antes do trabalho, à tarde com seus filhos ou para descarregar o estresse no final do dia.
          </p>

          {/* Shift Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setFilterShift("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filterShift === "all"
                  ? "bg-red-600 text-white shadow-combat-glow"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              Todos os Turnos
            </button>
            <button
              onClick={() => setFilterShift("morning")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
                filterShift === "morning"
                  ? "bg-red-600 text-white shadow-combat-glow"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Manhã (06:30 - 10:15)</span>
            </button>
            <button
              onClick={() => setFilterShift("afternoon")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
                filterShift === "afternoon"
                  ? "bg-red-600 text-white shadow-combat-glow"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              <Sunset className="w-3.5 h-3.5 text-orange-400" />
              <span>Tarde & Kids (15:00 - 18:30)</span>
            </button>
            <button
              onClick={() => setFilterShift("evening")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
                filterShift === "evening"
                  ? "bg-red-600 text-white shadow-combat-glow"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-red-400" />
              <span>Noite (18:30 - 22:00)</span>
            </button>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSlots.map((slot, index) => {
            const badge = getShiftBadge(slot.shift);
            const BadgeIcon = badge.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-red-500/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="flex items-center gap-1 text-red-400 font-bold text-sm bg-red-600/10 px-3 py-1 rounded-lg border border-red-500/20">
                      <Clock className="w-3.5 h-3.5" />
                      {slot.time}
                    </span>

                    <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${badge.className}`}>
                      <BadgeIcon className="w-3 h-3" />
                      {badge.label}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    {slot.modality}
                  </h3>

                  <div className="text-xs text-zinc-400 mt-2 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-zinc-500">Dias:</span>
                      <span className="text-zinc-200 font-medium">{slot.days}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-zinc-500">Nível:</span>
                      <span className="text-zinc-300">{slot.level}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-900">
                  <button
                    onClick={() => onScheduleSlot(slot.modality)}
                    className="w-full py-2 px-3 rounded-lg bg-zinc-900 hover:bg-red-600 text-zinc-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Agendar este horário</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
