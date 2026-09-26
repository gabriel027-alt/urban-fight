"use client";

import React, { useState, useEffect } from "react";
import { 
  buildWhatsAppBookingUrl, 
  TrialBookingData 
} from "@/lib/utils";
import { 
  Send,
  Sun,
  Sunset,
  Moon,
  User,
  Phone,
  Crosshair,
  Loader2,
  CheckCircle2,
  AlertCircle,
  CalendarCheck
} from "lucide-react";

interface TrialTriageProps {
  initialModality?: string;
}

export const TrialTriage: React.FC<TrialTriageProps> = ({ initialModality }) => {
  const [formData, setFormData] = useState<TrialBookingData>({
    goal: "Aula Experimental",
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

  const modalitiesList = [
    { name: "Muay Thai & Kickboxing", tag: "Queima Calórica & Striking" },
    { name: "Boxe Tradicional (Nobre Arte)", tag: "Punhos, Esquivas & Ritmo" },
    { name: "Jiu-Jitsu Brasileiro (BJJ)", tag: "Arte Suave, Quedas & Chão" },
    { name: "Krav Maga (Defesa Pessoal)", tag: "Sobrevivência & Resposta Rápida" },
    { name: "Jeet Kune Do & Defesa Urbana", tag: "Conceito Bruce Lee & Agilidade" },
    { name: "Taekwondo & Kids (4 a 14 anos)", tag: "Disciplina, Respeito & Foco" },
    { name: "Indicação do Mestre André", tag: "Avaliação no Primeiro Treino" },
  ];

  const shiftsList = [
    { label: "MANHÃ", time: "06:30 às 10:15", icon: Sun },
    { label: "TARDE", time: "15:00 às 18:30", icon: Sunset },
    { label: "NOITE", time: "18:30 às 22:00", icon: Moon },
  ];

  const validate = (): boolean => {
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

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
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
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-asphalt-900 border border-blood-600/40 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest rounded-xl">
            <Crosshair className="w-3.5 h-3.5 text-blood-500" />
            <span>AGENDAMENTO RÁPIDO • ZERO FRICÇÃO</span>
          </div>

          <h2 className="font-combat text-4xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9]">
            AGENDE SUA AULA EXPERIMENTAL GRATUITA
          </h2>

          <p className="font-sans text-zinc-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Selecione a modalidade, o turno de preferência e confirme em segundos diretamente no WhatsApp do Mestre André.
          </p>
        </div>

        {/* Streamlined High-Converting Funnel Box (Zero Friction - Hick's Law) */}
        <div className="bg-[#09090b] border border-zinc-800 rounded-xl p-6 sm:p-10 shadow-combat-plate">
          <form onSubmit={handleSubmitWhatsApp} className="space-y-7">
            
            {/* 1. Modality Quick-Select */}
            <div className="space-y-3">
              <label className="block font-tactical text-xs uppercase tracking-wider text-zinc-200 font-bold">
                1. QUAL MODALIDADE VOCÊ QUER EXPERIMENTAR?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {modalitiesList.map((mod, idx) => {
                  const isSelected = formData.modality === mod.name;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData({ ...formData, modality: mod.name })}
                      className={`min-h-[48px] p-3 text-left border rounded-xl transition-all flex items-start justify-between gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] cursor-pointer ${
                        isSelected
                          ? "bg-blood-900/35 border-blood-500 text-white ring-1 ring-blood-500 shadow-spotlight-sharp"
                          : "bg-asphalt-850 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <div>
                        <div className="font-combat text-base sm:text-lg uppercase tracking-wide text-white leading-tight">
                          {mod.name}
                        </div>
                        <div className="text-[11px] text-zinc-300 font-tactical mt-0.5">
                          {mod.tag}
                        </div>
                      </div>
                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-blood-600 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Shift Quick Select (Turno de Treino) */}
            <div className="space-y-3">
              <label className="block font-tactical text-xs uppercase tracking-wider text-zinc-200 font-bold flex items-center gap-1.5">
                <CalendarCheck className="w-4 h-4 text-blood-500" />
                <span>2. TURNO DE TREINO PREFERIDO:</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {shiftsList.map((shift, idx) => {
                  const ShiftIcon = shift.icon;
                  const isSelected = formData.shift.includes(shift.label);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          shift: `${shift.label} (${shift.time})`,
                        })
                      }
                      className={`min-h-[48px] p-3 border rounded-xl text-left transition-all flex items-center justify-between gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] cursor-pointer ${
                        isSelected
                          ? "bg-blood-900/35 border-blood-500 text-white ring-1 ring-blood-500"
                          : "bg-asphalt-850 border-zinc-800 text-zinc-300 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <ShiftIcon className={`w-4 h-4 ${isSelected ? "text-blood-400" : "text-zinc-300"}`} />
                        <span className="font-combat text-base uppercase tracking-wide text-white">
                          {shift.label}
                        </span>
                      </div>
                      <span className="font-tactical text-[11px] text-zinc-300">
                        {shift.time}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Direct Contact Identification (Lead Capture) */}
            <div className="space-y-3 pt-3 border-t border-zinc-800">
              <label className="block font-tactical text-xs uppercase tracking-wider text-zinc-200 font-bold">
                3. SEUS DADOS PARA RESERVA DE TATAME:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-tactical text-[11px] uppercase tracking-wider text-zinc-300 font-semibold mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-blood-500" />
                    <span>Nome Completo do Aluno: <span className="text-blood-500">*</span></span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Carlos Silva"
                    value={formData.name}
                    autoComplete="name"
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full min-h-[48px] bg-black border rounded-xl px-4 py-3 text-white font-tactical text-sm placeholder:text-zinc-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] transition-colors ${
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
                  <label className="block font-tactical text-[11px] uppercase tracking-wider text-zinc-300 font-semibold mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-blood-500" />
                    <span>WhatsApp com DDD: <span className="text-blood-500">*</span></span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(38) 99999-9999"
                    value={formData.phone}
                    autoComplete="tel"
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full min-h-[48px] bg-black border rounded-xl px-4 py-3 text-white font-tactical text-sm placeholder:text-zinc-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] transition-colors ${
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
            </div>

            {/* High-Impact WhatsApp Conversion CTA */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] py-4 sm:py-5 px-6 bg-gradient-to-r from-blood-700 via-blood-600 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-combat uppercase tracking-wider text-xl sm:text-2xl font-black rounded-xl flex items-center justify-center gap-3 shadow-spotlight-sharp transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] border border-blood-400/50 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] disabled:opacity-80"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin motion-reduce:animate-none" />
                    <span>Conectando com o Mestre André...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>CONFIRMAR NO WHATSAPP DO MESTRE ANDRÉ</span>
                  </>
                )}
              </button>

              {/* Guarantees & Reassurance Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-tactical text-zinc-300 uppercase tracking-wider pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blood-500" />
                  1ª Aula 100% Cortesia
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blood-500" />
                  Tatame Livre de Ego
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blood-500" />
                  Resposta Imediata via WhatsApp
                </span>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};
