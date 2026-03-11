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
            "Sales Funnel Strategy",
            "Cultural Marketing",
            "Audience Growth Strategy",
            "Digital Campaign Strategy"
          ]
        },
        {
          icon: Share2,
          title: "Social Media Management",
          color: "cyan",
          skills: [
            "Copywriting",
            "Content Strategy for Social Media",
            "Community Management",
            "Influencer Partnerships",
            "Crisis Management",
            "Social Listening",
            "Engagement Strategy",
            "Brand Voice Development",
            "Video Editing (Reels & Short-form)",
            "Storytelling for Social Media",
            "Scriptwriting for Short Videos",
            "Content Planning & Editorial Calendars"
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
            "Campaign Performance Analysis",
            "Data Analysis",
            "A/B Testing",
            "Conversion Optimization",
            "ROI Measurement"
          ]
        },
        {
          icon: Palette,
          title: "Tools & Platforms",
          color: "cyan",
          skills: [
            "Google Ads",
            "Meta Ads Manager",
            "Google Analytics",
            "RD Station",
            "Notion",
            "Trello",
            "Canva",
            "CapCut",
            "ChatGPT"
          ]
        },
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
          "Audience Growth Strategy",
          "Content Strategy",
          "Digital Campaign Planning",
          "Brand Positioning",
          "Community Building",
          "Storytelling for Social Media",
          "Strategic Vision",
          "Team Leadership"
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
            "Estratégia de Funil de Vendas",
            "Marketing Cultural",
            "Estratégia de Crescimento de Audiência",
            "Estratégia de Campanhas Digitais"
          ]
        },
        {
          icon: Share2,
          title: "Gestão de Mídias Sociais",
          color: "cyan",
          skills: [
            "Copywriting",
            "Estratégia de Conteúdo para Redes Sociais",
            "Gestão de Comunidade",
            "Parcerias com Influenciadores",
            "Gestão de Crises",
            "Social Listening",
            "Estratégia de Engajamento",
            "Desenvolvimento de Tom de Voz",
            "Edição de Vídeo (Reels & Short-form)",
            "Storytelling para Mídias Sociais",
            "Roteirização para Vídeos Curtos",
            "Planejamento de Conteúdo & Calendários Editoriais"
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
            "Análise de Performance de Campanhas",
            "Análise de Dados",
            "Testes A/B",
            "Otimização de Conversão",
            "Medição de ROI"
          ]
        },
        {
          icon: Palette,
          title: "Ferramentas & Plataformas",
          color: "cyan",
          skills: [
            "Google Ads",
            "Meta Ads Manager",
            "Google Analytics",
            "RD Station",
            "Notion",
            "Trello",
            "Canva",
            "CapCut",
            "ChatGPT"
          ]
        },
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
          "Estratégia de Crescimento de Audiência",
          "Estratégia de Conteúdo",
          "Planejamento de Campanhas Digitais",
          "Posicionamento de Marca",
          "Construção de Comunidade",
          "Storytelling para Mídias Sociais",
          "Visão Estratégica",
          "Liderança de Equipe"
        ]
      }
    }
  };

  const t = content[language];

  return (
    <section id="skills" className="py-24 px-6 bg-neutral-lightCream dark:bg-neutral-deepBlack">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-darkGreen dark:text-neutral-lightCream mb-4">
            {t.title}
          </h2>
          <p className="text-neutral-darkGreen/70 dark:text-neutral-softGray text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {t.categories.map((category, index) => (
            <div
              key={index}
              className="p-8 bg-neutral-lightCream/50 dark:bg-neutral-darkGreen/70 border-2 border-neutral-sage/30 dark:border-neutral-darkGreen rounded-2xl hover:border-primary-coral dark:hover:border-primary-coral transition-all group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-primary-sand/30 dark:bg-primary-coral/20 rounded-xl group-hover:scale-110 transition-transform">
                  <category.icon className="w-7 h-7 text-primary-coral dark:text-primary-sand" />
                </div>
                <h3 className="text-xl font-bold text-neutral-darkGreen dark:text-neutral-lightCream">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-neutral-lightCream dark:bg-neutral-deepBlack border border-neutral-sage/30 dark:border-neutral-darkGreen text-neutral-darkGreen/80 dark:text-neutral-sage text-sm rounded-lg hover:border-primary-coral dark:hover:border-primary-coral hover:text-primary-coral dark:hover:text-primary-sand transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-neutral-sage/30 dark:bg-neutral-darkGreen/70 border-2 border-primary-sand/60 dark:border-primary-coral/60 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <GlobeIcon className="w-6 h-6 text-primary-coral dark:text-primary-sand" />
              <h3 className="text-xl font-bold text-neutral-darkGreen dark:text-neutral-lightCream">
                {t.languages.title}
              </h3>
            </div>
            <div className="space-y-4">
              {t.languages.items.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-neutral-lightCream dark:bg-neutral-deepBlack rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{lang.flag}</span>
                    <span className="font-semibold text-neutral-darkGreen dark:text-neutral-lightCream">
                      {lang.name}
                    </span>
                  </div>
                  <span className="px-4 py-1 bg-primary-sand/30 dark:bg-teal-900/50 text-primary-coral dark:text-primary-sand text-sm font-medium rounded-full">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-neutral-sage/30 dark:bg-neutral-darkGreen/70 border-2 border-primary-sand/60 dark:border-primary-coral/60 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-xl font-bold text-neutral-darkGreen dark:text-neutral-lightCream">
                {t.softSkills.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {t.softSkills.items.map((skill, index) => (
                <div
                  key={index}
                  className="p-3 bg-neutral-lightCream dark:bg-neutral-deepBlack rounded-xl text-center"
                >
                  <span className="text-sm font-medium text-neutral-darkGreen/80 dark:text-neutral-sage">
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
