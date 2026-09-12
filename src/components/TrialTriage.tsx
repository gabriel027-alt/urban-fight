"use client";

import React, { useState, useEffect } from "react";
import { 
  buildWhatsAppBookingUrl, 
  TrialBookingData
} from "@/lib/utils";
import { 
  Flame, 
  ShieldCheck, 
  Trophy, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Send,
  Sun,
  Sunset,
  Moon,
  User,
  Phone,
  Crosshair
} from "lucide-react";

interface TrialTriageProps {
  initialModality?: string;
}

export const TrialTriage: React.FC<TrialTriageProps> = ({ initialModality }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<TrialBookingData>({
    goal: "Emagrecimento, Saúde & Queima de Gordura",
    experience: "Nunca treinei (Iniciante Absoluto)",
    modality: initialModality || "Muay Thai & Kickboxing",
    shift: "Noite (18:30 às 22:00)",
    name: "",
    phone: "",
  });

  useEffect(() => {
    if (initialModality) {
      setFormData((prev) => ({ ...prev, modality: initialModality }));
    }
  }, [initialModality]);

  const goalsList = [
    {
      id: "emagrecimento",
      title: "Emagrecimento & Queima Extrema",
      desc: "Secar gordura rápida, definir músculos e estraçalhar o estresse",
      icon: Flame,
    },
    {
      id: "defesa",
      title: "Defesa Pessoal & Combate Urbano",
      desc: "Autoproteção sem firulas para sobrevivência e segurança real",
      icon: ShieldCheck,
    },
    {
      id: "competicao",
      title: "Alto Desempenho & Graduação",
      desc: "Técnica apurada de combate, força explosiva e evolução de faixas",
      icon: Trophy,
    },
    {
      id: "kids",
      title: "Turmas Kids (Filho/Adolescente)",
      desc: "Disciplina marcial, respeito aos pais, postura e anti-bullying",
      icon: Sparkles,
    },
  ];

  const experienceLevels = [
    {
      title: "Iniciante Absoluto (Zero Luta)",
      desc: "Nunca calcei luvas nem entrei num tatame. Quero método paciente e seguro.",
    },
    {
      title: "Praticante em Retorno (Ex-atleta/Academia)",
      desc: "Já treinei modalidades ou musculação e quero resgatar ritmo e condicionamento.",
    },
    {
      title: "Graduado / Atleta Experiente",
      desc: "Busco tatame de alto nível e sparrings técnicos para evolução contínua.",
    },
  ];

  const modalityOptions = [
    "Muay Thai & Kickboxing",
    "Boxe Tradicional (Nobre Arte)",
    "Jiu-Jitsu Brasileiro (BJJ)",
    "Jeet Kune Do & Defesa Urbana",
    "Taekwondo & Kids (4 a 14 anos)",
    "Indicação do Mestre André",
  ];

  const shiftsList = [
    { id: "morning", label: "MANHÃ", time: "06:30 às 10:15", icon: Sun },
    { id: "afternoon", label: "TARDE", time: "15:00 às 18:30 (Kids)", icon: Sunset },
    { id: "evening", label: "NOITE", time: "18:30 às 22:00", icon: Moon },
  ];

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppBookingUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="triagem-experimental" className="py-20 sm:py-28 bg-[#050505] relative border-t border-b border-zinc-900">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blood-700/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-asphalt-900 border border-blood-600/40 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest clip-tag">
            <Crosshair className="w-3.5 h-3.5 text-blood-500" />
            <span>TRIAGEM TÁTICA DE ADMISSÃO</span>
          </div>

          <h2 className="font-combat text-5xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9]">
            AGENDE SUA AULA EXPERIMENTAL GRATUITA
          </h2>

          <p className="font-sans text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            3 passos rápidos. Nossa recepção e o Mestre André recebem suas preferências formatadas direto no WhatsApp para reservar seu espaço.
          </p>
        </div>

        {/* Funnel Box */}
        <div className="bg-asphalt-900/95 border border-zinc-800 clip-chamfer-top p-6 sm:p-10 shadow-combat-plate backdrop-blur-xl">
          {/* Step Progress Bar */}
          <div className="mb-8 pb-4 border-b border-zinc-800">
            <div className="flex items-center justify-between font-tactical text-xs uppercase tracking-wider text-zinc-400 mb-2">
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="w-5 h-5 bg-blood-600 text-white flex items-center justify-center text-[10px] clip-tag">
                  {currentStep}
                </span>
                ETAPA {currentStep} DE 3
              </span>
              <span className="text-hazard-400 font-bold">
                {currentStep === 1 && "1. OBJETIVO PRIORITÁRIO"}
                {currentStep === 2 && "2. GRAU DE CONTATO MARCIAL"}
                {currentStep === 3 && "3. MODALIDADE & HORÁRIO"}
              </span>
            </div>

            <div className="w-full bg-zinc-800 h-1.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blood-700 via-blood-500 to-hazard-400 h-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Goal */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="font-combat text-2xl sm:text-3xl uppercase tracking-wide text-white">
                Qual é a sua principal meta ao entrar no tatame?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goalsList.map((item) => {
                  const Icon = item.icon;
                  const isSelected = formData.goal.includes(item.title);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, goal: item.title })}
                      className={`p-4 text-left border clip-chamfer-top transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? "bg-blood-900/30 border-blood-500 shadow-spotlight-sharp ring-1 ring-blood-500"
                          : "bg-asphalt-850 border-zinc-800 hover:border-zinc-700"
                      }`}
                    >
                      <div className={`p-2.5 shrink-0 clip-tag ${
                        isSelected ? "bg-blood-600 text-white" : "bg-zinc-800 text-zinc-400"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-combat text-xl text-white uppercase tracking-wide">{item.title}</div>
                        <div className="text-xs text-zinc-400 font-sans mt-0.5">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3.5 bg-blood-600 hover:bg-blood-500 text-white font-combat uppercase tracking-wider text-xl font-black clip-chamfer-top flex items-center gap-2 transition-all shadow-spotlight-sharp"
                >
                  <span>AVANÇAR PARA ETAPA 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Experience */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="font-combat text-2xl sm:text-3xl uppercase tracking-wide text-white">
                Qual o seu nível de experiência com lutas?
              </h3>
              <div className="space-y-3">
                {experienceLevels.map((exp, idx) => {
                  const isSelected = formData.experience === exp.title;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData({ ...formData, experience: exp.title })}
                      className={`w-full p-4 text-left border clip-tag transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? "bg-blood-900/30 border-blood-500 shadow-spotlight-sharp ring-1 ring-blood-500"
                          : "bg-asphalt-850 border-zinc-800 hover:border-zinc-700"
                      }`}
                    >
                      <div className={`w-5 h-5 border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected ? "border-blood-500 bg-blood-600 text-white" : "border-zinc-600"
                      }`}>
                        {isSelected && <div className="w-2 h-2 bg-white" />}
                      </div>
                      <div>
                        <div className="font-combat text-xl text-white uppercase tracking-wide">{exp.title}</div>
                        <div className="text-xs text-zinc-400 font-sans mt-0.5">{exp.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-5 py-2.5 bg-asphalt-800 hover:bg-asphalt-750 text-zinc-300 font-tactical uppercase text-xs font-bold tracking-wider clip-tag flex items-center gap-2 border border-zinc-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>VOLTAR</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3.5 bg-blood-600 hover:bg-blood-500 text-white font-combat uppercase tracking-wider text-xl font-black clip-chamfer-top flex items-center gap-2 transition-all shadow-spotlight-sharp"
                >
                  <span>AVANÇAR PARA ETAPA 3</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Modality, Shift & WhatsApp Output */}
          {currentStep === 3 && (
            <form onSubmit={handleSubmitWhatsApp} className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="font-combat text-2xl sm:text-3xl uppercase tracking-wide text-white mb-1">
                  Modalidade, Turno & Confirmação Direta
                </h3>
                <p className="font-tactical text-xs text-zinc-400 uppercase tracking-wide">
                  Dados empacotados para recepção e confirmação imediata via WhatsApp.
                </p>
              </div>

              {/* Modality Dropdown */}
              <div>
                <label className="block font-tactical text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">
                  MODALIDADE DE INTERESSE:
                </label>
                <select
                  value={formData.modality}
                  onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                  className="w-full bg-black border border-zinc-700 clip-tag px-4 py-3 text-white font-tactical text-sm focus:outline-none focus:border-blood-500 transition-colors"
                >
                  {modalityOptions.map((opt, i) => (
                    <option key={i} value={opt} className="bg-asphalt-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Shift Selector */}
              <div>
                <label className="block font-tactical text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">
                  TURNO DE TREINO PREFERIDO:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {shiftsList.map((shift) => {
                    const ShiftIcon = shift.icon;
                    const isSelected = formData.shift.includes(shift.label);
                    return (
                      <button
                        key={shift.id}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            shift: `${shift.label} (${shift.time})`,
                          })
                        }
                        className={`p-3.5 border clip-tag text-left transition-all ${
                          isSelected
                            ? "bg-blood-900/30 border-blood-500 text-white ring-1 ring-blood-500"
                            : "bg-asphalt-850 border-zinc-800 text-zinc-400 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <ShiftIcon className="w-4 h-4 text-blood-500" />
                          <span className="font-combat text-lg uppercase tracking-wide text-white">{shift.label}</span>
                        </div>
                        <span className="font-tactical text-[10px] text-zinc-400 block">{shift.time}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Identification fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block font-tactical text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-blood-500" />
                    SEU NOME COMPLETO:
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Carlos Andrade"
                    value={formData.name || ""}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black border border-zinc-700 clip-tag px-4 py-2.5 text-white font-tactical text-sm placeholder:text-zinc-600 focus:outline-none focus:border-blood-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-tactical text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-blood-500" />
                    WHATSAPP PARA CONTATO:
                  </label>
                  <input
                    type="tel"
                    placeholder="(38) 99999-9999"
                    value={formData.phone || ""}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black border border-zinc-700 clip-tag px-4 py-2.5 text-white font-tactical text-sm placeholder:text-zinc-600 focus:outline-none focus:border-blood-500 transition-colors"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-5 py-2.5 bg-asphalt-800 hover:bg-asphalt-750 text-zinc-300 font-tactical uppercase text-xs font-bold tracking-wider clip-tag flex items-center gap-2 border border-zinc-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>VOLTAR</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 sm:flex-initial px-8 py-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-combat uppercase tracking-wider text-xl sm:text-2xl font-black clip-chamfer-top flex items-center justify-center gap-3 shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all border border-emerald-400/40"
                >
                  <Send className="w-5 h-5" />
                  <span>CONFIRMAR NO WHATSAPP DO MESTRE</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
