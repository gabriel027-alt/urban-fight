"use client";

import React, { useState } from "react";
import { FAQS_DATA } from "@/data/faqs";
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle, 
  ArrowRight
} from "lucide-react";
import { URBAN_FIGHT_CONFIG } from "@/lib/utils";

interface FAQProps {
  onStartTriage: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onStartTriage }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section id="duvidas" className="py-20 bg-combat-900/50 relative border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Todas as Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Perguntas Frequentes de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              Novos Alunos.
            </span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            É normal sentir insegurança antes do primeiro treino. Veja como garantimos acolhimento e respeito desde o minuto em que você pisa na academia.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-zinc-950 border-red-500/60 shadow-lg shadow-red-950/20"
                    : "bg-zinc-900/80 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-red-600 text-white rotate-180"
                        : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-zinc-900 animate-in fade-in duration-150">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Objection Breaker Footer CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-black text-white">
            Ainda tem alguma dúvida específica?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
            Fale diretamente com nossa recepção ou venha tomar um café conosco na Av. Cula Mangabeira, 1497.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onStartTriage}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-combat-glow transition-all"
            >
              <span>Agendar Minha Aula Experimental</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                "Olá! Tenho uma dúvida sobre os planos e treinos da Urban Fight."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs sm:text-sm flex items-center gap-2 border border-zinc-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
