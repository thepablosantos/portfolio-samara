import { ArrowUp } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'pt';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    en: {
      tagline: "Digital Marketing & Social Media Specialist",
      description: "Passionate about creating authentic narratives that connect art, culture, and social impact through strategic communication.",
      quickLinks: "Quick Links",
      connect: "Connect",
      madeWith: "Made by Samara Alves",
      by: "",
      rights: "All rights reserved.",
      links: [
        { label: "About", id: "about" },
        { label: "Experience", id: "experience" },
        { label: "Skills", id: "skills" },
        { label: "Projects", id: "projects" },
        { label: "Contact", id: "contact" }
      ],
      social: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/samara-alves-marketing" },
        { label: "Email", url: "mailto:samara-allves@hotmail.com" }
      ]
    },
    pt: {
      tagline: "Especialista em Marketing Digital & Social Media",
      description: "Apaixonada por criar narrativas autênticas que conectam arte, cultura e impacto social através de comunicação estratégica.",
      quickLinks: "Links Rápidos",
      connect: "Conecte-se",
      madeWith: "Feito por Samara Alves",
      by: "",
      rights: "Todos os direitos reservados.",
      links: [
        { label: "Sobre", id: "about" },
        { label: "Experiência", id: "experience" },
        { label: "Habilidades", id: "skills" },
        { label: "Projetos", id: "projects" },
        { label: "Contato", id: "contact" }
      ],
      social: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/samara-alves-marketing" },
        { label: "Email", url: "mailto:samara-allves@hotmail.com" }
      ]
    }
  };

  const t = content[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-neutral-lightCream/90 dark:bg-neutral-deepBlack border-t border-neutral-sage/40 dark:border-neutral-darkGreen">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-3 group"
        >
          <img
            src="/logo2.png"
            alt="Samara Alves Logo"
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
          />
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-neutral-darkGreen dark:text-neutral-lightCream">
              Samara Alves
            </p>
            <p className="text-xs text-primary-coral dark:text-primary-sand">
              {t.tagline}
            </p>
          </div>
        </button>

        <p className="text-xs sm:text-sm text-neutral-darkGreen/70 dark:text-neutral-softGray">
          © 2026 Samara Alves. {t.rights}
        </p>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-primary-coral hover:bg-primary-coral/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-40"
        title="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
