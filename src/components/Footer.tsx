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
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-3 mb-4 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                SA
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Samara Alves
                </h3>
                <p className="text-sm text-teal-600 dark:text-teal-400">
                  {t.tagline}
                </p>
              </div>
            </button>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              {t.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2">
              {t.links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t.connect}
            </h4>
            <ul className="space-y-2">
              {t.social.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                📍 Ragusa, Italy
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                ☎️ +353 83 122 2227
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              {t.madeWith} <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> {t.by}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Samara Alves. {t.rights}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-40"
        title="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
