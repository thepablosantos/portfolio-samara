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
    <footer className="relative bg-neutral-softGray/30 dark:bg-neutral-darkGreen border-t border-neutral-sage/40 dark:border-neutral-darkGreen">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
        <button
          onClick={scrollToTop}
          className="group"
        >
          <img
            src="/footer-logo.png"
            alt="Samara Alves – Digital Marketing & Social Media Specialist"
            className="h-12 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </button>
        <div className="flex flex-col md:flex-row items-center justify-between w-full text-xs md:text-sm text-neutral-darkGreen/70 dark:text-neutral-lightCream">
          <p>
            © {new Date().getFullYear()} Samara Alves. {t.rights}
          </p>
          <p className="mt-2 md:mt-0">
            <a
              href="https://wa.me/5511939225545"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary-coral dark:hover:text-primary-sand transition-colors"
            >
              <span>📱</span>
              <span>+55 11 93922-5545</span>
            </a>
          </p>
        </div>
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
