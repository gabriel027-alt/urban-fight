"use client";

import React from "react";
import { 
  ShieldCheck, 
  HeartHandshake, 
  Brain, 
  Trophy, 
  Award,
  CheckCircle,
  Flame,
  ArrowRight
} from "lucide-react";

interface MethodSectionProps {
  onStartTriage: () => void;
}

export const MethodSection: React.FC<MethodSectionProps> = ({ onStartTriage }) => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: "Tatame Livre de Ego",
      desc: "Aqui ninguém é tratado com indiferença ou testado de forma descabida. Veteranos acolhem novatos com respeito mútuo. Você treina em um ambiente de camaradagem onde todos torcem pela sua vitória.",
      badge: "Cultura Fraterna",
    },
    {
      icon: ShieldCheck,
      title: "Segurança & Integridade Física",
      desc: "Iniciante não faz combate livre descontrolado. Nossos treinos utilizam equipamentos de amortecimento de impacto, manoplas e protocolos de aquecimento articular que protegem sua integridade.",
      badge: "Zero Risco Fútil",
    },
    {
      icon: Brain,
      title: "Mentalidade de Combate para a Vida",
      desc: "A luta é apenas o instrumento. A verdadeira transformação acontece no autocontrole, na gestão da ansiedade e na resiliência para resolver problemas difíceis fora do tatame.",
      badge: "Foco & Firmeza",
    },
    {
      icon: Trophy,
      title: "Evolução Técnica & Graduação",
      desc: "Currículo estruturado de faixas e graduações baseado em assiduidade, biomecânica e conduta ética. Você enxerga com clareza o seu progresso a cada treino concluído.",
      badge: "Resultados Reais",
    },
  ];

  return (
    <section id="metodo" className="py-20 bg-combat-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>O Método Mestre André</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Mais do que Luta. Uma Escola de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              Transformação Pessoal.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg">
            Sob a supervisão de quem dedica décadas ao ensino marcial em Montes Claros, criamos um sistema pedagógico focado em saúde, autodefesa eficiente e superação diária.
          </p>
        </div>

        {/* Master Profile & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Mestre Andre Highlight Card */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-combat-950 border border-zinc-800 p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase">
                <Flame className="w-3.5 h-3.5" />
                <span>Liderança Técnica</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white">Mestre André</h3>
                <p className="text-sm text-red-400 font-semibold">
                  Fundador & Diretor Geral da Urban Fight Montes Claros
                </p>
              </div>

              <blockquote className="text-zinc-300 text-sm leading-relaxed border-l-2 border-red-500 pl-4 italic">
                &ldquo;Artes marciais não existem para alimentar a vaidade de ninguém. Nosso compromisso na Urban Fight é acolher você no seu primeiro dia, ensinar a respirar sob pressão, defender quem você ama e construir uma versão física e mental mais forte do que ontem.&rdquo;
              </blockquote>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Mais de duas décadas dedicadas à formação de cidadãos e lutadores</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Especialista em Boxe, Muay Thai, Jiu-Jitsu e Jeet Kune Do</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Metodologia adaptada para alunos do sedentarismo à alta competição</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onStartTriage}
                  className="w-full py-3.5 px-5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-combat-glow transition-all"
                >
                  <span>Conhecer o Mestre André no Tatame</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-red-500/40 transition-all duration-200 group relative"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800/90 border border-zinc-700/60 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-zinc-800/80 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
