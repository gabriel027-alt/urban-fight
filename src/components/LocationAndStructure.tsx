"use client";

import React from "react";
import { URBAN_FIGHT_CONFIG } from "@/lib/utils";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  ExternalLink,
  Camera
} from "lucide-react";

export const LocationAndStructure: React.FC = () => {
  const gymSpaces = [
    {
      title: "Tatame de Alta Densidade",
      subtitle: "Amortecimento Profundo & Proteção Articular",
      desc: "Superfície contínua de alta densidade desenvolvida para rolamentos, projeções de Jiu-Jitsu e movimentação de solo sem sobrecarga articular, com sanitização diária rigorosa.",
      badge: "TATAME PROFISSIONAL",
      imageUrl: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Absorção de Impacto", "Higiene Hospitalar", "Solo e Quedas"],
      colSpan: "lg:col-span-8",
    },
    {
      title: "Ringue & Sacos Pesados",
      subtitle: "Estação de Potência & Golpeio Contínuo",
      desc: "Bolsas de pancada profissionais de 60kg a 100kg em couro reforçado para calejamento, chutes e combinações no Muay Thai e Boxe, além de ringue e área para manoplas.",
      badge: "POTÊNCIA & IMPACTO",
      imageUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop",
      highlights: ["Bolsas de 60 a 100kg", "Muay Thai & Boxe", "Área de Ringue"],
      colSpan: "lg:col-span-4",
    },
    {
      title: "Área de Equipamentos Funcionais",
      subtitle: "Cones, Aparadores e Escadinha de Tatame",
      desc: "Estação focada na preparação física de luta: cones de agilidade, escadinha de coordenação no tatame, aparadores tailandeses (paus), manoplas de foco e barras funcionais.",
      badge: "AGILIDADE & PREPARO",
      imageUrl: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1000&auto=format&fit=crop",
      highlights: ["Cones de Agilidade", "Escadinha de Tatame", "Manoplas & Aparadores"],
      colSpan: "lg:col-span-4",
    },
    {
      title: "Recepção & Convivência",
      subtitle: "Ponto de Encontro & Acolhimento Familiar",
      desc: "Área de circulação e recepção na Av. Cula Mangabeira, 1497: acolhimento pelo Mestre André, hidratação e espaço para alunos e familiares acompanharem os treinos com tranquilidade.",
      badge: "SANTO EXPEDITO",
      imageUrl: "https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Ponto de Encontro", "Hidratação & Recepção", "Ambiente Familiar"],
      colSpan: "lg:col-span-8",
    },
  ];

  return (
    <section id="estrutura" className="py-20 sm:py-28 bg-[#030303] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-asphalt-900 border border-blood-600/40 text-blood-400 font-tactical text-xs font-bold uppercase tracking-widest clip-tag">
            <Camera className="w-3.5 h-3.5 text-blood-500" />
            <span>FIGHT GYM TOUR • ESTRUTURA FÍSICA</span>
          </div>

          <h2 className="font-combat text-5xl sm:text-6xl md:text-7xl uppercase font-black text-white tracking-tight leading-[0.9]">
            A ARENA ONDE SEUS LIMITES <br />
            <span className="text-blood-600">
              SÃO REESCRITOS.
            </span>
          </h2>

          <p className="font-sans text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Projetada para atletas de combate e acolhedora para famílias e iniciantes. Conheça as áreas especializadas da sede Santo Expedito: tatame, sacos pesados e circuito funcional marcial.
          </p>
        </div>

        {/* Photographic Mosaic: Fight Gym Tour */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-14">
          {gymSpaces.map((space, idx) => (
            <div
              key={idx}
              className={`${space.colSpan} relative min-h-[320px] sm:min-h-[360px] bg-asphalt-900 border border-zinc-800 hover:border-blood-600/70 clip-chamfer-top overflow-hidden group shadow-combat-plate flex flex-col justify-end p-6 sm:p-8`}
            >
              {/* Photo background with dramatic lighting */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${space.imageUrl}')` }}
              />
              {/* Moody overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/85 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-blood-950/20 mix-blend-color pointer-events-none" />

              {/* Tactical Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="font-tactical text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-black/90 border border-blood-600/50 text-white clip-tag">
                  {space.badge}
                </span>
              </div>

              {/* Text content over photo */}
              <div className="relative z-10 space-y-2">
                <span className="font-tactical text-[10px] uppercase tracking-widest text-blood-400 font-bold block">
                  {space.subtitle}
                </span>
                <h3 className="font-combat text-3xl sm:text-4xl text-white uppercase tracking-wide leading-none">
                  {space.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
                  {space.desc}
                </p>
                {/* Equipment Highlights */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
                  {space.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="font-tactical text-[9px] uppercase tracking-wider px-2 py-0.5 bg-black/80 border border-zinc-700/80 text-zinc-300 clip-tag"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Address, Hours & Dark Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-asphalt-900 border border-zinc-800 clip-chamfer-top p-6 sm:p-10 shadow-combat-plate">
          {/* Address Details & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-asphalt-800 border border-zinc-700 clip-tag">
                <MapPin className="w-3.5 h-3.5 text-blood-500" />
                <span className="font-tactical text-xs uppercase tracking-wider text-zinc-300 font-bold">
                  LOCALIZAÇÃO OFICIAL
                </span>
              </div>

              <div>
                <h3 className="font-combat text-3xl sm:text-4xl text-white uppercase tracking-wider leading-none">
                  AV. CULA MANGABEIRA, 1497
                </h3>
                <p className="font-tactical text-xs text-zinc-400 mt-2 uppercase tracking-wide">
                  BAIRRO SANTO EXPEDITO • MONTES CLAROS - MG • CEP 39401-002
                </p>
              </div>

              <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Ponto de fácil acesso na principal avenida do Santo Expedito, com área iluminada para estacionamento de carros e motocicletas.
              </p>

              <div className="space-y-3 pt-3 border-t border-zinc-800 text-xs font-sans text-zinc-300">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blood-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-tactical uppercase text-xs">
                      Horários de Treino:
                    </strong>
                    <span className="text-zinc-400">{URBAN_FIGHT_CONFIG.workingHours.weekdays}</span>
                    <br />
                    <span className="text-zinc-400">{URBAN_FIGHT_CONFIG.workingHours.saturday}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blood-500 shrink-0" />
                  <div>
                    <strong className="text-white block font-tactical uppercase text-xs">
                      Recepção / Agendamentos:
                    </strong>
                    <span className="font-tactical text-zinc-200 font-bold">{URBAN_FIGHT_CONFIG.phoneDisplay}</span>
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
                className="w-full py-4 px-4 bg-gradient-to-r from-blood-700 via-blood-600 to-blood-800 hover:from-blood-600 hover:to-blood-700 text-white font-combat uppercase tracking-wider text-xl font-black clip-chamfer-top flex items-center justify-center gap-2 shadow-spotlight-sharp transition-all"
              >
                <Navigation className="w-5 h-5" />
                <span>TRAÇAR ROTA NO GOOGLE MAPS</span>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>

              <a
                href="https://waze.com/ul?q=Av.+Cula+Mangabeira,+1497+-+Santo+Expedito,+Montes+Claros+-+MG"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-asphalt-800 hover:bg-asphalt-750 text-zinc-200 font-tactical uppercase text-xs font-bold tracking-wider flex items-center justify-center gap-2 border border-zinc-700 clip-tag transition-colors"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>ABRIR NO APLICATIVO WAZE</span>
              </a>
            </div>
          </div>

          {/* Stylized Dark Theme Map Embed */}
          <div className="lg:col-span-7 min-h-[380px] sm:min-h-[460px] bg-black border border-zinc-800 clip-chamfer-top overflow-hidden relative shadow-inner">
            <iframe
              title="Localização Urban Fight Montes Claros"
              src="https://maps.google.com/maps?q=Av.+Cula+Mangabeira,+1497+-+Santo+Expedito,+Montes+Claros+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] sm:min-h-[460px] filter grayscale invert contrast-125 opacity-90 hover:opacity-100 transition-opacity"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-md border border-zinc-700 px-3.5 py-2 clip-tag flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-blood-500 animate-pulse" />
              <span className="font-tactical text-xs font-bold uppercase tracking-wider text-white">
                URBAN FIGHT • SANTO EXPEDITO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
