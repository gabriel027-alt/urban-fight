"use client";

import React from "react";

interface MarqueeTickerProps {
  reverse?: boolean;
  angle?: string;
  theme?: "red" | "hazard" | "dark";
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  reverse = false,
  angle = "-rotate-1 sm:-rotate-2",
  theme = "red",
}) => {
  const items = [
    "URBAN FIGHT",
    "DISCIPLINA INABALÁVEL",
    "JIU-JITSU",
    "BOXE TRADICIONAL",
    "MUAY THAI",
    "DEFESA PESSOAL URBANA",
    "TURMAS KIDS",
    "MESTRE ANDRÉ",
    "SANTO EXPEDITO",
    "MONTES CLAROS - MG",
  ];

  const fullText = items.join("  •  ") + "  •  ";

  const getThemeStyles = () => {
    switch (theme) {
      case "hazard":
        return "bg-hazard-400 text-black border-y-2 border-black shadow-lg font-black";
      case "dark":
        return "bg-asphalt-900 text-zinc-300 border-y border-zinc-800 shadow-2xl";
      case "red":
      default:
        return "bg-gradient-to-r from-blood-800 via-blood-600 to-blood-800 text-white border-y-2 border-blood-500/50 shadow-spotlight-sharp";
    }
  };

  return (
    <div className={`relative w-full overflow-hidden py-3.5 z-20 select-none transform ${angle} my-6 sm:my-10 ${getThemeStyles()}`}>
      {/* Texture accent overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="flex whitespace-nowrap overflow-hidden">
        <div
          className={`flex shrink-0 items-center font-combat uppercase text-xl sm:text-2xl md:text-3xl tracking-widest font-black ${
            reverse ? "animate-marquee-right" : "animate-marquee-left"
          }`}
        >
          <span className="px-4">{fullText}</span>
          <span className="px-4">{fullText}</span>
          <span className="px-4">{fullText}</span>
        </div>
        <div
          className={`flex shrink-0 items-center font-combat uppercase text-xl sm:text-2xl md:text-3xl tracking-widest font-black ${
            reverse ? "animate-marquee-right" : "animate-marquee-left"
          }`}
          aria-hidden="true"
        >
          <span className="px-4">{fullText}</span>
          <span className="px-4">{fullText}</span>
          <span className="px-4">{fullText}</span>
        </div>
      </div>
    </div>
  );
};
