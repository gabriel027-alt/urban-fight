"use client";

import React from "react";

interface MarqueeTickerProps {
  reverse?: boolean;
  angle?: string;
  theme?: "red" | "dark" | "asphalt";
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
      case "asphalt":
        return "bg-black text-blood-500 border-y border-blood-600/40 shadow-xl font-black";
      case "dark":
        return "bg-[#09090b] text-zinc-100 border-y border-zinc-800 shadow-2xl";
      case "red":
      default:
        return "bg-blood-600 text-white border-y border-blood-500 shadow-spotlight-sharp";
    }
  };

  return (
    <div className={`relative w-full overflow-hidden py-3.5 z-20 select-none transform ${angle} my-6 sm:my-10 ${getThemeStyles()}`}>
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
