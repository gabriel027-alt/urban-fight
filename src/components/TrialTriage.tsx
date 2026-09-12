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
  CheckCircle2, 
  Send,
  Sun,
  Sunset,
  Moon,
  User,
  Phone
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

  // Keep modality synchronized when passed from cards
  useEffect(() => {
    if (initialModality) {
      setFormData((prev) => ({ ...prev, modality: initialModality }));
    }
  }, [initialModality]);

  const goalsList = [
    {
      id: "emagrecimento",
      title: "Emagrecimento & Condicionamento",
      desc: "Secar gordura, tonificar músculos e eliminar o estresse",
      icon: Flame,
    },
    {
      id: "defesa",
      title: "Defesa Pessoal & Segurança",
      desc: "Autoproteção real para o dia a dia e autoconfiança",
      icon: ShieldCheck,
    },
    {
      id: "competicao",
      title: "Competição & Alta Performance",
      desc: "Aprimorar técnica, força e evolução gradual de graduação",
      icon: Trophy,
    },
    {
      id: "kids",
      title: "Turma para Filho(a) / Kids",
      desc: "Disciplina, respeito, coordenação e combate ao bullying",
      icon: Sparkles,
    },
  ];

  const experienceLevels = [
    {
      title: "Nunca treinei (Iniciante Absoluto)",
      desc: "Quero começar do zero com acompanhamento paciente e sem medo de me machucar.",
    },
    {
      title: "Já pratiquei antes (Retornando)",
      desc: "Já fiz artes marciais ou academia e quero voltar com ritmo e disciplina.",
    },
    {
      title: "Praticante Experiente / Graduado",
      desc: "Busco tatame de alto nível técnico e sparrings com atletas experientes.",
    },
  ];

  const modalityOptions = [
    "Muay Thai & Kickboxing",
    "Boxe Tradicional (Nobre Arte)",
    "Jiu-Jitsu Brasileiro (BJJ)",
    "Jeet Kune Do & Defesa Pessoal",
    "Taekwondo & Kids (4 a 14 anos)",
    "Quero indicação do Mestre André",
  ];

  const shiftsList = [
    {
      id: "morning",
      label: "Manhã",
      time: "06:30 às 10:15",
      icon: Sun,
    },
    {
      id: "afternoon",
      label: "Tarde",
      time: "15:00 às 18:30 (Inclui Kids)",
      icon: Sunset,
    },
    {
      id: "evening",
      label: "Noite",
      time: "18:30 às 22:00",
      icon: Moon,
    },
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppBookingUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="triagem-experimental" className="py-20 bg-combat-900/60 relative border-t border-b border-zinc-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Funil de Agendamento Rápido</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Agende sua Aula Experimental Gratuita
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Leva menos de 1 minuto. Responda 3 perguntas simples e envie diretamente para o WhatsApp do Mestre André e recepção da Urban Fight.
          </p>
        </div>

        {/* Funnel Card */}
        <div className="rounded-2xl bg-zinc-950/95 border border-zinc-800 shadow-2xl p-6 sm:p-10 relative backdrop-blur-xl">
          {/* Step Indicator Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              <span className="flex items-center gap-1.5 text-white">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[11px]">
                  {currentStep}
                </span>
                Passo {currentStep} de 3
              </span>
              <span>
                {currentStep === 1 && "Objetivo Principal"}
                {currentStep === 2 && "Nível de Prática"}
                {currentStep === 3 && "Modalidade, Turno & Confirmação"}
              </span>
            </div>

            {/* Progress bar line */}
            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-red-600 to-red-400 h-full transition-all duration-300 rounded-full"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Goal */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-lg sm:text-xl font-black text-white">
                1. Qual é o seu objetivo prioritário ao treinar?
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
                      className={`p-4 rounded-xl text-left border transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? "bg-red-600/10 border-red-500 shadow-combat-glow ring-1 ring-red-500"
                          : "bg-zinc-900/80 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"
                      }`}
                    >
                      <div className={`p-2.5 rounded-lg shrink-0 ${
                        isSelected ? "bg-red-600 text-white" : "bg-zinc-800 text-zinc-400"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">{item.title}</div>
                        <div className="text-xs text-zinc-400 mt-0.5">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-combat-glow"
                >
                  <span>Próximo Passo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Experience Level */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-lg sm:text-xl font-black text-white">
                2. Qual o seu grau de contato com artes marciais?
              </h3>
              <div className="space-y-3">
                {experienceLevels.map((exp, idx) => {
                  const isSelected = formData.experience === exp.title;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData({ ...formData, experience: exp.title })}
                      className={`w-full p-4 rounded-xl text-left border transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? "bg-red-600/10 border-red-500 shadow-combat-glow ring-1 ring-red-500"
                          : "bg-zinc-900/80 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected ? "border-red-500 bg-red-500 text-white" : "border-zinc-600"
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">{exp.title}</div>
                        <div className="text-xs text-zinc-400 mt-0.5">{exp.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-sm flex items-center gap-2 border border-zinc-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-combat-glow"
                >
                  <span>Próximo Passo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Modality, Shift & Output to WhatsApp */}
          {currentStep === 3 && (
            <form onSubmit={handleSubmitWhatsApp} className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                  3. Modalidade, Turno de Preferência & Dados de Contato
                </h3>
                <p className="text-xs text-zinc-400">
                  Ao clicar em enviar, geramos a mensagem completa e você fala direto com o WhatsApp do Mestre André.
                </p>
              </div>

              {/* Modality Selector */}
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">
                  Modalidade Desejada:
                </label>
                <select
                  value={formData.modality}
                  onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                >
                  {modalityOptions.map((opt, i) => (
                    <option key={i} value={opt} className="bg-zinc-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Shift Selector */}
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">
                  Turno que você prefere treinar:
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
                        className={`p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? "bg-red-600/10 border-red-500 text-white ring-1 ring-red-500"
                            : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <ShiftIcon className="w-4 h-4 text-red-500" />
                          <span className="font-bold text-sm text-white">{shift.label}</span>
                        </div>
                        <span className="text-[11px] text-zinc-400 block">{shift.time}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Name and Phone fields for instant personalization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-red-500" />
                    Seu Nome (Opcional):
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Carlos Silva"
                    value={formData.name || ""}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-red-500" />
                    WhatsApp para Confirmação:
                  </label>
                  <input
                    type="tel"
                    placeholder="(38) 99999-9999"
                    value={formData.phone || ""}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              {/* Preview Box */}
              <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-400 space-y-1">
                <span className="font-bold text-zinc-300 block">Resumo do Agendamento:</span>
                <div>🎯 Objetivo: <span className="text-zinc-200">{formData.goal}</span></div>
                <div>⚡ Nível: <span className="text-zinc-200">{formData.experience}</span></div>
                <div>🥊 Modalidade: <span className="text-red-400 font-semibold">{formData.modality}</span></div>
                <div>⏰ Turno: <span className="text-zinc-200">{formData.shift}</span></div>
              </div>

              {/* Buttons */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-sm flex items-center gap-2 border border-zinc-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 sm:flex-initial px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all border border-emerald-400/30"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmar & Abrir no WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
