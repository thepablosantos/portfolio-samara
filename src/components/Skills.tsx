import { Target, Share2, BarChart3, Palette, Globe as GlobeIcon, Award } from 'lucide-react';

interface SkillsProps {
  language: 'en' | 'pt';
}

const Skills = ({ language }: SkillsProps) => {
  const content = {
    en: {
      title: "Skills & Expertise",
      subtitle: "Comprehensive toolkit for building modern marketing strategies",
      categories: [
        {
          icon: Target,
          title: "Marketing & Strategy",
          color: "teal",
          skills: [
            "Campaign Planning",
            "Brand Positioning",
            "Content Strategy",
            "Lead Generation",
            "Inbound Marketing",
            "Sales Funnel",
            "Cultural Marketing",
            "SEO Basics"
          ]
        },
        {
          icon: Share2,
          title: "Social Media Management",
          color: "cyan",
          skills: [
            "Copywriting",
            "Content Curation",
            "Community Management",
            "Influencer Relations",
            "Crisis Management",
            "Social Listening",
            "Engagement Strategy",
            "Brand Voice"
          ]
        },
        {
          icon: BarChart3,
          title: "Analytics & Performance",
          color: "teal",
          skills: [
            "Google Analytics",
            "Meta Insights",
            "KPI Tracking",
            "Campaign Reporting",
            "Data Analysis",
            "A/B Testing",
            "Performance Optimization",
            "ROI Measurement"
          ]
        },
        {
          icon: Palette,
          title: "Tools & Platforms",
          color: "cyan",
          skills: [
            "Google Ads",
            "Meta Business Suite",
            "RD Station",
            "Canva",
            "CapCut",
            "Adobe Express",
            "Mailchimp",
            "Notion",
            "Trello",
            "ChatGPT"
          ]
        }
      ],
      languages: {
        title: "Languages",
        items: [
          { name: "Portuguese", level: "Native", flag: "🇧🇷" },
          { name: "English", level: "Fluent", flag: "🇬🇧" }
        ]
      },
      softSkills: {
        title: "Professional Skills",
        items: [
          "Empathetic Communication",
          "Analytical Creativity",
          "Organization",
          "Team Leadership",
          "Strategic Vision",
          "Collaboration"
        ]
      }
    },
    pt: {
      title: "Habilidades & Expertise",
      subtitle: "Kit de ferramentas completo para construir estratégias de marketing modernas",
      categories: [
        {
          icon: Target,
          title: "Marketing & Estratégia",
          color: "teal",
          skills: [
            "Planejamento de Campanhas",
            "Posicionamento de Marca",
            "Estratégia de Conteúdo",
            "Geração de Leads",
            "Inbound Marketing",
            "Funil de Vendas",
            "Marketing Cultural",
            "SEO Básico"
          ]
        },
        {
          icon: Share2,
          title: "Gestão de Mídias Sociais",
          color: "cyan",
          skills: [
            "Copywriting",
            "Curadoria de Conteúdo",
            "Gestão de Comunidade",
            "Relações com Influenciadores",
            "Gestão de Crises",
            "Social Listening",
            "Estratégia de Engajamento",
            "Tom de Voz"
          ]
        },
        {
          icon: BarChart3,
          title: "Analytics & Performance",
          color: "teal",
          skills: [
            "Google Analytics",
            "Meta Insights",
            "Monitoramento de KPIs",
            "Relatórios de Campanha",
            "Análise de Dados",
            "Testes A/B",
            "Otimização de Performance",
            "Medição de ROI"
          ]
        },
        {
          icon: Palette,
          title: "Ferramentas & Plataformas",
          color: "cyan",
          skills: [
            "Google Ads",
            "Meta Business Suite",
            "RD Station",
            "Canva",
            "CapCut",
            "Adobe Express",
            "Mailchimp",
            "Notion",
            "Trello",
            "ChatGPT"
          ]
        }
      ],
      languages: {
        title: "Idiomas",
        items: [
          { name: "Português", level: "Nativo", flag: "🇧🇷" },
          { name: "Inglês", level: "Fluente", flag: "🇬🇧" }
        ]
      },
      softSkills: {
        title: "Habilidades Profissionais",
        items: [
          "Comunicação Empática",
          "Criatividade Analítica",
          "Organização",
          "Liderança de Equipe",
          "Visão Estratégica",
          "Colaboração"
        ]
      }
    }
  };

  const t = content[language];

  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {t.categories.map((category, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl hover:border-teal-500 dark:hover:border-teal-500 transition-all group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-teal-100 dark:bg-teal-900/30 rounded-xl group-hover:scale-110 transition-transform">
                  <category.icon className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:border-teal-500 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border-2 border-teal-200 dark:border-teal-800 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <GlobeIcon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t.languages.title}
              </h3>
            </div>
            <div className="space-y-4">
              {t.languages.items.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white dark:bg-black rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{lang.flag}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {lang.name}
                    </span>
                  </div>
                  <span className="px-4 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-400 text-sm font-medium rounded-full">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 border-2 border-cyan-200 dark:border-cyan-800 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t.softSkills.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {t.softSkills.items.map((skill, index) => (
                <div
                  key={index}
                  className="p-3 bg-white dark:bg-black rounded-xl text-center"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
