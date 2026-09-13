export interface ScheduleHour {
  time: string;
  tag?: "Feminino" | "Kids" | "Adulto" | "Misto" | "JKD / Krav Maga";
}

export interface ModalityScheduleItem {
  id: string;
  name: string;
  badge: string;
  audience: string;
  schedules: {
    day: string;
    hours: ScheduleHour[];
  }[];
}

export interface DaySlot {
  time: string;
  modality: string;
  day: "Segunda" | "Terça" | "Quarta" | "Quinta" | "Sexta" | "Sábado";
  shift: "morning" | "afternoon" | "evening";
  tag?: string;
}

// Backward-compatible ScheduleSlot interface
export interface ScheduleSlot {
  time: string;
  modality: string;
  level: string;
  days: string;
  shift: "morning" | "afternoon" | "evening";
  tag?: string;
}

// Grade Oficial Estruturada por Modalidade (Exata do Print)
export const OFFICIAL_MODALITIES_SCHEDULE: ModalityScheduleItem[] = [
  {
    id: "boxe",
    name: "Boxe Tradicional (Nobre Arte)",
    badge: "MISTO & FEMININO",
    audience: "Iniciantes ao Avançado",
    schedules: [
      {
        day: "Segunda-feira",
        hours: [
          { time: "08:00" },
          { time: "09:00" },
          { time: "18:00" },
          { time: "19:00" },
          { time: "20:00", tag: "Feminino" },
        ],
      },
      {
        day: "Quarta-feira",
        hours: [
          { time: "08:00" },
          { time: "09:00" },
          { time: "18:00" },
          { time: "19:00" },
          { time: "20:00", tag: "Feminino" },
        ],
      },
      {
        day: "Quinta-feira",
        hours: [{ time: "08:00" }],
      },
      {
        day: "Sexta-feira",
        hours: [
          { time: "09:00" },
          { time: "18:00" },
          { time: "19:00", tag: "Feminino" },
        ],
      },
      {
        day: "Sábado",
        hours: [{ time: "11:00" }],
      },
    ],
  },
  {
    id: "kickboxing",
    name: "Kickboxing & Muay Thai",
    badge: "ALTA INTENSIDADE",
    audience: "Misto, Feminino e Turmas Iniciais",
    schedules: [
      {
        day: "Terça-feira",
        hours: [
          { time: "06:00" },
          { time: "09:00" },
          { time: "18:00" },
          { time: "19:00", tag: "Feminino" },
          { time: "20:00", tag: "Misto" },
        ],
      },
      {
        day: "Quinta-feira",
        hours: [
          { time: "09:00" },
          { time: "18:00" },
          { time: "19:00", tag: "Feminino" },
          { time: "20:00" },
        ],
      },
      {
        day: "Sexta-feira",
        hours: [{ time: "08:00" }],
      },
      {
        day: "Sábado",
        hours: [
          { time: "08:00" },
          { time: "09:00", tag: "Feminino" },
          { time: "10:00" },
        ],
      },
    ],
  },
  {
    id: "jiu-jitsu",
    name: "Jiu-Jitsu Brasileiro (BJJ)",
    badge: "ARTE SUAVE",
    audience: "Fundamentos, Feminino e Avançado",
    schedules: [
      {
        day: "Segunda-feira",
        hours: [{ time: "09:00" }, { time: "20:00" }],
      },
      {
        day: "Terça-feira",
        hours: [
          { time: "09:00" },
          { time: "18:00" },
          { time: "19:00", tag: "Feminino" },
        ],
      },
      {
        day: "Quarta-feira",
        hours: [{ time: "09:00" }, { time: "20:00" }],
      },
      {
        day: "Quinta-feira",
        hours: [
          { time: "09:00" },
          { time: "18:00" },
          { time: "19:00", tag: "Feminino" },
        ],
      },
      {
        day: "Sexta-feira",
        hours: [{ time: "09:00" }, { time: "20:00" }],
      },
      {
        day: "Sábado",
        hours: [{ time: "08:00" }, { time: "10:00", tag: "Feminino" }],
      },
    ],
  },
  {
    id: "taekwondo",
    name: "Taekwondo (Kids & Adulto)",
    badge: "DISCIPLINA MARCIAL",
    audience: "Turmas Kids e Adulto",
    schedules: [
      {
        day: "Quarta-feira",
        hours: [
          { time: "18:00", tag: "Kids" },
          { time: "19:00", tag: "Adulto" },
        ],
      },
      {
        day: "Sexta-feira",
        hours: [
          { time: "18:00", tag: "Kids" },
          { time: "19:00", tag: "Adulto" },
        ],
      },
      {
        day: "Sábado",
        hours: [
          { time: "08:00", tag: "Kids" },
          { time: "09:00", tag: "Adulto" },
        ],
      },
    ],
  },
  {
    id: "krav-maga",
    name: "Krav Maga (Defesa Pessoal)",
    badge: "AUTOPROTEÇÃO REAL",
    audience: "Kids, Feminino e Adulto",
    schedules: [
      {
        day: "Segunda-feira",
        hours: [
          { time: "18:00", tag: "Kids" },
          { time: "19:00", tag: "Feminino" },
          { time: "20:00", tag: "Adulto" },
        ],
      },
      {
        day: "Terça-feira",
        hours: [{ time: "18:00", tag: "Kids" }],
      },
      {
        day: "Quarta-feira",
        hours: [
          { time: "19:00", tag: "Feminino" },
          { time: "20:00", tag: "Adulto" },
        ],
      },
      {
        day: "Quinta-feira",
        hours: [{ time: "18:00", tag: "Kids" }],
      },
      {
        day: "Sexta-feira",
        hours: [
          { time: "18:00", tag: "Feminino" },
          { time: "19:00", tag: "JKD / Krav Maga" },
        ],
      },
    ],
  },
  {
    id: "jeet-kune-do",
    name: "Jeet Kune Do (JKD)",
    badge: "FILOSOFIA BRUCE LEE",
    audience: "Combate Tático e Eficácia Direta",
    schedules: [
      {
        day: "Terça-feira",
        hours: [{ time: "19:00" }],
      },
      {
        day: "Quinta-feira",
        hours: [{ time: "19:00" }],
      },
      {
        day: "Sexta-feira",
        hours: [{ time: "19:00", tag: "JKD / Krav Maga" }],
      },
    ],
  },
];

// Grade por Slots de Turno (Para filtragem flexível)
export const SCHEDULE_DATA: ScheduleSlot[] = [
  // Boxe
  {
    time: "08:00 • 09:00 • 18:00 • 19:00 • 20:00 (Fem)",
    modality: "Boxe Tradicional (Nobre Arte)",
    level: "Iniciante ao Avançado",
    days: "Segunda e Quarta",
    shift: "morning",
  },
  {
    time: "08:00 (Qui) • 09:00 e 18:00 • 19:00 Fem (Sex) • 11:00 (Sáb)",
    modality: "Boxe Tradicional (Quinta, Sexta e Sábado)",
    level: "Misto & Feminino",
    days: "Quinta, Sexta e Sábado",
    shift: "evening",
  },

  // Kickboxing
  {
    time: "06:00 • 09:00 • 18:00 • 19:00 (Fem) • 20:00 (Misto)",
    modality: "Kickboxing & Muay Thai",
    level: "Turmas Iniciais e Misto",
    days: "Terça-feira",
    shift: "morning",
  },
  {
    time: "09:00 • 18:00 • 19:00 (Fem) • 20:00 (Qui) • 08:00 (Sex)",
    modality: "Kickboxing & Muay Thai",
    level: "Iniciantes & Intermediários",
    days: "Quinta e Sexta",
    shift: "evening",
  },
  {
    time: "08:00 • 09:00 (Fem) • 10:00",
    modality: "Kickboxing Matutino de Sábado",
    level: "Todos os Níveis",
    days: "Sábado",
    shift: "morning",
  },

  // Jiu-Jitsu
  {
    time: "09:00 • 20:00",
    modality: "Jiu-Jitsu Brasileiro (BJJ)",
    level: "Iniciantes ao Avançado",
    days: "Segunda, Quarta e Sexta",
    shift: "morning",
  },
  {
    time: "09:00 • 18:00 • 19:00 (Feminino)",
    modality: "Jiu-Jitsu Brasileiro (BJJ)",
    level: "Misto & Feminino",
    days: "Terça e Quinta",
    shift: "evening",
  },
  {
    time: "08:00 • 10:00 (Feminino)",
    modality: "Jiu-Jitsu de Sábado",
    level: "Aulão & Feminino",
    days: "Sábado",
    shift: "morning",
  },

  // Taekwondo Kids & Adulto
  {
    time: "18:00 (Kids) • 19:00 (Adulto)",
    modality: "Taekwondo (Kids & Adulto)",
    level: "Infantil e Adulto",
    days: "Quarta e Sexta",
    shift: "afternoon",
    tag: "Kids",
  },
  {
    time: "08:00 (Kids) • 09:00 (Adulto)",
    modality: "Taekwondo de Sábado",
    level: "Infantil e Adulto",
    days: "Sábado",
    shift: "morning",
    tag: "Kids",
  },

  // Krav Maga
  {
    time: "18:00 (Kids) • 19:00 (Fem) • 20:00 (Adulto)",
    modality: "Krav Maga (Defesa Pessoal)",
    level: "Kids, Feminino e Adulto",
    days: "Segunda-feira",
    shift: "evening",
  },
  {
    time: "18:00 (Kids)",
    modality: "Krav Maga Kids",
    level: "Infantil e Disciplina",
    days: "Terça e Quinta",
    shift: "afternoon",
    tag: "Kids",
  },
  {
    time: "19:00 (Feminino) • 20:00 (Adulto)",
    modality: "Krav Maga Defesa Urbana",
    level: "Feminino & Adulto",
    days: "Quarta-feira",
    shift: "evening",
  },
  {
    time: "18:00 (Fem) • 19:00 (JKD / Krav Maga)",
    modality: "Krav Maga & JKD Tático",
    level: "Defesa Pessoal e Tática",
    days: "Sexta-feira",
    shift: "evening",
  },

  // Jeet Kune Do
  {
    time: "19:00",
    modality: "Jeet Kune Do (JKD)",
    level: "Combate Tático e Defesa",
    days: "Terça e Quinta",
    shift: "evening",
  },
  {
    time: "19:00 (JKD / Krav Maga Integrado)",
    modality: "Jeet Kune Do / Krav Maga",
    level: "Combate Urbano e Defesa",
    days: "Sexta-feira",
    shift: "evening",
  },
];
