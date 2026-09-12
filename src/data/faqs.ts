export interface FAQItem {
  question: string;
  answer: string;
  category: "iniciantes" | "seguranca" | "kids" | "estrutura";
}

export const FAQS_DATA: FAQItem[] = [
  {
    question: "Nunca lutei na vida e estou fora de forma. Posso começar agora?",
    answer:
      "Absolutamente SIM! Mais de 80% dos nossos alunos nunca tinham calçado uma luva ou pisado num tatame antes de entrar na Urban Fight. Nossa metodologia é gradual: respeitamos o seu ritmo cardiorrespiratório e a sua evolução biomecânica. Você não precisa estar em forma para começar; você começa para entrar na melhor forma da sua vida.",
    category: "iniciantes",
  },
  {
    question: "Tenho medo de me machucar. Como funcionam as primeiras aulas?",
    answer:
      "A sua segurança física é nossa prioridade absoluta. O Mestre André e nossa equipe pedagógica proíbem qualquer tipo de 'sparring pesado' para iniciantes. Nos primeiros meses, seu foco será exclusivamente em fundamentos, técnica em sacos de pancada, manoplas acolchoadas com o professor e exercícios aeróbicos controlados. Nosso ambiente é de irmandade e suporte mútuo, livre de qualquer ego.",
    category: "seguranca",
  },
  {
    question: "Como funciona a Aula Experimental Gratuita?",
    answer:
      "É 100% gratuita e sem qualquer compromisso de matrícula. Você preenche nosso formulário rápido de triagem, escolhe a modalidade e turno preferidos e nós reservamos o seu horário na recepção. Você vem com uma roupa confortável de treino, conhece a estrutura, o Mestre André e sente na pele a energia da academia antes de tomar qualquer decisão.",
    category: "iniciantes",
  },
  {
    question: "Qual é a idade mínima para as turmas infantis (Kids)?",
    answer:
      "Recebemos crianças a partir dos 4 anos de idade nas turmas de Taekwondo Kids e Jiu-Jitsu Infantil. Nossos professores utilizam dinâmicas psicomotoras lúdicas que ensinam respeito aos pais, foco para a escola, contenção de ansiedade e prevenção contra bullying de forma segura e divertida.",
    category: "kids",
  },
  {
    question: "Preciso comprar kimono ou luvas antes da aula experimental?",
    answer:
      "Não se preocupe! Para a sua primeira aula experimental gratuita, disponibilizamos materiais higienizados de apoio (luvas, manoplas de treino). Basta você comparecer com bermuda/calça de ginástica, camiseta e uma garrafinha de água. Caso decida se matricular, temos nossa loja oficial com os melhores equipamentos recomendados.",
    category: "estrutura",
  },
  {
    question: "Onde fica a academia e tem estacionamento?",
    answer:
      "Estamos na Av. Cula Mangabeira, 1497, no bairro Santo Expedito em Montes Claros - MG. Uma localização privilegiada, com facilidade de parada de veículos, iluminação de segurança e acesso rápido por todas as principais vias da cidade.",
    category: "estrutura",
  },
];
