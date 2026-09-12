"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ModalitiesGrid } from "@/components/ModalitiesGrid";
import { MethodSection } from "@/components/MethodSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { TrialTriage } from "@/components/TrialTriage";
import { LocationAndStructure } from "@/components/LocationAndStructure";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function Home() {
  const [selectedModalityForTriage, setSelectedModalityForTriage] = useState<string>(
    "Muay Thai & Kickboxing"
  );

  const scrollToTriage = (modality?: string) => {
    if (modality) {
      setSelectedModalityForTriage(modality);
    }
    const triageElement = document.getElementById("triagem-experimental");
    if (triageElement) {
      triageElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToModalities = () => {
    const modalitiesElement = document.getElementById("modalidades");
    if (modalitiesElement) {
      modalitiesElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-combat-950 text-zinc-100 selection:bg-red-600 selection:text-white">
      {/* 1. Header with Montes Claros badge and navigation */}
      <Header onOpenTriage={() => scrollToTriage()} />

      <main className="flex-1">
        {/* 2. Hero with high impact, value proposition & authority badges */}
        <Hero
          onStartTriage={() => scrollToTriage()}
          onExploreModalities={scrollToModalities}
        />

        {/* 3. Interactive Modalities Grid with filters */}
        <ModalitiesGrid onSelectModality={(modality) => scrollToTriage(modality)} />

        {/* 4. Method Section (Mestre André's philosophy & beginner-friendly culture) */}
        <MethodSection onStartTriage={() => scrollToTriage()} />

        {/* 5. Schedule Section (Shifts: Morning, Afternoon, Night) */}
        <ScheduleSection onScheduleSlot={(modality) => scrollToTriage(modality)} />

        {/* 6. Trial Triage (3-step interactive booking funnel) */}
        <TrialTriage initialModality={selectedModalityForTriage} />

        {/* 7. Location and Structure (Av. Cula Mangabeira, 1497 + Dark Map Embed) */}
        <LocationAndStructure />

        {/* 8. FAQ (Objection breaking accordion) */}
        <FAQ onStartTriage={() => scrollToTriage()} />
      </main>

      {/* 9. Full Footer */}
      <Footer />

      {/* 10. Sticky Mobile CTA for high mobile conversion */}
      <StickyMobileCTA onTriggerTriage={() => scrollToTriage()} />
    </div>
  );
}
