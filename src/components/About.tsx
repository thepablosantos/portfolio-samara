import { Zap, Heart, TrendingUp } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'pt';
}

const About = ({ language }: AboutProps) => {
  const content = {
    en: {
      title: "About Me",
      subtitle: "Driven by data and powered by creativity",
      mainText: "Digital Marketing & Social Media professional with over 11 years of experience in communication strategies, branding, and brand positioning.",
      description: "I've worked across agencies, startups, and public institutions — including the São Paulo Municipal Department of Culture — focusing on cultural content, storytelling, and engagement campaigns. My approach combines data analysis with creative sensitivity, building authentic narratives, strengthening digital presence, and generating consistent results. I'm passionate about projects that connect art, culture, and social impact through communication.",
      location: "Currently living in Italy, seeking opportunities to apply digital marketing strategies and cultural communication in global projects that unite creativity, data, and social impact.",
      cards: [
        {
          icon: Zap,
          title: "Strategic Innovation",
          description: "Building data-driven campaigns and engagement strategies that deliver measurable results and brand growth."
        },
        {
          icon: Heart,
          title: "Cultural Storytelling",
          description: "Creating authentic narratives that connect brands with audiences through art, culture, and meaningful content."
        },
        {
          icon: TrendingUp,
          title: "Performance Focus",
          description: "Analyzing metrics and optimizing campaigns to ensure continuous improvement and maximum ROI."
        }
      ]
    },
    pt: {
      title: "Sobre Mim",
      subtitle: "Orientada por dados e impulsionada pela criatividade",
      mainText: "Profissional de Marketing Digital e Social Media com mais de 11 anos de experiência em estratégias de comunicação, branding e posicionamento de marca.",
      description: "Atuei em agências, startups e instituições públicas — incluindo a Secretaria Municipal de Cultura de São Paulo — com foco em conteúdo cultural, storytelling e campanhas de engajamento. Tenho uma abordagem que combina análise de dados e sensibilidade criativa, construindo narrativas autênticas, fortalecendo a presença digital e gerando resultados consistentes. Sou apaixonada por projetos que conectam arte, cultura e impacto social através da comunicação.",
      location: "Atualmente morando na Itália, busco oportunidades para aplicar estratégias de marketing digital e comunicação cultural em projetos globais que unam criatividade, dados e impacto social.",
      cards: [
        {
          icon: Zap,
          title: "Inovação Estratégica",
          description: "Construindo campanhas orientadas por dados e estratégias de engajamento que entregam resultados mensuráveis e crescimento de marca."
        },
        {
          icon: Heart,
          title: "Narrativas Culturais",
          description: "Criando histórias autênticas que conectam marcas com audiências através de arte, cultura e conteúdo significativo."
        },
        {
          icon: TrendingUp,
          title: "Foco em Performance",
          description: "Analisando métricas e otimizando campanhas para garantir melhoria contínua e máximo ROI."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {t.mainText}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.description}
              </p>
              <div className="p-4 bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  {t.location}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">📍 Ragusa, Italy</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">11+ {language === 'en' ? 'Years Experience' : 'Anos de Experiência'}</span>
            </div>
          </div>

          <div className="space-y-6">
            {t.cards.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl group-hover:scale-110 transition-transform">
                    <card.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {card.description}
                    </p>
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

export default About;
