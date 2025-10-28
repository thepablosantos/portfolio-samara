import { Mail, MapPin, Phone, Linkedin, FileDown, Send } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'pt';
}

const Contact = ({ language }: ContactProps) => {
  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Let's collaborate on your next project or discuss opportunities",
      description: "I'm currently open to new opportunities in digital marketing, social media management, and cultural communication. Whether you need a strategic partner for your brand or want to discuss a project, I'd love to hear from you.",
      email: "Email",
      location: "Location",
      phone: "Phone",
      downloadResume: "Download Resume",
      resumeText: "Download my latest resume to learn more about my experience and skills.",
      or: "or",
      sendMessage: "Send a Message",
      formName: "Your Name",
      formEmail: "Your Email",
      formSubject: "Subject",
      formMessage: "Message",
      formButton: "Send Message",
      quickLinks: "Quick Links",
      availability: "Currently Available",
      availabilityText: "Open to full-time positions, freelance projects, and consulting opportunities worldwide."
    },
    pt: {
      title: "Entre em Contato",
      subtitle: "Vamos colaborar no seu próximo projeto ou discutir oportunidades",
      description: "Estou atualmente aberta a novas oportunidades em marketing digital, gestão de mídias sociais e comunicação cultural. Se você precisa de um parceiro estratégico para sua marca ou quer discutir um projeto, adoraria ouvir de você.",
      email: "Email",
      location: "Localização",
      phone: "Telefone",
      downloadResume: "Baixar Currículo",
      resumeText: "Baixe meu currículo atualizado para saber mais sobre minha experiência e habilidades.",
      or: "ou",
      sendMessage: "Enviar uma Mensagem",
      formName: "Seu Nome",
      formEmail: "Seu Email",
      formSubject: "Assunto",
      formMessage: "Mensagem",
      formButton: "Enviar Mensagem",
      quickLinks: "Links Rápidos",
      availability: "Atualmente Disponível",
      availabilityText: "Aberta a posições efetivas, projetos freelance e oportunidades de consultoria em todo o mundo."
    }
  };

  const t = content[language];

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.description}
            </p>

            <div className="p-6 bg-teal-50 dark:bg-teal-900/20 border-2 border-teal-200 dark:border-teal-800 rounded-2xl">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {t.availability}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.availabilityText}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en' ? 'Contact Information' : 'Informações de Contato'}
              </h3>

              <a
                href="mailto:samara-allves@hotmail.com"
                className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.email}</p>
                  <p className="text-gray-900 dark:text-white font-medium">samara-allves@hotmail.com</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                  <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.location}</p>
                  <p className="text-gray-900 dark:text-white font-medium">Ragusa, Italy</p>
                </div>
              </div>

              <a
                href="tel:+353831222227"
                className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.phone}</p>
                  <p className="text-gray-900 dark:text-white font-medium">+353 83 122 2227</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/samara-alves-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <p className="text-gray-900 dark:text-white font-medium">Samara Alves</p>
                </div>
              </a>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-3 mb-3">
                <FileDown className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {t.downloadResume}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {t.resumeText}
              </p>
              <button className="w-full px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-medium transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <FileDown className="w-4 h-4" />
                <span>{t.downloadResume}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800">
              <div className="flex items-center space-x-3 mb-6">
                <Send className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t.sendMessage}
                </h3>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t.formName}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-teal-500 dark:focus:border-teal-500 text-gray-900 dark:text-white transition-colors"
                      placeholder={t.formName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t.formEmail}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-teal-500 dark:focus:border-teal-500 text-gray-900 dark:text-white transition-colors"
                      placeholder={t.formEmail}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.formSubject}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-teal-500 dark:focus:border-teal-500 text-gray-900 dark:text-white transition-colors"
                    placeholder={t.formSubject}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.formMessage}
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-teal-500 dark:focus:border-teal-500 text-gray-900 dark:text-white transition-colors resize-none"
                    placeholder={t.formMessage}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg shadow-teal-500/30 flex items-center justify-center space-x-2"
                >
                  <span>{t.formButton}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
