export interface ScheduleSlot {
  time: string;
  modality: string;
  level: string;
  days: string;
  shift: "morning" | "afternoon" | "evening";
}

export const SCHEDULE_DATA: ScheduleSlot[] = [
  // Manhã
  {
    time: "06:30 - 07:30",
    modality: "Boxe Tradicional / Morning Strike",
    level: "Todos os Níveis",
    days: "Segunda, Quarta e Sexta",
    shift: "morning",
  },
  {
    time: "07:30 - 08:30",
    modality: "Muay Thai & Kickboxing",
    level: "Iniciantes & Intermediários",
    days: "Terça e Quinta",
    shift: "morning",
  },
  {
    time: "09:00 - 10:15",
    modality: "Jiu-Jitsu (BJJ) Matutino",
    level: "Iniciantes & Graduados",
    days: "Segunda a Quinta",
    shift: "morning",
  },

  // Tarde
  {
    time: "15:00 - 16:00",
    modality: "Treino Livre Supervisionado / Sparring Técnico",
    level: "Alunos Matriculados",
    days: "Segunda a Sexta",
    shift: "afternoon",
  },
  {
    time: "16:30 - 17:30",
    modality: "Taekwondo & Turmas Infantis (Kids 4-10 anos)",
    level: "Iniciante Infantil",
    days: "Segunda, Quarta e Sexta",
    shift: "afternoon",
  },
  {
    time: "17:30 - 18:30",
    modality: "Turmas Teens & Jovens Guerreiros (11-15 anos)",
    level: "Fundamental & Médio",
    days: "Terça e Quinta",
    shift: "afternoon",
  },

  // Noite
  {
    time: "18:30 - 19:30",
    modality: "Muay Thai & Kickboxing Noturno",
    level: "Todos os Níveis",
    days: "Segunda a Sexta",
    shift: "evening",
  },
  {
    time: "19:30 - 20:30",
    modality: "Boxe Tradicional Noturno (Nobre Arte)",
    level: "Iniciantes a Avançados",
    days: "Segunda, Quarta e Sexta",
    shift: "evening",
  },
  {
    time: "19:30 - 20:30",
    modality: "Jeet Kune Do & Defesa Pessoal Urbana",
    level: "Sobrevivência & Combate",
    days: "Terça e Quinta",
    shift: "evening",
  },
  {
    time: "20:30 - 22:00",
    modality: "Jiu-Jitsu Noturno (Gi / Nogi)",
    level: "Iniciantes ao Avançado",
    days: "Segunda a Quinta",
    shift: "evening",
  },
  {
    time: "09:00 - 11:30",
    modality: "Aulão Geral & Open Mat de Sábado",
    level: "Comunidade Urban Fight",
    days: "Sábados",
    shift: "morning",
  },
];
