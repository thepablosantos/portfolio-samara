import { Mail, MapPin, Phone, Linkedin, FileDown } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'pt';
}

const Contact = ({ language }: ContactProps) => {
  const content = {
    en: {
      title: 'Get In Touch',
      subtitle: "Let's collaborate on your next project or discuss opportunities",
      email: 'Email',
      location: 'Location',
      phoneLabel: 'WhatsApp',
      downloadResume: 'Download Resume',
      resumeText:
        'Download my latest resume to learn more about my experience and skills.',
      availability: 'Currently Available',
      availabilityText:
        'Open to full-time positions, freelance projects, and consulting opportunities worldwide.',
    },
    pt: {
      title: 'Entre em Contato',
      subtitle: 'Vamos colaborar no seu próximo projeto ou discutir oportunidades',
      email: 'Email',
      location: 'Localização',
      phoneLabel: 'WhatsApp / Telefone',
      downloadResume: 'Baixar Currículo',
      resumeText:
        'Baixe meu currículo atualizado para saber mais sobre minha experiência e habilidades.',
      availability: 'Atualmente Disponível',
      availabilityText:
        'Aberta a posições efetivas, projetos freelance e oportunidades de consultoria em todo o mundo.',
    },
  };

  const t = content[language];

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-neutral-lightCream dark:bg-neutral-deepBlack"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-darkGreen dark:text-neutral-lightCream mb-4">
            {t.title}
          </h2>
          <p className="text-neutral-darkGreen/70 dark:text-neutral-softGray text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          <div className="p-6 bg-primary-sand/20 dark:bg-primary-coral/10 border-2 border-primary-sand/50 dark:border-primary-coral/50 rounded-2xl">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-primary-coral rounded-full animate-pulse" />
              <h3 className="font-semibold text-neutral-darkGreen dark:text-neutral-lightCream">
                {t.availability}
              </h3>
            </div>
            <p className="text-sm text-neutral-darkGreen/70 dark:text-neutral-softGray">
              {t.availabilityText}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-neutral-darkGreen dark:text-neutral-lightCream mb-6 text-center">
              {language === 'en' ? 'Contact Information' : 'Informações de Contato'}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="mailto:samaraab.sm@gmail.com"
                className="flex items-center space-x-4 p-4 bg-neutral-lightCream/50 dark:bg-neutral-darkGreen/70 rounded-xl hover:bg-neutral-softGray/20 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="p-3 bg-primary-sand/30 dark:bg-primary-coral/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-primary-coral dark:text-primary-sand" />
                </div>
                <div>
                  <p className="text-xs text-neutral-sage dark:text-neutral-softGray">
                    {t.email}
                  </p>
                  <p className="text-neutral-darkGreen dark:text-neutral-lightCream font-medium">
                    samaraab.sm@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 bg-neutral-lightCream/50 dark:bg-neutral-darkGreen/70 rounded-xl">
                <div className="p-3 bg-primary-sand/30 dark:bg-primary-coral/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary-coral dark:text-primary-sand" />
                </div>
                <div>
                  <p className="text-xs text-neutral-sage dark:text-neutral-softGray">
                    {t.location}
                  </p>
                  <p className="text-neutral-darkGreen dark:text-neutral-lightCream font-medium">
                    {language === 'en' ? 'São Paulo, Brazil' : 'São Paulo, SP - Brasil'}
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/5511939225545"
                className="flex items-center space-x-4 p-4 bg-neutral-lightCream/50 dark:bg-neutral-darkGreen/70 rounded-xl hover:bg-neutral-softGray/20 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="p-3 bg-primary-sand/30 dark:bg-primary-coral/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-primary-coral dark:text-primary-sand" />
                </div>
                <div>
                  <p className="text-xs text-neutral-sage dark:text-neutral-softGray">
                    {t.phoneLabel}
                  </p>
                  <p className="text-neutral-darkGreen dark:text-neutral-lightCream font-medium">
                    +55 11 93922-5545
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/samara-alves/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-neutral-lightCream/50 dark:bg-neutral-darkGreen/70 rounded-xl hover:bg-neutral-softGray/20 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="p-3 bg-primary-sand/30 dark:bg-primary-coral/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5 text-primary-coral dark:text-primary-sand" />
                </div>
                <div>
                  <p className="text-xs text-neutral-sage dark:text-neutral-softGray">
                    LinkedIn
                  </p>
                  <p className="text-neutral-darkGreen dark:text-neutral-lightCream font-medium">
                    Samara Alves
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="p-6 bg-neutral-lightCream/50 dark:bg-neutral-darkGreen/70 rounded-2xl border border-neutral-sage/30 dark:border-neutral-darkGreen">
            <div className="flex items-center space-x-3 mb-3">
              <FileDown className="w-5 h-5 text-primary-coral dark:text-primary-sand" />
              <h3 className="font-semibold text-neutral-darkGreen dark:text-neutral-lightCream">
                {t.downloadResume}
              </h3>
            </div>
            <p className="text-sm text-neutral-darkGreen/70 dark:text-neutral-softGray mb-4">
              {t.resumeText}
            </p>
            <a
              href="/Samara-Alves-CV.pdf"
              download
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-coral hover:bg-primary-coral/90 text-white rounded-xl font-medium transition-all transform hover:scale-105 space-x-2"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.downloadResume}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
