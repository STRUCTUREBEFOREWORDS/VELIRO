import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'JP' | 'EN' | 'CN' | 'ES' | 'FR';
export type Currency = 'JPY' | 'USD' | 'EUR' | 'CNY' | 'GBP';

interface AppContextType {
  lang: Language;
  setLang: (l: Language) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  JP: {
    'nav.home': '思想',
    'nav.sample': '標本',
    'nav.works': '実例',
    'nav.service': '提供',
    'nav.process': '設計',
    'nav.price': '価値',
    'nav.contact': '対話',
    'hero.title': '思考は発想の原石である',
    'hero.sub': '思想を構造化し、設計し、実装する。',
    'cta.consult': '無料相談を予約する',
    'cta.works': '制作実績を見る',
  },
  EN: {
    'nav.home': 'HOME',
    'nav.sample': 'SAMPLE',
    'nav.works': 'WORKS',
    'nav.service': 'SERVICE',
    'nav.process': 'PROCESS',
    'nav.price': 'PRICE',
    'nav.contact': 'CONTACT',
    'hero.title': 'Thought is the ore of imagination',
    'hero.sub': 'Ideology structured, designed, and implemented.',
    'cta.consult': 'Book a Consultation',
    'cta.works': 'View Our Works',
  },
  CN: {
    'nav.home': '首页',
    'nav.sample': '样本',
    'nav.works': '作品',
    'nav.service': '服务',
    'nav.process': '流程',
    'nav.price': '价格',
    'nav.contact': '联系',
    'hero.title': '思考是想象的矿石',
    'hero.sub': '将思想结构化、设计并实现。',
    'cta.consult': '预约免费咨询',
    'cta.works': '查看制作案例',
  },
  ES: {
    'nav.home': 'INICIO',
    'nav.sample': 'MUESTRA',
    'nav.works': 'TRABAJOS',
    'nav.service': 'SERVICIO',
    'nav.process': 'PROCESO',
    'nav.price': 'PRECIO',
    'nav.contact': 'CONTACTO',
    'hero.title': 'El pensamiento es el mineral de la imaginación',
    'hero.sub': 'Ideología estructurada, diseñada e implementada.',
    'cta.consult': 'Reservar Consultoría',
    'cta.works': 'Ver Trabajos',
  },
  FR: {
    'nav.home': 'IDÉOLOGIE',
    'nav.sample': 'ÉCHANTILLON',
    'nav.works': 'PROJETS',
    'nav.service': 'SERVICE',
    'nav.process': 'PROCESSUS',
    'nav.price': 'TARIFS',
    'nav.contact': 'CONTACT',
    'hero.title': 'La pensée est le minerai de l\'imagination',
    'hero.sub': 'Idéologie structurée, conçue et mise en œuvre.',
    'cta.consult': 'Réserver un conseil',
    'cta.works': 'Voir nos réalisations',
  }
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('JP');
  const [currency, setCurrency] = useState<Currency>('JPY');

  const t = (key: string) => translations[lang][key] || key;

  return (
    <AppContext.Provider value={{ lang, setLang, currency, setCurrency, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
