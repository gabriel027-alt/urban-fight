"use client";

import React from "react";
import { URBAN_FIGHT_CONFIG } from "@/lib/utils";
import { 
  ShieldCheck, 
  ShoppingBag, 
  ArrowRight, 
  Check, 
  Flame, 
  Swords, 
  Sparkles,
  Award
} from "lucide-react";

export const EquipmentSection: React.FC = () => {
  const equipmentCategories = [
    {
      title: "Luvas de Boxe & Muay Thai",
      subtitle: "Proteção de Punho & Absorção de Impacto",
      desc: "Espuma de alta densidade para absorção de impacto, costuras reforçadas e trava de polegar. Essenciais para treinos de saco de pancada, manoplas e sparring.",
      badge: "STRIKING & IMPACTO",
      icon: Flame,
      specs: ["Ajuste firme no punho", "Velcro reforçado", "Durabilidade para treino diário"],
    },
    {
      title: "Bandagens & Protetor Bucal",
      subtitle: "Kit de Segurança Essencial",
      desc: "Bandagens em algodão firme para proteção do punho e das mãos em cada soco, acompanhadas de protetor bucal moldável.",
      badge: "PROTEÇÃO OBRIGATÓRIA",
      icon: ShieldCheck,
      specs: ["Algodão respirável", "Protetor bucal moldável", "Estojo higiênico"],
    },
    {
      title: "Caneleiras de Treino",
      subtitle: "Proteção para Bloqueios & Chutes",
      desc: "Proteção acolchoada da canela e peito do pé com ajuste duplo em velcro, garantindo que a caneleira fique firme durante as combinações.",
      badge: "MUAY THAI & KICKBOXING",
      icon: Swords,
      specs: ["Proteção canela e peito do pé", "Ajuste firme em velcro", "Conforto no tatame"],
    },
    {
      title: "Kimonos & Fardamento",
      subtitle: "Para Jiu-Jitsu & Defesa Pessoal",
      desc: "Kimonos em tecido trançado resistente para pegadas fortes no Jiu-Jitsu e rashguards confortáveis para treino diário no tatame.",
      badge: "ARTE SUAVE & TATAME",
      icon: Sparkles,
      specs: ["Tecido trançado reforçado", "Costuras duplas", "Resistente a pegadas"],
    },
  ];

  const whatsappEquipmentsUrl = `https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}?text=${encodeURIComponent(
    "Olá! Tenho interesse em saber mais sobre a aquisição de equipamentos de luta na Urban Fight."
  )}`;

  return (
    <section id="equipamentos" className="py-20 sm:py-28 bg-[#030303] relative overflow-hidden w-full max-w-[100vw] border-t border-zinc-900">
      {/* Background Combat Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blood-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-asphalt-900 border border-blood-600/40 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest">
            <ShoppingBag className="w-3.5 h-3.5 text-blood-500" />
            <span>ARSENAL DO ATLETA • TACTICAL COMBAT GEAR</span>
          </div>

          <h2 className="font-combat text-5xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9]">
            EQUIPAMENTOS OFICIAIS & <br />
            <span className="text-blood-600">
              SUPRIMENTOS DE COMBATE.
            </span>
          </h2>

          <p className="font-tactical text-xs sm:text-sm text-zinc-300 uppercase tracking-widest font-semibold">
            Equipe-se com padrão profissional para os treinos na Urban Fight.
          </p>

          <p className="font-sans text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Se você tem interesse em adquirir luvas de boxe/muay thai, bandagens, protetores bucais, caneleiras ou equipamentos específicos recomendados pelo Mestre André, entre em contato diretamente com nossa recepção para verificar indicações de marcas e disponibilidade.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {equipmentCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-900/90 border border-zinc-800 hover:border-blood-600 rounded-none p-6 flex flex-col justify-between group transition-all duration-300 shadow-combat-plate"
              >
                <div className="space-y-4">
                  {/* Card Header & Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-10 h-10 bg-asphalt-800 border border-zinc-700 rounded-none flex items-center justify-center group-hover:border-blood-500 transition-colors">
                      <Icon className="w-5 h-5 text-blood-500" />
                    </div>
                    <span className="px-2 py-0.5 text-[9px] font-tactical font-bold uppercase tracking-wider bg-blood-600/20 border border-blood-500/40 text-blood-300">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-combat text-2xl sm:text-3xl uppercase text-white tracking-wide group-hover:text-blood-400 transition-colors leading-none">
                      {item.title}
                    </h3>
                    <span className="font-tactical text-[10px] uppercase tracking-wider text-zinc-400 font-semibold block mt-1">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Specs Pills */}
                <div className="pt-5 mt-5 border-t border-zinc-800/80 space-y-1.5">
                  <span className="font-tactical text-[9px] uppercase tracking-widest text-zinc-400 font-bold block mb-2">
                    ESPECIFICAÇÕES TÉCNICAS:
                  </span>
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-blood-500 shrink-0" />
                      <span className="text-[11px] font-sans">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Master André Protocol Box & Direct Reception CTA */}
        <div className="bg-gradient-to-r from-asphalt-900 via-zinc-900 to-asphalt-900 border-2 border-blood-600/60 rounded-none p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-blood-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/80 border border-blood-500/40 text-blood-400 font-tactical text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-blood-500" />
                <span>ORIENTAÇÃO DO MESTRE ANDRÉ</span>
              </div>

              <h4 className="font-combat text-2xl sm:text-3xl uppercase text-white tracking-wide">
                NÃO COMPRE EQUIPAMENTOS INADEQUADOS SEM ORIENTAÇÃO
              </h4>

              <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                &ldquo;Um equipamento correto não é vaidade, é saúde articular e respeito com seu parceiro de treino. Antes de adquirir qualquer luva ou bandagem, fale com a recepção da Urban Fight para receber a recomendação exata para seu peso, nível e modalidade.&rdquo;
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="font-tactical text-[11px] uppercase tracking-wider text-zinc-300 bg-black/60 px-2.5 py-1 border border-zinc-800">
                  ? Marcas Homologadas
                </span>
                <span className="font-tactical text-[11px] uppercase tracking-wider text-zinc-300 bg-black/60 px-2.5 py-1 border border-zinc-800">
                  ? Pronta Entrega na Sede
                </span>
                <span className="font-tactical text-[11px] uppercase tracking-wider text-zinc-300 bg-black/60 px-2.5 py-1 border border-zinc-800">
                  ? Tamanhos Certos por Biotipo
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="w-full lg:w-auto shrink-0 space-y-2">
              <a
                href={whatsappEquipmentsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-blood-600 hover:bg-blood-500 text-white font-combat uppercase tracking-wider text-xl font-bold rounded-none border border-blood-400/50 shadow-spotlight-sharp transition-all group"
              >
                <span>CONSULTAR EQUIPAMENTOS NO WHATSAPP</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>
              <span className="block text-center lg:text-right text-[11px] font-tactical text-zinc-400 uppercase tracking-widest">
                Recepção Urban Fight • Santo Expedito
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
