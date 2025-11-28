import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'is';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    title: 'Gagnamót',
    subtitle: 'Operations and Software Architecture Consulting in Reykjavik, Iceland',
    description: 'We deliver expert consulting in operations management and software architecture, helping businesses optimize their processes and build scalable technical solutions.',
    contactBirkir: 'Contact Birkir',
    contactGyda: 'Contact Gyða',
    
    // Expertise
    expertiseTitle: 'Our Expertise',
    birkirName: 'Birkir Ólafsson',
    birkirTitle: 'Software Engineer',
    birkirDescription: 'Specializing in software architecture, system design, and technical consulting. Helping organizations build robust, scalable solutions that drive business value.',
    gydaName: 'Gyða Björg Sigurðardóttir',
    gydaTitle: 'Management Engineer',
    gydaDescription: 'Expert in operations management, process optimization, and strategic planning. Supporting companies in streamlining operations and achieving operational excellence.',
    
    // Contact
    contactTitle: 'Get in Touch',
    contactDescription: 'Based in Reykjavik, Iceland, we\'re ready to help with your operations and software architecture needs. Reach out to discuss how we can support your business.',
    
    // Footer
    footerText: 'Reykjavik, Iceland.',
  },
  is: {
    // Hero
    title: 'Gagnamót',
    subtitle: 'Rekstrar- og hugbúnaðarhönnunarráðgjöf í Reykjavík á Íslandi',
    description: 'Við veitum sérfræðiráðgjöf í rekstrarstjórnun og hugbúnaðarhönnun og hjálpum fyrirtækjum að hagræða í ferlum sínum og byggja upp stigstærðar tæknilausnir.',
    contactBirkir: 'Hafa samband við Birki',
    contactGyda: 'Hafa samband við Gyðu',
    
    // Expertise
    expertiseTitle: 'Okkar sérþekking',
    birkirName: 'Birkir Ólafsson',
    birkirTitle: 'Hugbúnaðarverkfræðingur',
    birkirDescription: 'Sérhæfir sig í hugbúnaðarhönnun, kerfishönnun og tækniráðgjöf. Hjálpar fyrirtækjum að byggja upp öflugar, stigstærðar lausnir sem skila viðskiptalegum árangri.',
    gydaName: 'Gyða Björg Sigurðardóttir',
    gydaTitle: 'Stjórnunarverkfræðingur',
    gydaDescription: 'Sérfræðingur í rekstrarstjórnun, ferlihagræðingu og stefnumótun. Styður fyrirtæki í að hagræða í rekstri og ná fram rekstrarágæti.',
    
    // Contact
    contactTitle: 'Hafðu samband',
    contactDescription: 'Staðsett í Reykjavík á Íslandi, erum við tilbúin til að hjálpa með rekstrar- og hugbúnaðarhönnunarþarfir þínar. Hafðu samband til að ræða hvernig við getum stutt fyrirtæki þitt.',
    
    // Footer
    footerText: 'Reykjavík, Ísland.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    return (stored === 'is' || stored === 'en') ? stored : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
