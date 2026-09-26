import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const URBAN_FIGHT_CONFIG = {
  name: "Urban Fight",
  tagline: "Centro de Artes Marciais & Alta Performance",
  leader: "Mestre André",
  address: "Av. Cula Mangabeira, 1497 - Santo Expedito, Montes Claros - MG",
  cep: "39401-002",
  city: "Montes Claros",
  state: "MG",
  phoneDisplay: "(38) 99876-5432",
  whatsappRaw: "5538998765432", // Formato internacional
  instagramHandle: "@urbanfight_oficial",
  instagramUrl: "https://instagram.com/urbanfight_oficial",
  googleMapsUrl: "https://maps.google.com/?q=Av.+Cula+Mangabeira,+1497+-+Santo+Expedito,+Montes+Claros+-+MG",
  workingHours: {
    weekdays: "Segunda a Sexta: 06h00 às 22h00",
    saturday: "Sábados: 08h00 às 13h00",
    sunday: "Domingos: Eventos e Treinos Especiais",
  },
};

export interface TrialBookingData {
  goal: string;
  experience?: string;
  modality: string;
  shift: string;
  name: string;
  phone: string;
}

export function scrollToSection(target: string, offset: number = 80) {
  if (typeof window === "undefined") return;
  const cleanId = target.replace(/^#/, "");
  const el = document.getElementById(cleanId);
  if (!el) return;
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: "smooth",
  });
}

export function buildWhatsAppBookingUrl(data: TrialBookingData): string {
  const cleanName = data.name?.trim() || "Não informado";
  const cleanPhone = data.phone?.trim() || "Não informado";
  const cleanGoal = data.goal?.trim() || "Condicionamento & Defesa";
  const cleanModality = data.modality?.trim() || "Quero indicação do Mestre";
  const cleanShift = data.shift?.trim() || "A definir";

  const message = [
    `🥊 *URBAN FIGHT MONTES CLAROS - AGENDAMENTO DE AULA EXPERIMENTAL*`,
    ``,
    `Olá, Mestre André e recepção! Preenchi a triagem no site e gostaria de confirmar minha aula experimental gratuita na sede do Santo Expedito.`,
    ``,
    `📋 *DADOS DO ALUNO:*`,
    `• *Nome:* ${cleanName}`,
    `• *WhatsApp:* ${cleanPhone}`,
    `• *Objetivo Principal:* ${cleanGoal}`,
    `• *Modalidade de Interesse:* ${cleanModality}`,
    `• *Turno Preferido:* ${cleanShift}`,
    ...(data.experience ? [`• *Nível:* ${data.experience}`] : []),
    ``,
    `Podem me confirmar os dias e horários disponíveis para o meu primeiro treino esta semana? Obrigado!`,
  ].join("\n");

  return `https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

