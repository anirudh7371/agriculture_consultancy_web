import React, { useEffect, useMemo, useState } from 'react';
import LanguageContext from './useLanguage';

const LANG_KEY = 'siteLang';
const isBrowser = typeof window !== 'undefined';

const getInitialLanguage = () => {
  if (!isBrowser) {
    return 'en';
  }

  const saved = window.localStorage.getItem(LANG_KEY);
  return saved === 'hi' ? 'hi' : 'en';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    window.localStorage.setItem(LANG_KEY, language);
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    isHindi: language === 'hi',
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
