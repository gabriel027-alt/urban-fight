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
  experience: string;
  modality: string;
  shift: string;
  name?: string;
  phone?: string;
}

export function buildWhatsAppBookingUrl(data: TrialBookingData): string {
  const intro = `🥊 *Olá, Mestre André e Equipe Urban Fight!*`;
  const intent = `Gostaria de agendar minha *Aula Experimental Gratuita* na sede do Santo Expedito (Montes Claros).`;
  
  const details = [
    `🎯 *Meu Objetivo:* ${data.goal || "Condicionamento & Defesa"}`,
    `⚡ *Nível de Experiência:* ${data.experience || "Iniciante"}`,
    `🥋 *Modalidade de Interesse:* ${data.modality || "Quero indicação"}`,
    `⏰ *Turno Preferido:* ${data.shift || "Noite"}`,
    data.name ? `👤 *Meu Nome:* ${data.name}` : null,
    data.phone ? `📱 *Contato:* ${data.phone}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const footer = `\nPodem me confirmar os dias e horários disponíveis para eu fazer minha aula esta semana? Obrigado!`;

  const fullMessage = `${intro}\n\n${intent}\n\n${details}${footer}`;

  return `https://wa.me/${URBAN_FIGHT_CONFIG.whatsappRaw}?text=${encodeURIComponent(
    fullMessage
  )}`;
}
