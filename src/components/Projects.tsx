import { Calendar, Trophy, TrendingUp, Target, Sparkles } from 'lucide-react';

interface ProjectsProps {
  language: 'en' | 'pt';
}

const Projects = ({ language }: ProjectsProps) => {
  const content = {
    en: {
      title: "Featured Projects",
      subtitle: "Strategic campaigns and cultural initiatives that delivered measurable impact",
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
      title: "Projetos em Destaque",
      subtitle: "Campanhas estratégicas e iniciativas culturais que entregaram impacto mensurável",
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

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {t.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:border-teal-500 dark:hover:border-teal-500 transition-all group"
            >
              <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-10">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="px-4 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-sm font-semibold rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-teal-600 dark:text-teal-400 font-medium text-lg">
                      {project.company}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-teal-500" />
                      {language === 'en' ? 'Key Achievements' : 'Principais Conquistas'}
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400 text-sm">
                          <Sparkles className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl border border-teal-200 dark:border-teal-800">
                    <div className="flex items-center space-x-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {language === 'en' ? 'Impact Metrics' : 'Métricas de Impacto'}
                      </h4>
                    </div>
                    <div className="space-y-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {metric.label}
                          </span>
                          <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                    <div className="flex items-center space-x-2 mb-3">
                      <Target className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {language === 'en' ? 'Project Type' : 'Tipo de Projeto'}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
