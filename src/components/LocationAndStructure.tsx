"use client";

import React from "react";
import { URBAN_FIGHT_CONFIG } from "@/lib/utils";
import { 
  MapPin, 
  Navigation, 
  Car, 
  ShieldCheck, 
  Layers, 
  Flame, 
  Clock, 
  Phone,
  ExternalLink
} from "lucide-react";

export const LocationAndStructure: React.FC = () => {
  const structureFeatures = [
    {
      icon: Layers,
      title: "Tatame Profissional de Alta Densidade",
      desc: "Área ampla com absorção de choque e impacto de padrão olímpico, higienizado diariamente com bactericidas hospitalares.",
    },
    {
      icon: Flame,
      title: "Ringue & Sacos de Pancada Pesados",
      desc: "Estrutura completa com ringue elevado para combate em pé, sacos de couro reforçados, manoplas e escudos de alta performance.",
    },
    {
      icon: ShieldCheck,
      title: "Vestiários Premium & Higienizados",
      desc: "Vestiários masculino e feminino completos com chuveiros quentes pressurizados, armários individuais e ventilação contínua.",
    },
    {
      icon: Car,
      title: "Fácil Estacionamento & Segurança",
      desc: "Localizado no trecho nobre e seguro da Av. Cula Mangabeira com iluminação de ponta e facilidade para estacionar seu carro ou moto.",
    },
  ];

  return (
    <section id="estrutura" className="py-20 bg-combat-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Sede Montes Claros - Santo Expedito</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Estrutura de Elite no Coração de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              Montes Claros.
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg">
            Um centro de treinamento projetado do zero para oferecer conforto, segurança e a verdadeira atmosfera das grandes academias internacionais de artes marciais.
          </p>
        </div>

        {/* Structure Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {structureFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-red-500/40 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Location Box & Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-zinc-900/70 border border-zinc-800 p-6 sm:p-8 overflow-hidden">
          {/* Address Details & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs font-semibold">
                <span>📍 Endereço Oficial</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Av. Cula Mangabeira, 1497
              </h3>

              <p className="text-sm text-zinc-300">
                Bairro Santo Expedito • Montes Claros - MG • CEP: 39401-002
              </p>

              <div className="pt-2 space-y-3 text-xs sm:text-sm text-zinc-400 border-t border-zinc-800">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-200 block">Horário de Funcionamento:</strong>
                    <span>{URBAN_FIGHT_CONFIG.workingHours.weekdays}</span>
                    <br />
                    <span>{URBAN_FIGHT_CONFIG.workingHours.saturday}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-red-500 shrink-0" />
                  <div>
                    <strong className="text-zinc-200 block">Telefone / Recepção:</strong>
                    <span>{URBAN_FIGHT_CONFIG.phoneDisplay}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation action buttons */}
            <div className="space-y-3 pt-4">
              <a
                href={URBAN_FIGHT_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-combat-glow transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Traçar Rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={`https://waze.com/ul?q=Av.+Cula+Mangabeira,+1497+-+Santo+Expedito,+Montes+Claros+-+MG`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-zinc-700 transition-colors"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>Navegar via Waze</span>
              </a>
            </div>
          </div>

          {/* Interactive Dark Map Embed */}
          <div className="lg:col-span-7 min-h-[350px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-zinc-800 relative shadow-inner bg-zinc-950">
            <iframe
              title="Localização Urban Fight Montes Claros"
              src="https://maps.google.com/maps?q=Av.+Cula+Mangabeira,+1497+-+Santo+Expedito,+Montes+Claros+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[350px] sm:min-h-[420px] filter grayscale invert contrast-125 opacity-90 hover:opacity-100 transition-opacity"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Overlay Badge */}
            <div className="absolute bottom-3 left-3 bg-combat-950/90 backdrop-blur-md border border-zinc-800 px-3 py-1.5 rounded-lg text-xs text-zinc-300 flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-semibold text-white">Urban Fight Montes Claros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
