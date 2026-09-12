export interface Modality {
  id: string;
  name: string;
  category: "striking" | "grappling" | "defense" | "kids";
  categoryLabel: string;
  tagline: string;
  description: string;
  intensity: "Média" | "Alta" | "Muito Alta";
  caloriesBurn: string;
  badge?: string;
  benefits: string[];
  targetAudience: string[];
  equipmentNeeded: string[];
  instructor: string;
  iconName: "Swords" | "Flame" | "Shield" | "Zap" | "Sparkles" | "Activity";
  accentColor: string;
  imageUrl: string;
}

export const MODALITIES_CATEGORIES = [
  { id: "all", label: "Todas as Modalidades" },
  { id: "striking", label: "Trocação & Queima" },
  { id: "grappling", label: "Luta de Chão & Submissão" },
  { id: "defense", label: "Defesa Pessoal & Tática" },
  { id: "kids", label: "Turmas Infantis (Kids)" },
] as const;

export const MODALITIES: Modality[] = [
  {
    id: "boxe-tradicional",
    name: "Boxe Tradicional (Nobre Arte)",
    category: "striking",
    categoryLabel: "Trocação & Queima",
    tagline: "Agilidade felina, potência no golpe e queima calórica brutal.",
    description:
      "A nobre arte focada na mecânica perfeita do soco, esquivas elusivas, footwork implacável e condicionamento cardiovascular de nível elite. Ideal para quem busca perder peso rápido, aliviar o estresse da rotina e dominar o combate de punhos.",
    intensity: "Alta",
    caloriesBurn: "Até 900 kcal/h",
    badge: "Alta Queima Calórica",
    benefits: [
      "Queima extrema de gordura e definição de braços, core e ombros",
      "Coordenação motora, tempo de reação e agilidade rápida",
      "Total descarrego de tensão, estresse e ansiedade diária",
      "Biomecânica correta do soco sem sobrecarga articular",
    ],
    targetAudience: [
      "Iniciantes sem histórico esportivo",
      "Quem busca emagrecimento acelerado e abdômen fortalecido",
      "Profissionais buscando descompressão e foco mental",
    ],
    equipmentNeeded: ["Luvas de boxe (14 ou 16oz)", "Bandagens", "Protetor bucal"],
    instructor: "Mestre André & Equipe Nobre Arte",
    iconName: "Flame",
    accentColor: "from-red-600/30 to-blood-950/80",
    imageUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "kickboxing-muaythai",
    name: "Muay Thai & Kickboxing",
    category: "striking",
    categoryLabel: "Trocação & Queima",
    tagline: "A arte das oito armas: caneladas devastadoras, socos e joelhadas.",
    description:
      "Treinamento contundente que une o ritmo tradicional do Muay Thai tailandês e a fluidez do Kickboxing. Desenvolva pernas e glúteos de aço, resistência pulmonar inabalável e a capacidade de golpear com máxima potência.",
    intensity: "Muito Alta",
    caloriesBurn: "Até 1000 kcal/h",
    badge: "Mais Procurada",
    benefits: [
      "Condicionamento aeróbico extremo e queima muscular uniforme",
      "Aumento drástico de flexibilidade e mobilidade de quadril",
      "Tonificação instantânea de pernas, glúteos e abdômen",
      "Espírito de luta, disciplina e superação de limites",
    ],
    targetAudience: [
      "Homens e mulheres que querem condicionamento físico de atleta",
      "Pessoas que preferem treinos dinâmicos e de alto gasto energético",
      "Interessados em autodefesa em pé com membros superiores e inferiores",
    ],
    equipmentNeeded: ["Luvas", "Bandagem", "Caneleiras", "Protetor bucal"],
    instructor: "Mestre André & Treinadores Certificados",
    iconName: "Zap",
    accentColor: "from-orange-600/30 to-blood-950/80",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "jiu-jitsu",
    name: "Jiu-Jitsu Brasileiro (BJJ)",
    category: "grappling",
    categoryLabel: "Luta de Chão & Submissão",
    tagline: "O xadrez humano: técnica sobrepujando força bruta.",
    description:
      "A arte suave comprovada mundialmente como a mais eficiente para neutralizar qualquer oponente, independente do peso ou envergadura. Aprenda alavancas mecânicas, estrangulamentos cirúrgicos, imobilizações e controle total no solo.",
    intensity: "Alta",
    caloriesBurn: "Até 800 kcal/h",
    badge: "Estratégia Pura",
    benefits: [
      "Capacidade real de neutralizar agressores maiores sem desferir socos",
      "Desenvolvimento de raciocínio rápido sob pressão extrema",
      "Fortalecimento isométrico profundo e postura corporal ereta",
      "Ambiente de camaradagem fraternal e respeito no tatame",
    ],
    targetAudience: [
      "Quem quer aprender a se defender de agressões no chão",
      "Praticantes que amam raciocínio estratégico e técnica detalhada",
      "Homens e mulheres de qualquer biotipo físico ou idade",
    ],
    equipmentNeeded: ["Kimono trançado oficial", "Faixa", "Rashguard (opcional)"],
    instructor: "Professores Faixas Pretas sob supervisão do Mestre André",
    iconName: "Swords",
    accentColor: "from-blue-600/30 to-blood-950/80",
    imageUrl: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "jeet-kune-do-defesa",
    name: "Jeet Kune Do & Defesa Urbana",
    category: "defense",
    categoryLabel: "Defesa Pessoal & Tática",
    tagline: "A essência de Bruce Lee: economia de movimento e eficácia letal.",
    description:
      "Sistema marcial moderno e direto, desprovido de regras esportivas limitantes. Focado 100% em sobrevivência urbana, leitura de ambiente, desarmamento de ameaças, saída de agarrões violentos e neutralização rápida.",
    intensity: "Média",
    caloriesBurn: "Até 650 kcal/h",
    badge: "Sobrevivência Urbana",
    benefits: [
      "Controle do pânico situacional e expansão da atenção periférica",
      "Golpes em pontos vulneráveis para neutralização em segundos",
      "Técnicas de escape contra agarrões, estrangulamentos e agressões armadas",
      "Elevação inabalável da segurança ao caminhar à noite pela cidade",
    ],
    targetAudience: [
      "Mulheres e homens focados em segurança pessoal no dia a dia",
      "Pessoas que não querem regras de ringue, apenas defesa prática e real",
      "Iniciantes sem preparo prévio que buscam autoproteção imediata",
    ],
    equipmentNeeded: ["Roupas confortáveis de treino", "Tênis limpo de tatame"],
    instructor: "Mestre André (Especialista em Combate Prático)",
    iconName: "Shield",
    accentColor: "from-amber-600/30 to-blood-950/80",
    imageUrl: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "taekwondo-kids",
    name: "Taekwondo & Turmas Infantis (Kids)",
    category: "kids",
    categoryLabel: "Turmas Infantis (Kids)",
    tagline: "Formando guerreiros gentis: respeito, foco escolar e coordenação.",
    description:
      "Metodologia lúdica e estruturada para crianças dos 4 aos 14 anos. As aulas desenvolvem elasticidade, chutes acrobáticos, controle motor e valores inegociáveis: respeito aos pais e professores, resiliência e combate ao bullying escolar.",
    intensity: "Média",
    caloriesBurn: "Até 600 kcal/h",
    badge: "Família & Futuro",
    benefits: [
      "Melhora comprovada no foco, disciplina escolar e tempo de tela reduzido",
      "Coordenação motora bilateral, agilidade e postura correta",
      "Autoconfiança para lidar com bullying de forma assertiva e calma",
      "Socialização sadia longe de celulares e sedentarismo",
    ],
    targetAudience: [
      "Crianças de 4 a 10 anos (Turma Kids)",
      "Adolescentes de 11 a 15 anos (Turma Teens)",
      "Pais que buscam disciplina, respeito e gasto saudável de energia para os filhos",
    ],
    equipmentNeeded: ["Dobok (uniforme de Taekwondo) ou camiseta oficial Urban Fight Kids"],
    instructor: "Professores Pedagógicos e Mestre André",
    iconName: "Sparkles",
    accentColor: "from-emerald-600/30 to-blood-950/80",
    imageUrl: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1000&auto=format&fit=crop",
  },
];
