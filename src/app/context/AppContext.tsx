import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from './translations';

export type Language = 'JP' | 'EN' | 'CN' | 'ES' | 'FR';
export type Currency = 'JPY' | 'USD' | 'EUR' | 'CNY' | 'GBP';

// 言語→デフォルト通貨
const LANG_CURRENCY: Record<Language, Currency> = {
  JP: 'JPY', EN: 'USD', CN: 'CNY', ES: 'EUR', FR: 'EUR',
};

// 対JPYレート（2025年概算）
const RATES: Record<Currency, number> = {
  JPY: 1, USD: 1 / 150, EUR: 1 / 163, CNY: 1 / 21, GBP: 1 / 190,
};

const SYMBOLS: Record<Currency, string> = {
  JPY: '¥', USD: '$', EUR: '€', CNY: 'CN¥', GBP: '£',
};

interface AppContextType {
  lang: Language;
  setLang: (l: Language) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  t: (key: string) => string;
  formatPrice: (jpy: number) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>('JP');
  const [currency, setCurrency] = useState<Currency>('JPY');

  // 言語切替時に通貨も自動変更
  const setLang = (l: Language) => {
    setLangState(l);
    setCurrency(LANG_CURRENCY[l]);
  };

  // 翻訳：見つからない場合はENにフォールバック
  const t = (key: string): string =>
    translations[lang][key] ?? translations['EN'][key] ?? key;

  // 価格フォーマット：JPY→各通貨に変換して表示
  const formatPrice = (jpy: number): string => {
    const amount = Math.round(jpy * RATES[currency]);
    if (currency === 'JPY') return `¥${amount.toLocaleString()}`;
    return `${SYMBOLS[currency]}${amount.toLocaleString()}`;
  };

  return (
    <AppContext.Provider value={{ lang, setLang, currency, setCurrency, t, formatPrice }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'JP', label: '日本語' },
  { code: 'EN', label: 'English' },
  { code: 'CN', label: '中文' },
  { code: 'ES', label: 'Español' },
  { code: 'FR', label: 'Français' },
];
