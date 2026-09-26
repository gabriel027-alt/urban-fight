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
  Crosshair,
  Loader2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

interface TrialTriageProps {
  initialModality?: string;
}

export const TrialTriage: React.FC<TrialTriageProps> = ({ initialModality }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<TrialBookingData>({
    goal: "Emagrecimento & Queima Extrema",
    experience: "Iniciante Absoluto (Zero Luta)",
    modality: initialModality || "Muay Thai & Kickboxing",
    shift: "Noite (18:30 às 22:00)",
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (initialModality) {
      setFormData((prev) => ({ ...prev, modality: initialModality }));
    }
  }, [initialModality]);

  const goalsList = [
    {
      id: "emagrecimento",
      title: "Emagrecimento & Queima Extrema",
      desc: "Secar gordura rápida, definir músculos e estraçalhar o estresse diário",
      icon: Flame,
    },
    {
      id: "defesa",
      title: "Defesa Pessoal & Combate Urbano",
      desc: "Autoproteção sem firulas para sobrevivência, postura e segurança real",
      icon: ShieldCheck,
    },
    {
      id: "competicao",
      title: "Alto Desempenho & Graduação",
      desc: "Técnica apurada de combate, força explosiva e evolução séria de faixas",
      icon: Trophy,
    },
    {
      id: "kids",
      title: "Turmas Kids (Filho/Adolescente)",
      desc: "Disciplina marcial, respeito aos pais, postura, foco e anti-bullying",
      icon: Sparkles,
    },
  ];

  const modalitiesList = [
    { name: "Muay Thai & Kickboxing", tag: "Queima Calórica & Striking" },
    { name: "Boxe Tradicional (Nobre Arte)", tag: "Punhos, Esquivas & Ritmo" },
    { name: "Jiu-Jitsu Brasileiro (BJJ)", tag: "Arte Suave, Quedas & Finalizações" },
    { name: "Krav Maga (Defesa Pessoal)", tag: "Sobrevivência & Resposta Rápida" },
    { name: "Jeet Kune Do & Defesa Urbana", tag: "Conceito Bruce Lee & Reatividade" },
    { name: "Taekwondo & Kids (4 a 14 anos)", tag: "Disciplina, Respeito & Agilidade" },
    { name: "Indicação do Mestre André", tag: "Avaliação no Primeiro Treino" },
  ];

  const shiftsList = [
    { id: "morning", label: "MANHÃ", time: "06:30 às 10:15", icon: Sun },
    { id: "afternoon", label: "TARDE", time: "15:00 às 18:30 (Kids)", icon: Sunset },
    { id: "evening", label: "NOITE", time: "18:30 às 22:00", icon: Moon },
  ];

  const validateStep3 = (): boolean => {
    const newErrors: { name?: string; phone?: string } = {};
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();

    if (!trimmedName || trimmedName.length < 3) {
      newErrors.name = "Informe o nome completo do aluno (mínimo 3 caracteres).";
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, "");
    if (!trimmedPhone || digitsOnly.length < 8) {
      newErrors.phone = "Informe um número de WhatsApp de contato válido com DDD.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    if (!validateStep3()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const url = buildWhatsAppBookingUrl(formData);
      window.open(url, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <section 
      id="triagem-experimental" 
      className="scroll-mt-20 md:scroll-mt-24 py-20 sm:py-28 bg-[#030303] relative overflow-hidden w-full max-w-[100vw] border-t border-b border-zinc-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-asphalt-900 border border-blood-600/40 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest">
            <Crosshair className="w-3.5 h-3.5 text-blood-500" />
            <span>TRIAGEM TÁTICA DE ADMISSÃO</span>
          </div>

          <h2 className="font-combat text-5xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9]">
            AGENDE SUA AULA EXPERIMENTAL GRATUITA
          </h2>

          <p className="font-sans text-zinc-300 text-sm sm:text-base max-w-xl mx-auto">
            3 passos rápidos. Nossa recepção e o Mestre André recebem seus dados formatados direto no WhatsApp para reservar seu espaço no tatame.
          </p>
        </div>

        {/* Funnel Box */}
        <div className="bg-[#09090b] border border-zinc-800 rounded-none p-6 sm:p-10 shadow-combat-plate">
          {/* Step Progress Bar */}
          <div className="mb-8 pb-4 border-b border-zinc-800">
            <div className="flex items-center justify-between font-tactical text-xs uppercase tracking-wider text-zinc-400 mb-2">
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="w-5 h-5 bg-blood-600 text-white flex items-center justify-center text-[10px] rounded-none">
                  {currentStep}
                </span>
                ETAPA {currentStep} DE 3
              </span>
              <span className="text-blood-400 font-bold">
                {currentStep === 1 && "1. OBJETIVO PRIORITÁRIO"}
                {currentStep === 2 && "2. MODALIDADE & TURNO"}
                {currentStep === 3 && "3. IDENTIFICAÇÃO DO ALUNO"}
              </span>
            </div>

            <div className="w-full bg-zinc-800 h-1.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blood-700 to-blood-500 h-full transition-all duration-300"
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
                      className={`p-4 text-left border rounded-none transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? "bg-blood-900/30 border-blood-500 shadow-spotlight-sharp ring-1 ring-blood-500"
                          : "bg-asphalt-850 border-zinc-800 hover:border-zinc-700"
                      }`}
                    >
                      <div className={`p-2.5 shrink-0 rounded-none ${
                        isSelected ? "bg-blood-600 text-white" : "bg-zinc-800 text-zinc-400"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-combat text-xl text-white uppercase tracking-wide">{item.title}</div>
                        <div className="text-xs text-zinc-300 font-sans mt-0.5">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3.5 bg-blood-600 hover:bg-blood-500 text-white font-combat uppercase tracking-wider text-xl font-black rounded-none flex items-center gap-2 transition-all shadow-spotlight-sharp"
                >
                  <span>AVANÇAR PARA ETAPA 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Modality & Shift */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="font-combat text-2xl sm:text-3xl uppercase tracking-wide text-white mb-1">
                  Qual modalidade e horário você prefere?
                </h3>
                <p className="font-tactical text-xs text-zinc-400 uppercase tracking-wide">
                  Escolha o programa que mais combina com seu estilo. Se tiver dúvidas, selecione a indicação do Mestre.
                </p>
              </div>

              {/* Modality Options Grid */}
              <div className="space-y-2">
                <label className="block font-tactical text-xs uppercase tracking-wider text-zinc-300 font-bold">
                  SELECIONE A MODALIDADE:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {modalitiesList.map((mod, idx) => {
                    const isSelected = formData.modality === mod.name;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData({ ...formData, modality: mod.name })}
                        className={`p-3.5 text-left border rounded-none transition-all flex items-start justify-between gap-2 ${
                          isSelected
                            ? "bg-blood-900/30 border-blood-500 text-white ring-1 ring-blood-500"
                            : "bg-asphalt-850 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700"
                        }`}
                      >
                        <div>
                          <div className="font-combat text-lg uppercase tracking-wide text-white">{mod.name}</div>
                          <div className="text-[11px] text-zinc-400 font-tactical">{mod.tag}</div>
                        </div>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-blood-600 flex items-center justify-center shrink-0 mt-1">
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Shift Selector */}
              <div className="pt-2">
                <label className="block font-tactical text-xs uppercase tracking-wider text-zinc-300 font-bold mb-2">
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
                        className={`p-3.5 border rounded-none text-left transition-all ${
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

              <div className="pt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-5 py-2.5 bg-asphalt-800 hover:bg-asphalt-750 text-zinc-300 font-tactical uppercase text-xs font-bold tracking-wider rounded-none flex items-center gap-2 border border-zinc-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>VOLTAR</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3.5 bg-blood-600 hover:bg-blood-500 text-white font-combat uppercase tracking-wider text-xl font-black rounded-none flex items-center gap-2 transition-all shadow-spotlight-sharp"
                >
                  <span>AVANÇAR PARA ETAPA 3</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Required Name & Phone Anti-Spam Capture */}
          {currentStep === 3 && (
            <form onSubmit={handleSubmitWhatsApp} className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="font-combat text-2xl sm:text-3xl uppercase tracking-wide text-white mb-1">
                  Confirmação & Contato do Aluno
                </h3>
                <p className="font-tactical text-xs text-zinc-400 uppercase tracking-wide">
                  Preencha seus dados para receber o agendamento oficial da recepção da Urban Fight no WhatsApp.
                </p>
              </div>

              {/* Selected Summary Card */}
              <div className="p-4 bg-black border border-zinc-800 rounded-none space-y-2">
                <span className="font-tactical text-[10px] uppercase tracking-wider text-blood-500 font-bold block">
                  RESUMO DA SUA ESCOLHA:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-tactical text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blood-500 shrink-0" />
                    <span><strong>Objetivo:</strong> {formData.goal}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blood-500 shrink-0" />
                    <span><strong>Modalidade:</strong> {formData.modality}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blood-500 shrink-0" />
                    <span><strong>Turno:</strong> {formData.shift}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blood-500 shrink-0" />
                    <span><strong>Sede:</strong> Santo Expedito, Montes Claros</span>
                  </div>
                </div>
              </div>

              {/* Identification fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block font-tactical text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-blood-500" />
                    <span>SEU NOME COMPLETO: <span className="text-blood-500">*</span></span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Carlos Silva"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full bg-black border rounded-none px-4 py-3 text-white font-tactical text-sm placeholder:text-zinc-600 focus:outline-none transition-colors ${
                      errors.name ? "border-blood-500 ring-1 ring-blood-500" : "border-zinc-700 focus:border-blood-500"
                    }`}
                  />
                  {errors.name && (
                    <p className="flex items-center gap-1 text-blood-400 text-xs mt-1.5 font-tactical">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-tactical text-xs uppercase tracking-wider text-zinc-300 font-bold mb-1.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-blood-500" />
                    <span>WHATSAPP PARA CONTATO: <span className="text-blood-500">*</span></span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(38) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full bg-black border rounded-none px-4 py-3 text-white font-tactical text-sm placeholder:text-zinc-600 focus:outline-none transition-colors ${
                      errors.phone ? "border-blood-500 ring-1 ring-blood-500" : "border-zinc-700 focus:border-blood-500"
                    }`}
                  />
                  {errors.phone && (
                    <p className="flex items-center gap-1 text-blood-400 text-xs mt-1.5 font-tactical">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handlePrev}
                  className="px-5 py-3 bg-asphalt-800 hover:bg-asphalt-750 text-zinc-300 font-tactical uppercase text-xs font-bold tracking-wider rounded-none flex items-center justify-center gap-2 border border-zinc-700 transition-colors disabled:opacity-50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>VOLTAR</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-combat uppercase tracking-wider text-xl sm:text-2xl font-black rounded-none flex items-center justify-center gap-3 shadow-lg shadow-emerald-950/40 hover:scale-[1.01] active:scale-[0.99] transition-all border border-emerald-400/40 disabled:opacity-80 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin motion-reduce:animate-none" />
                      <span>Conectando com a recepção...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>CONFIRMAR NO WHATSAPP DO MESTRE</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

