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
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-full">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-sm text-teal-700 dark:text-teal-400 font-medium">{t.available}</span>
          </div>

          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">{t.greeting}</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Samara
              <br />
              <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Alves
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-6">
              {t.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
              {t.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-teal-500/30"
            >
              {t.cta1}
            </button>
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 rounded-full font-medium transition-all"
            >
              {t.cta2}
            </button>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <a
              href="https://www.linkedin.com/in/samara-alves-marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 rounded-full transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </a>
            <a
              href="mailto:samara-allves@hotmail.com"
              className="p-3 border border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 rounded-full transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </a>
            <a
              href="#contact"
              className="p-3 border border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 rounded-full transition-all hover:scale-110"
            >
              <FileText className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-teal-500 overflow-hidden shadow-2xl shadow-teal-500/20">
              <div className="w-full h-full bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center text-white text-6xl font-bold">
                SA
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white text-2xl">📊</span>
            </div>
            <div className="absolute top-1/4 -left-4 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-2xl">💡</span>
            </div>
            <div className="absolute bottom-1/4 -right-4 w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-2xl">✨</span>
            </div>
            <div className="absolute -bottom-2 right-12 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
              <span className="text-gray-900 dark:text-white font-medium">{t.available}</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 border border-gray-300 dark:border-gray-700 rounded-full animate-bounce hover:border-teal-500 transition-colors"
      >
        <ArrowDown className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>
    </section>
  );
};

export default Hero;
