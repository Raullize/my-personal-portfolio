"use client";

import { useTranslation } from '@/i18n/useTranslation';
import DecryptedText from '@/components/ui/DecryptedText';
import FadeIn from '@/components/ui/FadeIn';
import GradientText from '@/components/ui/GradientText';
import { Phone, Mail, Github, Linkedin, Send, FileDown } from 'lucide-react';

const Contact = () => {
  const { t, language } = useTranslation();
  
  const cvFile = language === 'pt-BR' ? '/cv-raul-pt-br.pdf' : '/cv-raul-en.pdf';
  
  const contactInfo = [
    {
      id: 'phone',
      title: t('phone'),
      value: '+55 51 99502-4711',
      href: 'https://wa.me/5551995024711',
      icon: (
        <Phone className="h-5 w-5" />
      )
    },
    {
      id: 'email',
      title: t('email'),
      value: 'raullizeteixeira@gmail.com',
      href: 'mailto:raullizeteixeira@gmail.com',
      icon: (
        <Mail className="h-5 w-5" />
      )
    },
    {
      id: 'github',
      title: 'GitHub',
      value: 'github.com/Raullize',
      href: 'https://github.com/Raullize',
      icon: (
        <Github className="h-5 w-5" />
      )
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/raullizeteixeira/',
      href: 'https://linkedin.com/in/raullizeteixeira/',
      icon: (
        <Linkedin className="h-5 w-5" />
      )
    }
  ];

  return (
    <section id={t('contact').toLowerCase()} className="section-padding bg-black">
      <div className="container-wrapper">
        <FadeIn direction="up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
              <GradientText
                colors={["#1d4ed8", "#3b82f6", "#22d3ee", "#1d4ed8"]}
                animationSpeed={2.5}
              >
                {t('contactTitle')}
              </GradientText>
            </h2>
            <div className="text-lg text-gray-300">
              <DecryptedText
                text={t('contactDescription')}
                speed={60}
                maxIterations={10}
                sequential={true}
                revealDirection="start"
                animateOn="view"
              />
            </div>
          </div>
        </FadeIn>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {contactInfo.map((contact, index) => (
              <FadeIn 
                key={contact.id}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={0.2 + (index * 0.1)}
                duration={0.6}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm hover:bg-gray-900 hover:border-gray-700 transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-primary-600/10 text-primary-400">
                    {contact.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-0.5 sm:mb-1 truncate">{contact.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 truncate">{contact.value}</p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn direction="up" delay={0.6}>
            <div className="mt-12 md:mt-16 text-center">
              <p className="text-gray-400 mb-6 text-balance">
                {t('contactMessage1')}
                <br className="hidden sm:block" />
                {t('contactMessage2')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:raullizeteixeira@gmail.com"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium hover:from-primary-700 hover:to-accent-700 transition-colors"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {t('send')}
                </a>
                
                <a
                  href={cvFile}
                  download
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-medium border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  <FileDown className="h-5 w-5 mr-2" />
                  {t('downloadCV')}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;