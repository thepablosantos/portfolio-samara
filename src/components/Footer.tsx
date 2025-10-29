import { Heart, ArrowUp } from 'lucide-react';

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
      madeWith: "Made with",
      by: "by Samara Alves",
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
      madeWith: "Feito com",
      by: "por Samara Alves",
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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-neutral-lightCream/50 dark:bg-neutral-darkGreen/70 border-t border-neutral-sage/30 dark:border-neutral-darkGreen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-3 mb-4 group"
            >
              <img
                src="/logo2.png"
                alt="Samara Alves Logo"
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
              />
              <div>
                <h3 className="text-xl font-bold text-neutral-darkGreen dark:text-neutral-lightCream font-heading">
                  Samara Alves
                </h3>
                <p className="text-sm text-primary-coral dark:text-primary-sand">
                  {t.tagline}
                </p>
              </div>
            </button>
            <p className="text-neutral-darkGreen/70 dark:text-neutral-softGray leading-relaxed max-w-md">
              {t.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-darkGreen dark:text-neutral-lightCream mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2">
              {t.links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-neutral-darkGreen/70 dark:text-neutral-softGray hover:text-primary-coral dark:hover:text-primary-sand transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-darkGreen dark:text-neutral-lightCream mb-4">
              {t.connect}
            </h4>
            <ul className="space-y-2">
              {t.social.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-darkGreen/70 dark:text-neutral-softGray hover:text-primary-coral dark:hover:text-primary-sand transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs text-neutral-sage dark:text-neutral-darkGreen mb-2">
                📍 Ragusa, Italy
              </p>
              <p className="text-xs text-neutral-sage dark:text-neutral-darkGreen">
                ☎️ +353 83 122 2227
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-sage/30 dark:border-neutral-darkGreen">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-darkGreen/70 dark:text-neutral-darkGreen flex items-center">
              {t.madeWith} <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> {t.by}
            </p>
            <p className="text-sm text-neutral-sage dark:text-neutral-darkGreen">
              © {new Date().getFullYear()} Samara Alves. {t.rights}
            </p>
          </div>
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
