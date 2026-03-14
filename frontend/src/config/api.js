const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const isBrowser = typeof window !== 'undefined';

const getActiveLanguage = () => {
  if (!isBrowser) {
    return 'en';
  }

  const lang = window.localStorage.getItem('siteLang');
  return lang === 'hi' ? 'hi' : 'en';
};

const withLang = (endpoint, language) => {
  const resolvedLanguage = language === 'hi' ? 'hi' : language === 'en' ? 'en' : getActiveLanguage();
  const joiner = endpoint.includes('?') ? '&' : '?';
  return `${endpoint}${joiner}lang=${resolvedLanguage}`;
};

const parseResponseBody = async (response) => {
  const contentType = response.headers.get('content-type') || '';

  if (!contentType.includes('application/json')) {
    return null;
  }

  try {
    return await response.json();
  } catch {
    return null;
  }
};

const apiClient = {
  get: async (endpoint, language) => {
    const response = await fetch(`${API_BASE_URL}${withLang(endpoint, language)}`, {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await parseResponseBody(response);
    if (!response.ok) {
      throw new Error(data?.message || `API Error ${response.status}: ${response.statusText}`);
    }
    return data;
  },
  post: async (endpoint, body, language) => {
    const response = await fetch(`${API_BASE_URL}${withLang(endpoint, language)}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await parseResponseBody(response);
    if (!response.ok) {
      throw new Error(data?.message || `API Error ${response.status}`);
    }
    return data;
  }
};

export const api = {
  getHomeData:     (language) => apiClient.get('/home', language),
  getHomeBannerData: (language) => apiClient.get('/home/banner', language),
  getAboutData:    (language) => apiClient.get('/about', language),
  getTeamData:     (language) => apiClient.get('/team', language),
  getProductsData: (language) => apiClient.get('/products', language),
  getServicesData: (language) => apiClient.get('/services', language),
  getCareersData:  (language) => apiClient.get('/careers', language),
  getContactInfo:  (language) => apiClient.get('/contact', language),
  submitContactForm: (formData, language) => apiClient.post('/contact', formData, language),
};

export default api;
