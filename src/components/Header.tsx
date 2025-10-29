import { Globe, Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  theme: 'light' | 'dark';
  language: 'en' | 'pt';
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
}

const Header = ({ theme, language, onToggleTheme, onToggleLanguage }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navigation = {
    en: ['About', 'Experience', 'Skills', 'Projects', 'Contact'],
    pt: ['Sobre', 'Experiência', 'Habilidades', 'Projetos', 'Contato']
  };

  const navItems = navigation[language];
  const navIds = ['about', 'experience', 'skills', 'projects', 'contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-lightCream/95 dark:bg-neutral-deepBlack/95 backdrop-blur-md border-b border-neutral-sage/30 dark:border-neutral-darkGreen">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 group"
          >
            <img
              src="/logo2.png"
              alt="Samara Alves Logo"
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="text-lg font-semibold text-neutral-darkGreen dark:text-neutral-lightCream hidden sm:block font-heading">
              Samara Alves
            </span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(navIds[index])}
                className="text-neutral-darkGreen/70 dark:text-neutral-sage hover:text-primary-coral dark:hover:text-primary-sand transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={onToggleLanguage}
              className="p-2 rounded-lg hover:bg-neutral-sage/20 dark:hover:bg-neutral-darkGreen transition-colors"
              title={language === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
            >
              <Globe className="w-5 h-5 text-neutral-darkGreen dark:text-neutral-sage" />
            </button>
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg hover:bg-neutral-sage/20 dark:hover:bg-neutral-darkGreen transition-colors"
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-neutral-sage" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-darkGreen" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-neutral-darkGreen dark:text-neutral-sage" />
              ) : (
                <Menu className="w-5 h-5 text-neutral-darkGreen dark:text-neutral-sage" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-neutral-sage/30 dark:border-neutral-darkGreen">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(navIds[index])}
                className="block w-full text-left py-3 text-neutral-darkGreen/70 dark:text-neutral-sage hover:text-primary-coral dark:hover:text-primary-sand transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
