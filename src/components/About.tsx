import { Zap, Heart, TrendingUp } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'pt';
}

const About = ({ language }: AboutProps) => {
  const content = {
    en: {
      title: "About Me",
      subtitle: "Driven by data and powered by creativity",
      mainText: "Digital Marketing & Social Media strategist with over 11 years of experience in communication strategies, branding, and brand positioning.",
      description: "Throughout my career, I've worked with agencies, startups, and public institutions — including the São Paulo Municipal Department of Culture — developing projects focused on strategic content, storytelling, and engagement campaigns. My work combines data analysis and creative sensitivity to build authentic narratives, strengthen digital presence, and generate consistent results for brands and professionals.",
      location: "Based in São Paulo, Brazil, driven by projects that connect culture, communication, and real impact through digital marketing.",
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
      title: "Sobre",
      subtitle: "Orientada por dados e impulsionada pela criatividade",
      mainText: "Profissional de Marketing Digital e Social Media com mais de 11 anos de experiência em estratégias de comunicação, branding e posicionamento de marca.",
      description: "Ao longo da minha trajetória, atuei com agências, startups e instituições públicas — incluindo a Secretaria Municipal de Cultura de São Paulo — desenvolvendo projetos focados em conteúdo estratégico, storytelling e campanhas de engajamento. Meu trabalho une análise de dados e sensibilidade criativa para construir narrativas autênticas, fortalecer presença digital e gerar resultados consistentes para marcas e profissionais. Tenho experiência na gestão de redes sociais, planejamento estratégico de conteúdo, coordenação de produção criativa e análise de performance, sempre com foco em crescimento de audiência, posicionamento e conversão.",
      location: "Sou movida por projetos que conectam cultura, comunicação e impacto real, utilizando o marketing digital como ferramenta para gerar valor, relevância e relacionamento com o público.",
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
    <section id="about" className="py-24 px-6 bg-neutral-lightCream dark:bg-neutral-deepBlack">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-darkGreen dark:text-neutral-lightCream mb-4">
            {t.title}
          </h2>
          <p className="text-neutral-darkGreen/70 dark:text-neutral-softGray text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-neutral-darkGreen/80 dark:text-neutral-sage text-lg leading-relaxed">
                {t.mainText}
              </p>
              <p className="text-neutral-darkGreen/70 dark:text-neutral-softGray leading-relaxed">
                {t.description}
              </p>
              <div className="p-4 bg-primary-sand/20 dark:bg-primary-coral/10 border-l-4 border-primary-coral rounded">
                <p className="text-neutral-darkGreen/80 dark:text-neutral-sage italic">
                  {t.location}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-neutral-darkGreen/70 dark:text-neutral-softGray">
            <span className="px-3 py-1 bg-neutral-softGray/20 dark:bg-neutral-darkGreen rounded-full">
              📍 {language === 'en' ? 'São Paulo, Brazil' : 'São Paulo, SP - Brasil'}
            </span>
            <span className="px-3 py-1 bg-neutral-softGray/20 dark:bg-neutral-darkGreen rounded-full">11+ {language === 'en' ? 'Years Experience' : 'Anos de Experiência'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
