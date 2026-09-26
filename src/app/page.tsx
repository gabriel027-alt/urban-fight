"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { ModalitiesGrid } from "@/components/ModalitiesGrid";
import { ModalitiesGuidanceVideo } from "@/components/ModalitiesGuidanceVideo";
import { MasterAndreSection } from "@/components/MasterAndreSection";
import { LocationSection, StructureSection } from "@/components/LocationAndStructure";
import { SocialProofSection } from "@/components/SocialProofSection";
import { EquipmentSection } from "@/components/EquipmentSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { TrialTriage } from "@/components/TrialTriage";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { scrollToSection } from "@/lib/utils";

export default function Home() {
  const [selectedModalityForTriage, setSelectedModalityForTriage] = useState<string>(
    "Muay Thai & Kickboxing"
  );

  const scrollToTriage = (modality?: string) => {
    if (modality) {
      setSelectedModalityForTriage(modality);
    }
    scrollToSection("triagem-experimental", 80);
  };

  const scrollToModalities = () => {
    scrollToSection("modalidades", 80);
  };


  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col bg-[#030303] text-zinc-100 selection:bg-blood-600 selection:text-white relative">
      {/* 1. Tactical Combat Header */}
      <Header onOpenTriage={() => scrollToTriage()} />

      <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden">
        {/* 2. Hero Arena with Crossed Spotlights & UFC Impact */}
        <Hero
          onStartTriage={() => scrollToTriage()}
          onExploreModalities={scrollToModalities}
        />

        {/* 3. Athletic Continuous Marquee (Tilted Red Combat Tape) */}
        <MarqueeTicker angle="-rotate-1 sm:-rotate-2" theme="red" />

        {/* 4. 3D Tilt Modalities Grid with Specular Glare & Fighter Photos */}
        <ModalitiesGrid onSelectModality={(modality) => scrollToTriage(modality)} />

        {/* 5. Modalities Guidance Video by Mestre André */}
        <ModalitiesGuidanceVideo onStartTriage={() => scrollToTriage()} />

        {/* 6. Tactical Social Proof & Student Validation (Immediate Proof after Guidance) */}
        <SocialProofSection onStartTriage={() => scrollToTriage()} />

        {/* 7. Strategic Location / Sede Santo Expedito Google Maps */}
        <LocationSection />

        {/* 8. Fight Gym Tour Photographic Mosaic */}
        <StructureSection />

        {/* 8. Reverse Asphalt Combat Tape Marquee */}
        <MarqueeTicker reverse angle="rotate-1 sm:rotate-1.5" theme="asphalt" />

        {/* 9. Asymmetric Editorial Poster of Mestre André (Lineage & Manifesto) */}
        <MasterAndreSection onStartTriage={() => scrollToTriage()} />

        {/* 10. Operational Class Schedule (Shifts & Times) */}
        <ScheduleSection onScheduleSlot={(modality) => scrollToTriage(modality)} />

        {/* 11. Tactical Combat Gear & Official Supplies */}
        <EquipmentSection />

        {/* 12. 3-Step Tactical Triage Funnel directly to WhatsApp */}
        <TrialTriage initialModality={selectedModalityForTriage} />

        {/* 13. Objection Breaker FAQ */}
        <FAQ onStartTriage={() => scrollToTriage()} />
      </main>

      {/* 11. Full Footer */}
      <Footer />

      {/* 12. Persistent Mobile Conversion CTA */}
      <StickyMobileCTA onTriggerTriage={() => scrollToTriage()} />

      {/* 13. High-Priority Floating WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
