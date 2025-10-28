import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceProps {
  language: 'en' | 'pt';
}

const Experience = ({ language }: ExperienceProps) => {
  const content = {
    en: {
      title: "Experience",
      subtitle: "Building innovative solutions and driving measurable impact",
      experiences: [
        {
          company: "Point Intercâmbios",
          role: "Marketing & Social Media Specialist",
          period: "Jan 2025 – Present",
          location: "Remote",
          achievements: [
            "Developing content strategies and digital campaigns for the international exchange market",
            "Planning and managing social media with focus on lead generation and brand strengthening",
            "Creating email marketing campaigns and targeted ads (Google Ads and Meta Ads)",
            "Producing visual and institutional materials for commercial actions",
            "Analyzing metrics and optimizing digital performance"
          ],
          skills: ["Lead Generation", "Google Ads", "Meta Ads", "Email Marketing", "Content Strategy"]
        },
        {
          company: "São Paulo Municipal Department of Culture",
          role: "Social Media Marketing Specialist",
          period: "Nov 2023 – Jun 2024",
          location: "São Paulo, Brazil",
          achievements: [
            "Strategic planning and execution of digital communication strategy",
            "Coordinating social media team and managing internal demands",
            "Real-time coverage of cultural events and audiovisual content production",
            "Development of campaigns and advertising scripts",
            "Partnerships with influencers and organic engagement actions",
            "Crisis management and 2.0 customer service",
            "Metrics analysis and strategic reporting"
          ],
          skills: ["Team Leadership", "Event Coverage", "Crisis Management", "Influencer Relations", "Analytics"]
        },
        {
          company: "Octa – Circular Economy",
          role: "Social Media Marketing Specialist",
          period: "Jun 2022 – Apr 2023",
          location: "São Paulo, Brazil",
          achievements: [
            "Redefining visual identity and institutional brand strengthening",
            "Strategy and content creation for social media (LinkedIn, Instagram, YouTube)",
            "Planning email marketing campaigns and automation",
            "Creating commercial and visual materials for fairs and events",
            "Managing creative suppliers and partners"
          ],
          skills: ["Brand Identity", "B2B Marketing", "Email Automation", "Event Marketing", "Vendor Management"]
        },
        {
          company: "Vitta Gold Cosmetics",
          role: "Social Media Marketing Specialist",
          period: "Oct 2021 – May 2022",
          location: "São Paulo, Brazil",
          achievements: [
            "Strategic planning for global campaigns and product launches",
            "Content management for international representatives and commercial partners",
            "Brand activation at Beautyworld Middle East Dubai",
            "Planning and monitoring paid media (Google Ads and Facebook Ads)",
            "Performance reports and continuous campaign optimization"
          ],
          skills: ["Global Campaigns", "Product Launch", "International Marketing", "Trade Shows", "Paid Media"]
        },
        {
          company: "IIMAN Agency",
          role: "Social Media Marketing Specialist",
          period: "Mar 2021 – Oct 2021",
          location: "São Paulo, Brazil",
          achievements: [
            "Strategic planning and digital content coordination",
            "Campaign monitoring and performance KPI definition",
            "Creating and validating content for social media",
            "Relationship management with talents and influencers"
          ],
          skills: ["Content Coordination", "KPI Management", "Talent Management", "Agency Operations"]
        }
      ]
    },
    pt: {
      title: "Experiência",
      subtitle: "Construindo soluções inovadoras e impulsionando impacto mensurável",
      experiences: [
        {
          company: "Point Intercâmbios",
          role: "Especialista em Marketing / Social Media",
          period: "Jan 2025 – Atual",
          location: "Remoto",
          achievements: [
            "Desenvolvimento de estratégias de conteúdo e campanhas digitais para o mercado de intercâmbio",
            "Planejamento e gestão de redes sociais com foco em geração de leads e fortalecimento de marca",
            "Criação de campanhas de e-mail marketing e anúncios segmentados (Google Ads e Meta Ads)",
            "Produção de materiais visuais e institucionais para ações comerciais",
            "Análise de métricas e otimização de performance digital"
          ],
          skills: ["Geração de Leads", "Google Ads", "Meta Ads", "Email Marketing", "Estratégia de Conteúdo"]
        },
        {
          company: "Secretaria Municipal de Cultura de São Paulo",
          role: "Especialista em Social Media Marketing",
          period: "Nov 2023 – Jun 2024",
          location: "São Paulo, Brasil",
          achievements: [
            "Planejamento e execução da estratégia de comunicação digital",
            "Coordenação da equipe de redes sociais e gestão de demandas internas",
            "Cobertura de eventos culturais em tempo real e produção de conteúdo audiovisual",
            "Desenvolvimento de campanhas e roteiros publicitários",
            "Parcerias com influenciadores e ações de engajamento orgânico",
            "Gestão de crises e atendimento SAC 2.0",
            "Análise de métricas e apresentação de relatórios estratégicos"
          ],
          skills: ["Liderança de Equipe", "Cobertura de Eventos", "Gestão de Crises", "Relações com Influenciadores", "Analytics"]
        },
        {
          company: "Octa – Economia Circular",
          role: "Especialista em Social Media Marketing",
          period: "Jun 2022 – Abr 2023",
          location: "São Paulo, Brasil",
          achievements: [
            "Redefinição da identidade visual e fortalecimento de marca institucional",
            "Estratégia e criação de conteúdo para redes sociais (LinkedIn, Instagram, YouTube)",
            "Planejamento de campanhas de e-mail marketing e automação",
            "Criação de materiais comerciais e visuais para feiras e eventos",
            "Gestão de fornecedores e parceiros criativos"
          ],
          skills: ["Identidade de Marca", "Marketing B2B", "Automação de Email", "Marketing de Eventos", "Gestão de Fornecedores"]
        },
        {
          company: "Vitta Gold Cosmetics",
          role: "Especialista em Social Media Marketing",
          period: "Out 2021 – Mai 2022",
          location: "São Paulo, Brasil",
          achievements: [
            "Planejamento estratégico de campanhas globais e de lançamentos de produtos",
            "Gestão de conteúdo para representantes internacionais e parceiros comerciais",
            "Ativação da marca na Beautyworld Middle East Dubai",
            "Planejamento e acompanhamento de mídia paga (Google Ads e Facebook Ads)",
            "Relatórios de desempenho e otimização contínua das campanhas"
          ],
          skills: ["Campanhas Globais", "Lançamento de Produtos", "Marketing Internacional", "Feiras", "Mídia Paga"]
        },
        {
          company: "Agência IIMAN",
          role: "Especialista em Social Media Marketing",
          period: "Mar 2021 – Out 2021",
          location: "São Paulo, Brasil",
          achievements: [
            "Planejamento estratégico e coordenação de conteúdo digital",
            "Acompanhamento de campanhas e definição de KPIs de performance",
            "Criação e validação de conteúdo para redes sociais",
            "Gestão de relacionamento com talentos e influenciadores"
          ],
          skills: ["Coordenação de Conteúdo", "Gestão de KPIs", "Gestão de Talentos", "Operações de Agência"]
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="experience" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-cyan-600 hidden md:block" />

          <div className="space-y-12">
            {t.experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="hidden md:flex absolute left-0 w-16 h-16 bg-teal-500 rounded-full items-center justify-center shadow-lg z-10">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                <div className="md:ml-24 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-teal-500 dark:hover:border-teal-500 transition-all group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-teal-600 dark:text-teal-400 font-medium mb-3">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2" />
                      {language === 'en' ? 'Key Achievements' : 'Principais Conquistas'}
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                          <span className="text-teal-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 text-xs font-medium rounded-full border border-teal-200 dark:border-teal-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
