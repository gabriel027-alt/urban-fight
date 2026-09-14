"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { URBAN_FIGHT_CONFIG } from "@/lib/utils";
import { 
  MapPin, 
  Menu, 
  X, 
  ArrowRight,
  Phone
} from "lucide-react";

interface HeaderProps {
  onOpenTriage?: (modality?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTriage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "MODALIDADES", href: "#modalidades" },
    { name: "MESTRE ANDRÉ", href: "#metodo" },
    { name: "ESTRUTURA", href: "#estrutura" },
    { name: "HORÁRIOS", href: "#horarios" },
    { name: "EQUIPAMENTOS", href: "#equipamentos" },
    { name: "DÚVIDAS", href: "#duvidas" },
  ];

  const handleAction = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onOpenTriage) {
      onOpenTriage();
    } else {
      const triageElem = document.querySelector("#triagem-experimental");
      if (triageElem) {
        triageElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Top Micro-Bar (Fight Night style) */}
      <div className="bg-[#030304] border-b border-zinc-850 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-tactical text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blood-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blood-600"></span>
            </span>
            <span className="text-zinc-300 font-bold uppercase tracking-wider">
              MATRÍCULAS ABERTAS • TURMAS INICIANTES & KIDS
            </span>
            <span className="text-zinc-600">|</span>
            <span className="flex items-center gap-1 text-zinc-400">
              <MapPin className="w-3 h-3 text-blood-500" />
              <span>SANTO EXPEDITO • MONTES CLAROS - MG</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-tactical tracking-wider">
            <a
              href={URBAN_FIGHT_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blood-400 transition-colors uppercase"
            >
              {URBAN_FIGHT_CONFIG.instagramHandle}
            </a>
            <span className="text-zinc-750">|</span>
            <a
              href={`https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blood-400 hover:text-blood-300 font-bold transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>(38) 99876-5432</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-[#050505]/98 backdrop-blur-md border-b border-zinc-800 shadow-2xl py-2.5"
            : "bg-[#050505]/80 backdrop-blur-sm border-b border-zinc-900 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Official Emblem */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-blood-500 shadow-spotlight-sharp group-hover:scale-105 transition-transform bg-black flex-shrink-0">
              <Image
                src="/logo-urban-fight.jpg"
                alt="Logo Oficial Urban Fight"
                width={44}
                height={44}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-combat text-2xl sm:text-3xl font-black tracking-wider uppercase text-white leading-none">
                  URBAN <span className="text-blood-500">FIGHT</span>
                </span>
              </div>
              <p className="font-tactical text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-bold -mt-0.5">
                MONTES CLAROS • MG
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-tactical text-xs uppercase tracking-widest text-zinc-300 hover:text-white hover:border-b-2 hover:border-blood-600 py-1 transition-all duration-150 font-bold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleCtaClick}
              className="px-5 py-2.5 bg-blood-600 hover:bg-blood-500 text-white font-combat uppercase tracking-wider text-lg font-bold transition-colors border border-blood-500 rounded-none flex items-center gap-2"
            >
              <span>AULA EXPERIMENTAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 bg-asphalt-900 border border-zinc-800 text-zinc-300 hover:text-white rounded-none"
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#070709] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-4 animate-in fade-in duration-150">
            <div className="p-2.5 bg-asphalt-900 border border-zinc-800 text-xs font-tactical text-zinc-300 flex items-center gap-2 rounded-none">
              <MapPin className="w-4 h-4 text-blood-500 shrink-0" />
              <span>Av. Cula Mangabeira, 1497 - Santo Expedito, Montes Claros</span>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleAction(link.href)}
                  className="text-left py-2.5 px-3 font-tactical text-sm uppercase tracking-wider font-bold text-zinc-200 hover:bg-asphalt-800 hover:text-blood-400 transition-colors rounded-none"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="pt-2 border-t border-zinc-800">
              <button
                onClick={handleCtaClick}
                className="w-full py-3.5 bg-blood-600 hover:bg-blood-500 font-combat uppercase tracking-wider text-xl font-black text-white flex items-center justify-center gap-2 rounded-none border border-blood-500 transition-colors"
              >
                <span>AGENDAR AULA EXPERIMENTAL GRATUITA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
