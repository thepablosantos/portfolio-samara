import { Calendar, Trophy, TrendingUp, Target, Sparkles } from 'lucide-react';

type InstagramItemType = 'reel' | 'post';

interface InstagramItem {
  id: string;
  url: string;
  embedUrl: string;
  type: InstagramItemType;
}

interface InstagramGroup {
  id: string;
  label: string;
  description: string;
  items: InstagramItem[];
}

const instagramGallery: InstagramGroup[] = [
  {
    id: 'point',
    label: 'Point Intercâmbios',
    description: 'Estratégia de social media e crescimento orgânico para programas de intercâmbio.',
    items: [
      {
        id: 'point-1',
        url: 'https://www.instagram.com/reel/DQwtvtYivuS/?igsh=MXVidnBtYmp2YjJjMw==',
        embedUrl: 'https://www.instagram.com/reel/DQwtvtYivuS/embed',
        type: 'reel',
      },
      {
        id: 'point-2',
        url: 'https://www.instagram.com/reel/DL2byKWuPm4/?igsh=ZjZ3cTN4Z245bmpz',
        embedUrl: 'https://www.instagram.com/reel/DL2byKWuPm4/embed',
        type: 'reel',
      },
      {
        id: 'point-3',
        url: 'https://www.instagram.com/reel/DQ4cBJrjrUX/?igsh=aTdkc3AwbnhuMWQ2',
        embedUrl: 'https://www.instagram.com/reel/DQ4cBJrjrUX/embed',
        type: 'reel',
      },
    ],
  },
  {
    id: 'smc',
    label: 'Secretaria Municipal de Cultura de São Paulo',
    description: 'Campanhas institucionais e cobertura digital da programação cultural da cidade de São Paulo.',
    items: [
      {
        id: 'smc-1',
        url: 'https://www.instagram.com/reel/C7O3e1Ruref/?igsh=MXhsanI4Mnh2eno1cw==',
        embedUrl: 'https://www.instagram.com/reel/C7O3e1Ruref/embed',
        type: 'reel',
      },
      {
        id: 'smc-2',
        url: 'https://www.instagram.com/reel/C7IoMQZu5wZ/?igsh=MWc3N2V6aG80cDU5eA==',
        embedUrl: 'https://www.instagram.com/reel/C7IoMQZu5wZ/embed',
        type: 'reel',
      },
      {
        id: 'smc-3',
        url: 'https://www.instagram.com/reel/C4-hS6KrmZw/?igsh=ampmMXZtMjd4aThp',
        embedUrl: 'https://www.instagram.com/reel/C4-hS6KrmZw/embed',
        type: 'reel',
      },
    ],
  },
  {
    id: 'dra-ju',
    label: 'Dra. Juliana – Clínica Capilar e Tricologia',
    description: 'Posicionamento de autoridade médica e conteúdo educativo em saúde capilar.',
    items: [
      {
        id: 'dra-ju-1',
        url: 'https://www.instagram.com/reel/DPrkgItkUjE/?igsh=MW4xNjF3YmE5cGtmNQ==',
        embedUrl: 'https://www.instagram.com/reel/DPrkgItkUjE/embed',
        type: 'reel',
      },
      {
        id: 'dra-ju-2',
        url: 'https://www.instagram.com/reel/DM_URZbRBSi/?igsh=MTI2dXl3OGhvN2dmMQ==',
        embedUrl: 'https://www.instagram.com/reel/DM_URZbRBSi/embed',
        type: 'reel',
      },
      {
        id: 'dra-ju-3',
        url: 'https://www.instagram.com/reel/DLqJ-DKRWWM/?igsh=MXh6aGQ4cHphcG9vcg==',
        embedUrl: 'https://www.instagram.com/reel/DLqJ-DKRWWM/embed',
        type: 'reel',
      },
    ],
  },
  {
    id: 'iiman',
    label: 'Iiman',
    description: 'Planejamento estratégico de conteúdo e lançamentos digitais para líderes, empreendedores e autores.',
    items: [
      {
        id: 'iiman-1',
        url: 'https://www.instagram.com/reel/DVWvbzLDzS5/?igsh=MXBodjdqM2RvbXgzZA==',
        embedUrl: 'https://www.instagram.com/reel/DVWvbzLDzS5/embed',
        type: 'reel',
      },
      {
        id: 'iiman-2',
        url: 'https://www.instagram.com/p/CU6BHHOtYtz/?igsh=MW0yMm1nN29oMDU4dA==',
        embedUrl: 'https://www.instagram.com/p/CU6BHHOtYtz/embed',
        type: 'post',
      },
      {
        id: 'iiman-3',
        url: 'https://www.instagram.com/reel/CQb-1mhBWi2/?igsh=Nnl5YXNhZGJ1dDMx',
        embedUrl: 'https://www.instagram.com/reel/CQb-1mhBWi2/embed',
        type: 'reel',
      },
    ],
  },
  {
    id: 'nakato',
    label: 'Nakato Sushi',
    description: 'Marketing digital para redes de restaurantes e franquias focado em crescimento e marca.',
    items: [
      {
        id: 'nakato-1',
        url: 'https://www.instagram.com/p/CwfcTPJOQKT/?igsh=ZG84cjV3dDQ4M2t2',
        embedUrl: 'https://www.instagram.com/p/CwfcTPJOQKT/embed',
        type: 'post',
      },
      {
        id: 'nakato-2',
        url: 'https://www.instagram.com/p/CGir_Gzp9v0/?igsh=ZjdyNnFyNjh0eGYz',
        embedUrl: 'https://www.instagram.com/p/CGir_Gzp9v0/embed',
        type: 'post',
      },
      {
        id: 'nakato-3',
        url: 'https://www.instagram.com/p/CD4okSQJaXF/?igsh=MXRtYXJ5MnVteTM5ZQ==',
        embedUrl: 'https://www.instagram.com/p/CD4okSQJaXF/embed',
        type: 'post',
      },
    ],
  },
];

interface ProjectCase {
  id: string;
  company: string;
  role: string;
  description: string;
  dutiesTitle: string;
  duties: string[];
  resultsTitle?: string;
  results?: string[];
  extraTitle?: string;
  extraItems?: string[];
  linkLabel?: string;
  linkUrl?: string;
}

const projectCases: Record<'en' | 'pt', ProjectCase[]> = {
  pt: [
    {
      id: 'smc',
      company: 'Secretaria Municipal de Cultura de São Paulo',
      role: 'Liderança da estratégia de Social Media e gestão da equipe responsável pelas redes sociais.',
      description:
        'Gestão estratégica da comunicação digital institucional, com foco na divulgação de programas culturais, eventos e artistas da cidade de São Paulo.',
      dutiesTitle: 'Principais atuações',
      duties: [
        'Gestão do perfil @smculturasp e co-gestão de múltiplos canais institucionais (Instagram, Facebook, TikTok e X)',
        'Planejamento editorial e definição de linhas estratégicas de conteúdo',
        'Coordenação da equipe de social media e organização de fluxos de trabalho',
        'Cobertura digital de grandes eventos culturais, incluindo a Virada Cultural',
        'Monitoramento de métricas e otimização de performance',
        'Gestão de interações e estratégia de SAC 2.0',
      ],
      resultsTitle: 'Resultados',
      results: [
        '+200 mil seguidores na comunidade digital',
        'Alcance médio superior a 1 milhão de contas por mês',
        'Comunicação digital integrada para mais de 170 equipamentos culturais da cidade',
      ],
      linkLabel: 'Instagram @smculturasp',
      linkUrl: 'https://www.instagram.com/smculturasp/',
    },
    {
      id: 'iiman',
      company: 'Agência IIMAN',
      role: 'Planejamento estratégico de conteúdo e coordenação de projetos digitais.',
      description:
        'Atuação em agência responsável por estratégias de marketing digital e conteúdo para executivos, empreendedores e autores, com foco em fortalecimento de marca pessoal, crescimento de audiência e lançamentos digitais.',
      dutiesTitle: 'Principais atuações',
      duties: [
        'Planejamento e execução de estratégias de conteúdo para Instagram, Facebook, LinkedIn e Telegram',
        'Coordenação da produção de conteúdo e revisão editorial',
        'Gestão de fluxos de projetos e alinhamento com diferentes áreas internas',
        'Monitoramento de campanhas e análise de métricas de performance',
        'Planejamento e execução de eventos digitais durante a pandemia',
      ],
      resultsTitle: 'Destaque',
      results: ['Planejamento de lançamento digital de livro que alcançou Top 1 na Amazon em sua categoria'],
      extraTitle: 'Contas atendidas',
      extraItems: [
        'Arthur Rufino — CEO da Octa e autor',
        'André Barrence — Director, Google for Startups LATAM',
        'Felipe Siqueira — Empreendedor em Retail & Tecnologia',
        'Hendel Favarin e Josef Rubin — Co-fundadores da Escola Conquer',
        'JR Diesel — Maior empresa de reciclagem automotiva da América Latina',
      ],
    },
    {
      id: 'refato',
      company: 'Refato Assessoria Empresarial',
      role: 'Supervisão de marketing digital e gestão de estratégias de social media.',
      description:
        'Atuação estratégica na estruturação e gestão do marketing digital para redes de restaurantes em modelo de franquia, com foco em crescimento de audiência, fortalecimento de marca e resultados comerciais.',
      dutiesTitle: 'Principais atuações',
      duties: [
        'Estruturação da área de marketing e organização de processos internos e fluxos de trabalho',
        'Supervisão da estratégia de comunicação para mais de 30 contas e mais de 10 perfis de restaurantes',
        'Planejamento e execução de campanhas promocionais e ações sazonais voltadas a aumento de pedidos e reservas',
        'Desenvolvimento de estratégias de conteúdo para redes sociais',
        'Gestão de parcerias com influenciadores e canais promocionais',
        'Estruturação de atendimento ao cliente via SAC 2.0 e mensagens diretas',
        'Planejamento e otimização de campanhas em Google Ads e Facebook Ads',
        'Monitoramento de métricas e análise de performance para otimização contínua das campanhas',
      ],
      resultsTitle: 'Resultados',
      results: [
        'Crescimento de 80% na base de seguidores',
        'Aumento de 30% no alcance das páginas',
        'Mais de 1.000 downloads do aplicativo durante campanhas promocionais',
      ],
    },
    {
      id: 'point',
      company: 'Point Intercâmbios',
      role: 'Senior Social Media Strategist.',
      description:
        'Responsável pela estratégia de social media e crescimento digital da marca, com foco em posicionamento, recuperação de alcance orgânico e geração de leads para programas de intercâmbio.',
      dutiesTitle: 'Principais atuações',
      duties: [
        'Planejamento e execução da estratégia de social media orientada a crescimento e geração de leads',
        'Gestão completa da produção de conteúdo (roteiro, copy, edição de vídeo e publicação)',
        'Reposicionamento de perfil penalizado por shadowban, recuperando alcance orgânico',
        'Estruturação de estratégia de conteúdo conectada ao funil de conversão',
        'Coordenação da agência responsável pelas campanhas de mídia paga',
        'Monitoramento de métricas e análise de performance',
      ],
      resultsTitle: 'Resultados',
      results: [
        '+4.000 novos seguidores durante o período do projeto',
        'Recuperação do alcance orgânico após penalização da conta',
        'Média de 5 leads qualificados por dia via canais orgânicos',
        'Comunidade altamente engajada com aumento de interações, compartilhamentos e salvamentos',
      ],
      linkLabel: 'Instagram @pointintercambios',
      linkUrl: 'https://www.instagram.com/pointintercambios?igsh=dWJ2bmpieGdqOTBs',
    },
    {
      id: 'dra-juliana',
      company: 'Dra. Juliana — Clínica Capilar e Tricologia',
      role: 'Gestão completa de Social Media e estratégia de conteúdo.',
      description:
        'Gestão estratégica de redes sociais com foco em educação do público, fortalecimento de autoridade médica e geração de novos pacientes para a clínica.',
      dutiesTitle: 'Principais atuações',
      duties: [
        'Planejamento estratégico de conteúdo para Instagram',
        'Produção e publicação de conteúdos educativos sobre saúde capilar e tricologia',
        'Posicionamento digital voltado para construção de autoridade médica',
        'Estratégia de conteúdo focada em conversão para consultas na clínica',
        'Gestão da comunidade e interação com pacientes',
      ],
      resultsTitle: 'Resultados',
      results: [
        '+54 mil novos seguidores no Instagram em 8 meses',
        '33 novos pacientes gerados a partir da presença digital',
        'Crescimento da autoridade da profissional no segmento de tricologia e dermatologia capilar',
      ],
      linkLabel: 'Instagram @drajulianadermato',
      linkUrl: 'https://www.instagram.com/drajulianadermato/',
    },
  ],
  en: [
    {
      id: 'smc',
      company: 'São Paulo Municipal Department of Culture',
      role: 'Lead Social Media Strategist and team manager.',
      description:
        'Strategic management of institutional digital communication, focused on promoting cultural programs, events and artists across the city of São Paulo.',
      dutiesTitle: 'Key Responsibilities',
      duties: [
        'Managing @smculturasp and co-managing multiple institutional channels (Instagram, Facebook, TikTok and X)',
        'Editorial planning and definition of strategic content pillars',
        'Coordinating the social media team and organizing internal workflows',
        'Digital coverage of major cultural events, including Virada Cultural',
        'Monitoring metrics and optimizing performance',
        'Managing interactions and SAC 2.0 strategy',
      ],
      resultsTitle: 'Results',
      results: [
        '+200K followers in the digital community',
        'Average reach above 1M accounts per month',
        'Integrated digital communication for more than 170 cultural venues across the city',
      ],
      linkLabel: 'Instagram @smculturasp',
      linkUrl: 'https://www.instagram.com/smculturasp/',
    },
    {
      id: 'iiman',
      company: 'IIMAN Agency',
      role: 'Strategic content planner and digital projects coordinator.',
      description:
        'Worked at an agency focused on digital marketing and content for executives, entrepreneurs and authors, strengthening personal brands, growing audiences and launching digital products.',
      dutiesTitle: 'Key Responsibilities',
      duties: [
        'Planning and executing content strategies for Instagram, Facebook, LinkedIn and Telegram',
        'Coordinating content production and editorial review',
        'Managing project workflows and alignment across internal teams',
        'Monitoring campaigns and analyzing performance metrics',
        'Planning and executing digital events during the pandemic',
      ],
      resultsTitle: 'Highlight',
      results: ['Launch strategy for a book that reached Top 1 on Amazon in its category'],
      extraTitle: 'Selected Clients',
      extraItems: [
        'Arthur Rufino — CEO at Octa and author',
        'André Barrence — Director, Google for Startups LATAM',
        'Felipe Siqueira — Entrepreneur in Retail & Technology',
        'Hendel Favarin & Josef Rubin — Co-founders at Escola Conquer',
        'JR Diesel — Largest automotive recycling company in Latin America',
      ],
    },
    {
      id: 'refato',
      company: 'Refato Assessoria Empresarial',
      role: 'Digital marketing supervisor and social media strategy lead.',
      description:
        'Strategic role in structuring and managing digital marketing for restaurant franchise networks, focused on audience growth, brand strength and commercial results.',
      dutiesTitle: 'Key Responsibilities',
      duties: [
        'Structuring the marketing area and organizing internal processes and workflows',
        'Supervising communication strategy for 30+ accounts and 10+ restaurant profiles',
        'Planning and executing promotional campaigns and seasonal actions to increase orders and reservations',
        'Developing content strategies for social media',
        'Managing partnerships with influencers and promotional channels',
        'Structuring customer service via SAC 2.0 and direct messages',
        'Planning and optimizing Google Ads and Facebook Ads campaigns',
        'Monitoring metrics and performance for continuous optimization',
      ],
      resultsTitle: 'Results',
      results: [
        '80% growth in followers base',
        '30% increase in page reach',
        'More than 1,000 app downloads during promotional campaigns',
      ],
    },
    {
      id: 'point',
      company: 'Point Intercâmbios',
      role: 'Senior Social Media Strategist.',
      description:
        'Responsible for social media strategy and digital growth, focused on positioning, recovering organic reach and generating leads for exchange programs.',
      dutiesTitle: 'Key Responsibilities',
      duties: [
        'Planning and executing social media strategy focused on growth and lead generation',
        'Full management of content production (script, copy, video editing and publishing)',
        'Repositioning an account penalized by shadowban, recovering organic reach',
        'Structuring content strategy connected to the conversion funnel',
        'Coordinating the agency responsible for paid media campaigns',
        'Monitoring metrics and performance analysis',
      ],
      resultsTitle: 'Results',
      results: [
        '+4,000 new followers during the project period',
        'Organic reach recovery after account penalization',
        'Average of 5 qualified leads per day via organic channels',
        'Highly engaged community with increased interactions, shares and saves',
      ],
      linkLabel: 'Instagram @pointintercambios',
      linkUrl: 'https://www.instagram.com/pointintercambios?igsh=dWJ2bmpieGdqOTBs',
    },
    {
      id: 'dra-juliana',
      company: 'Dr. Juliana — Hair Clinic & Trichology',
      role: 'Full Social Media management and content strategy.',
      description:
        'Strategic social media management focused on educating the audience, building medical authority and generating new patients for the clinic.',
      dutiesTitle: 'Key Responsibilities',
      duties: [
        'Strategic content planning for Instagram',
        'Producing and publishing educational content on hair health and trichology',
        'Digital positioning focused on medical authority building',
        'Content strategy focused on converting followers into clinic appointments',
        'Community management and interaction with patients',
      ],
      resultsTitle: 'Results',
      results: [
        '+54K new followers on Instagram in 8 months',
        '33 new patients generated from digital presence',
        'Increased authority in trichology and hair dermatology',
      ],
      linkLabel: 'Instagram @drajulianadermato',
      linkUrl: 'https://www.instagram.com/drajulianadermato/',
    },
  ],
};

interface ProjectsProps {
  language: 'en' | 'pt';
}

const Projects = ({ language }: ProjectsProps) => {
  const content = {
    en: {
      title: "Campaign Gallery",
      subtitle: "A visual gallery of strategic campaigns, social content and brand-building projects.",
      galleryTitle: "Campaign Gallery",
      gallerySubtitle: "A curated selection of social media campaigns, launches and content productions for different brands.",
      projects: [
        {
          title: "Cultura Viva SP Campaign",
          company: "São Paulo Municipal Department of Culture",
          period: "2024",
          category: "Cultural Engagement",
          description: "Comprehensive digital campaign promoting cultural programming and local artists across São Paulo's cultural venues and public spaces.",
          achievements: [
            "Created and executed multi-platform engagement strategy with local artists",
            "Developed authentic storytelling focused on cultural diversity",
            "Achieved 35% increase in organic engagement across all platforms",
            "Generated 20,000+ organic interactions in one week",
            "Strengthened city's cultural identity through digital narratives"
          ],
          metrics: [
            { label: "Engagement Increase", value: "+35%" },
            { label: "Organic Reach", value: "20K+" },
            { label: "Platform Coverage", value: "5+" }
          ],
          tags: ["Cultural Marketing", "Organic Growth", "Storytelling", "Community Engagement"]
        },
        {
          title: "Global Brand Launch – Dubai",
          company: "Vitta Gold Cosmetics",
          period: "2022",
          category: "International Marketing",
          description: "Strategic brand activation and product launch at Beautyworld Middle East Dubai, targeting international distributors and B2B partners.",
          achievements: [
            "Developed comprehensive pre-launch digital strategy",
            "Created multilingual content for international markets",
            "Coordinated real-time event coverage and live engagement",
            "Generated qualified leads from 12+ countries",
            "Established brand presence in Middle Eastern market"
          ],
          metrics: [
            { label: "Countries Reached", value: "12+" },
            { label: "B2B Leads", value: "50+" },
            { label: "Content Pieces", value: "100+" }
          ],
          tags: ["Global Marketing", "B2B", "Event Marketing", "Content Production"]
        },
        {
          title: "Circular Economy Brand Repositioning",
          company: "Octa",
          period: "2022-2023",
          category: "Brand Strategy",
          description: "Complete brand identity redesign and digital strategy overhaul for sustainability-focused B2B company, establishing thought leadership in circular economy.",
          achievements: [
            "Redefined brand visual identity and messaging architecture",
            "Created thought leadership content strategy on LinkedIn",
            "Positioned company as circular economy industry reference",
            "Increased LinkedIn engagement by 120%",
            "Developed automated email nurturing flows"
          ],
          metrics: [
            { label: "LinkedIn Growth", value: "+120%" },
            { label: "Brand Awareness", value: "+85%" },
            { label: "Lead Quality", value: "+60%" }
          ],
          tags: ["Brand Identity", "B2B Marketing", "Thought Leadership", "Sustainability"]
        }
      ]
    },
    pt: {
      title: "Projetos",
      subtitle: "Galeria de campanhas e projetos em mídias sociais para diferentes marcas.",
      galleryTitle: "Campaign Gallery",
      gallerySubtitle: "Seleção visual de campanhas em redes sociais, lançamentos e produções de conteúdo.",
      projects: [
        {
          title: "Campanha Cultura Viva SP",
          company: "Secretaria Municipal de Cultura de São Paulo",
          period: "2024",
          category: "Engajamento Cultural",
          description: "Campanha digital abrangente promovendo programação cultural e artistas locais nos espaços culturais e públicos de São Paulo.",
          achievements: [
            "Criação e execução de estratégia de engajamento multiplataforma com artistas locais",
            "Desenvolvimento de storytelling autêntico focado em diversidade cultural",
            "Alcançado aumento de 35% em engajamento orgânico em todas as plataformas",
            "Gerado 20.000+ interações orgânicas em uma semana",
            "Fortalecimento da identidade cultural da cidade através de narrativas digitais"
          ],
          metrics: [
            { label: "Aumento de Engajamento", value: "+35%" },
            { label: "Alcance Orgânico", value: "20K+" },
            { label: "Cobertura de Plataformas", value: "5+" }
          ],
          tags: ["Marketing Cultural", "Crescimento Orgânico", "Storytelling", "Engajamento Comunitário"]
        },
        {
          title: "Lançamento Global de Marca – Dubai",
          company: "Vitta Gold Cosmetics",
          period: "2022",
          category: "Marketing Internacional",
          description: "Ativação estratégica de marca e lançamento de produto na Beautyworld Middle East Dubai, visando distribuidores internacionais e parceiros B2B.",
          achievements: [
            "Desenvolvida estratégia digital abrangente pré-lançamento",
            "Criado conteúdo multilíngue para mercados internacionais",
            "Coordenada cobertura de evento em tempo real e engajamento ao vivo",
            "Gerados leads qualificados de 12+ países",
            "Estabelecida presença da marca no mercado do Oriente Médio"
          ],
          metrics: [
            { label: "Países Alcançados", value: "12+" },
            { label: "Leads B2B", value: "50+" },
            { label: "Peças de Conteúdo", value: "100+" }
          ],
          tags: ["Marketing Global", "B2B", "Marketing de Eventos", "Produção de Conteúdo"]
        },
        {
          title: "Reposicionamento de Marca - Economia Circular",
          company: "Octa",
          period: "2022-2023",
          category: "Estratégia de Marca",
          description: "Redesign completo de identidade de marca e reformulação de estratégia digital para empresa B2B focada em sustentabilidade, estabelecendo liderança de pensamento em economia circular.",
          achievements: [
            "Redefinida identidade visual e arquitetura de mensagens da marca",
            "Criada estratégia de conteúdo de liderança de pensamento no LinkedIn",
            "Posicionada empresa como referência do setor em economia circular",
            "Aumentado engajamento no LinkedIn em 120%",
            "Desenvolvidos fluxos automatizados de nutrição por e-mail"
          ],
          metrics: [
            { label: "Crescimento LinkedIn", value: "+120%" },
            { label: "Conhecimento de Marca", value: "+85%" },
            { label: "Qualidade de Leads", value: "+60%" }
          ],
          tags: ["Identidade de Marca", "Marketing B2B", "Liderança de Pensamento", "Sustentabilidade"]
        }
      ]
    }
  };

  const t = content[language];
  const cases = projectCases[language];

  const instagramGroupsById = instagramGallery.reduce<Record<string, InstagramGroup>>((acc, group) => {
    acc[group.id] = group;
    return acc;
  }, {});

  const projectToInstagramId: Record<string, string> = {
    smc: 'smc',
    iiman: 'iiman',
    refato: 'nakato',
    point: 'point',
    'dra-juliana': 'dra-ju',
  };

  return (
    <section id="projects" className="py-24 px-6 bg-neutral-lightCream/50 dark:bg-neutral-darkGreen/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-darkGreen dark:text-neutral-lightCream mb-4">
            {t.title}
          </h2>
          <p className="text-neutral-darkGreen/70 dark:text-neutral-softGray text-lg max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-10 mb-16">
          {cases.map(project => (
            <div
              key={project.id}
              className="bg-neutral-lightCream dark:bg-neutral-deepBlack border-2 border-neutral-sage/30 dark:border-neutral-darkGreen rounded-3xl p-8 md:p-10 hover:border-primary-coral dark:hover:border-primary-coral transition-all"
            >
              {(() => {
                const instagramGroupId = projectToInstagramId[project.id];
                const instagramGroup = instagramGroupId ? instagramGroupsById[instagramGroupId] : undefined;
                return (
                  <>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-darkGreen dark:text-neutral-lightCream">
                    {project.company}
                  </h3>
                  <p className="text-primary-coral dark:text-primary-sand font-medium">
                    {project.role}
                  </p>
                  <p className="text-neutral-darkGreen/70 dark:text-neutral-softGray leading-relaxed">
                    {project.description}
                  </p>
                </div>
                {project.linkUrl && (
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full border border-primary-coral text-primary-coral dark:text-primary-sand dark:border-primary-sand hover:bg-primary-coral hover:text-white dark:hover:bg-primary-sand dark:hover:text-neutral-deepBlack transition-colors whitespace-nowrap"
                  >
                    {project.linkLabel}
                  </a>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-neutral-darkGreen dark:text-neutral-sage mb-3">
                    {project.dutiesTitle}
                  </h4>
                  <ul className="space-y-2 text-sm text-neutral-darkGreen/80 dark:text-neutral-softGray">
                    {project.duties.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 text-primary-coral dark:text-primary-sand">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  {project.results && project.resultsTitle && (
                    <div className="p-4 bg-primary-sand/10 dark:bg-primary-coral/10 border border-primary-sand/60 dark:border-primary-coral/60 rounded-2xl">
                      <h4 className="text-sm font-semibold text-neutral-darkGreen dark:text-neutral-lightCream mb-3">
                        {project.resultsTitle}
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-darkGreen/80 dark:text-neutral-softGray">
                        {project.results.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="mt-1 text-primary-coral dark:text-primary-sand">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.extraItems && project.extraTitle && (
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-darkGreen dark:text-neutral-sage mb-3">
                        {project.extraTitle}
                      </h4>
                      <ul className="space-y-1.5 text-sm text-neutral-darkGreen/80 dark:text-neutral-softGray">
                        {project.extraItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

                  {instagramGroup && (
                    <div className="mt-10 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <p className="mt-1 text-xs sm:text-sm text-neutral-darkGreen/70 dark:text-neutral-softGray">
                            {instagramGroup.description}
                          </p>
                        </div>
                        <span className="text-xs uppercase tracking-wide text-neutral-sage dark:text-neutral-softGray">
                          {language === 'en' ? 'Social Campaigns' : 'Campanhas em Redes Sociais'}
                        </span>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {instagramGroup.items.map((item, index) => (
                          <div
                            key={item.id}
                            className={`border border-neutral-sage/40 dark:border-neutral-darkGreen rounded-2xl overflow-hidden shadow-sm hover:border-primary-coral/80 transition-colors ${
                              index % 2 === 0 ? 'bg-neutral-sage/30 dark:bg-neutral-darkGreen' : 'bg-neutral-lightCream dark:bg-neutral-deepBlack'
                            }`}
                          >
                            <div className="relative bg-neutral-softGray/30 dark:bg-neutral-darkGreen">
                              <iframe
                                src={item.embedUrl}
                                className="w-full h-80 md:h-96 border-0"
                                loading="lazy"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen
                                title={`${instagramGroup.label} – ${item.type === 'reel' ? 'Reel' : 'Post'} no Instagram`}
                              />
                            </div>
                            <div className="p-4 flex items-center justify-between">
                              <div>
                                <p className="text-sm font-medium text-neutral-darkGreen dark:text-neutral-lightCream">
                                  {instagramGroup.label}
                                </p>
                                <p className="text-xs text-neutral-sage dark:text-neutral-softGray capitalize">
                                  {item.type === 'reel'
                                    ? language === 'en' ? 'Reel' : 'Reel no Instagram'
                                    : language === 'en' ? 'Feed post' : 'Post no feed'}
                                </p>
                              </div>
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-semibold text-primary-coral dark:text-primary-sand hover:underline"
                              >
                                {language === 'en' ? 'View post' : 'Ver no Instagram'}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  </>
                );
              })()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
