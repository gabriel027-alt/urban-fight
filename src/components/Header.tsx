"use client";

import React, { useState, useEffect } from "react";
import { URBAN_FIGHT_CONFIG } from "@/lib/utils";
import { 
  Flame, 
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
    { name: "Modalidades", href: "#modalidades" },
    { name: "Método Mestre André", href: "#metodo" },
    { name: "Estrutura", href: "#estrutura" },
    { name: "Horários", href: "#horarios" },
    { name: "Dúvidas", href: "#duvidas" },
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
      {/* Top micro-bar with badge */}
      <div className="bg-combat-900 border-b border-zinc-800/80 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-zinc-300 font-medium">Turmas Abertas para Iniciantes & Kids</span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Santo Expedito • Montes Claros - MG</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={URBAN_FIGHT_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              {URBAN_FIGHT_CONFIG.instagramHandle}
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href={`https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-red-400 hover:text-red-300 font-semibold transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>(38) 99876-5432</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-combat-950/95 backdrop-blur-md border-b border-zinc-800 shadow-2xl py-3"
            : "bg-combat-950/70 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform duration-200 border border-red-400/40">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-wider uppercase text-white font-sans">
                  URBAN <span className="text-red-500">FIGHT</span>
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium -mt-1">
                Santo Expedito • Montes Claros
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white hover:border-b-2 hover:border-red-500 py-1 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleCtaClick}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-700 px-5 py-2.5 text-sm font-bold text-white shadow-combat-glow hover:shadow-combat-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <span>Aula Experimental</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-combat-900/98 backdrop-blur-xl border-b border-zinc-800 px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900 border border-zinc-800/80 text-xs text-zinc-400">
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span>Av. Cula Mangabeira, 1497 - Santo Expedito, Montes Claros</span>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleAction(link.href)}
                  className="text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-zinc-200 hover:bg-zinc-800/80 hover:text-red-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="pt-2 border-t border-zinc-800">
              <button
                onClick={handleCtaClick}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 py-3 text-sm font-bold text-white shadow-combat-glow hover:bg-red-500 transition-all"
              >
                <span>Agendar Aula Experimental Gratuita</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
