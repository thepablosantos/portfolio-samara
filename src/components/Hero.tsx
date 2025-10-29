import { ArrowDown, Mail, Linkedin, FileText } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'pt';
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      greeting: "Hello, I'm",
      title: "Digital Marketing & Social Media Specialist",
      subtitle: "Crafting data-driven strategies and authentic brand narratives that connect culture, creativity, and measurable results",
      cta1: "Get in Touch",
      cta2: "View Projects",
      available: "Available for Work"
    },
    pt: {
      greeting: "Olá, eu sou",
      title: "Especialista em Marketing Digital & Social Media",
      subtitle: "Criando estratégias orientadas por dados e narrativas autênticas de marca que conectam cultura, criatividade e resultados mensuráveis",
      cta1: "Entre em Contato",
      cta2: "Ver Projetos",
      available: "Disponível para Trabalho"
    }
  };

  const t = content[language];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-neutral-lightCream to-neutral-softGray/30 dark:from-neutral-deepBlack dark:to-neutral-darkGreen/50">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-sand/20 dark:bg-primary-coral/10 border border-primary-sand dark:border-primary-coral/50 rounded-full">
            <div className="w-2 h-2 bg-primary-coral rounded-full animate-pulse" />
            <span className="text-sm text-primary-coral dark:text-primary-sand font-medium">{t.available}</span>
          </div>

          <div>
            <p className="text-neutral-darkGreen/70 dark:text-neutral-sage text-lg mb-2">{t.greeting}</p>
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-darkGreen dark:text-neutral-lightCream mb-4 font-heading">
              Samara
              <br />
              <span className="bg-gradient-to-r from-primary-coral to-primary-sand bg-clip-text text-transparent">
                Alves
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-darkGreen/80 dark:text-neutral-sage font-medium mb-6">
              {t.title}
            </h2>
            <p className="text-neutral-darkGreen/70 dark:text-neutral-softGray text-lg leading-relaxed max-w-xl">
              {t.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary-coral hover:bg-primary-coral/90 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary-coral/30"
            >
              {t.cta1}
            </button>
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 border-2 border-neutral-sage dark:border-neutral-darkGreen hover:border-primary-sand dark:hover:border-primary-sand text-neutral-darkGreen dark:text-neutral-sage hover:text-primary-coral dark:hover:text-primary-sand rounded-full font-medium transition-all"
            >
              {t.cta2}
            </button>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <a
              href="https://www.linkedin.com/in/samara-alves-marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-neutral-sage dark:border-neutral-darkGreen hover:border-primary-coral dark:hover:border-primary-sand rounded-full transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-neutral-darkGreen dark:text-neutral-sage" />
            </a>
            <a
              href="mailto:samara-allves@hotmail.com"
              className="p-3 border border-neutral-sage dark:border-neutral-darkGreen hover:border-primary-coral dark:hover:border-primary-sand rounded-full transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5 text-neutral-darkGreen dark:text-neutral-sage" />
            </a>
            <a
              href="#contact"
              className="p-3 border border-neutral-sage dark:border-neutral-darkGreen hover:border-primary-coral dark:hover:border-primary-sand rounded-full transition-all hover:scale-110"
            >
              <FileText className="w-5 h-5 text-neutral-darkGreen dark:text-neutral-sage" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-primary-coral overflow-hidden shadow-2xl shadow-primary-coral/20">
              <img
                src="/samara.png"
                alt="Samara Alves"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-coral rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white text-2xl">📊</span>
            </div>
            <div className="absolute top-1/4 -left-4 w-16 h-16 bg-primary-sand rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-2xl">💡</span>
            </div>
            <div className="absolute bottom-1/4 -right-4 w-16 h-16 bg-primary-warmBrown rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-2xl">✨</span>
            </div>
            <div className="absolute -bottom-2 right-12 px-6 py-3 bg-neutral-lightCream dark:bg-neutral-darkGreen rounded-full shadow-lg border border-neutral-sage dark:border-primary-coral/50">
              <span className="text-neutral-darkGreen dark:text-neutral-lightCream font-medium">{t.available}</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 border border-neutral-sage dark:border-neutral-darkGreen rounded-full animate-bounce hover:border-primary-coral transition-colors"
      >
        <ArrowDown className="w-5 h-5 text-neutral-darkGreen dark:text-neutral-sage" />
      </button>
    </section>
  );
};

export default Hero;
