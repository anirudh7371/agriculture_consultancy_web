import { createContext, useContext } from 'react';

const LanguageContext = createContext(null);

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
};

export { useLanguage };
export default LanguageContext;