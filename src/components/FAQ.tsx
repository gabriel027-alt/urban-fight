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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section id="duvidas" className="py-20 sm:py-28 bg-[#030303] relative border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-asphalt-900 border border-blood-600/40 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest clip-tag">
            <HelpCircle className="w-3.5 h-3.5 text-blood-500" />
            <span>QUEBRA DE OBJEÇÕES & DÚVIDAS</span>
          </div>

          <h2 className="font-combat text-5xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9]">
            PERGUNTAS FREQUENTES DE <br />
            <span className="text-blood-600">
              NOVOS ATLETAS.
            </span>
          </h2>

          <p className="font-sans text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Sentir apreensão antes de pisar no tatame é normal. Veja como nossa metodologia garante acolhimento, respeito e proteção à sua integridade física.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border transition-all duration-200 clip-chamfer-top ${
                  isOpen
                    ? "bg-black border-blood-600 shadow-spotlight-sharp"
                    : "bg-asphalt-900/90 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-combat text-xl sm:text-2xl uppercase tracking-wide text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 flex items-center justify-center shrink-0 clip-tag transition-transform duration-200 ${
                      isOpen
                        ? "bg-blood-600 text-white rotate-180"
                        : "bg-asphalt-800 text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-zinc-300 font-sans leading-relaxed border-t border-zinc-900 animate-in fade-in duration-150">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Objection Breaker Footer CTA */}
        <div className="mt-12 p-6 sm:p-8 bg-asphalt-900 border border-zinc-800 clip-chamfer-top text-center space-y-4 shadow-combat-plate">
          <h3 className="font-combat text-3xl sm:text-4xl uppercase text-white tracking-wide leading-none">
            AINDA TEM DÚVIDAS SOBRE O SEU PRIMEIRO TREINO?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
            Fale diretamente com o Mestre André e equipe da recepção na Av. Cula Mangabeira, 1497.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onStartTriage}
              className="px-7 py-3.5 bg-blood-600 hover:bg-blood-500 text-white font-combat uppercase tracking-wider text-xl font-black clip-chamfer-top flex items-center gap-2 shadow-spotlight-sharp transition-all"
            >
              <span>AGENDAR MINHA AULA EXPERIMENTAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                "Olá! Tenho uma dúvida sobre os planos e treinos da Urban Fight."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-asphalt-800 hover:bg-asphalt-750 text-zinc-200 font-tactical uppercase text-xs font-bold tracking-wider clip-tag flex items-center gap-2 border border-zinc-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>CHAMAR NO WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
