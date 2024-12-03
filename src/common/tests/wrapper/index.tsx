import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import i18next from 'i18next';

import { en } from 'src/locales/langs';
import { store } from 'src/store/store';

const resources = {
  en: {
    translation: en
  }
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export function TestWrapper({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
        </I18nextProvider>
      </Provider>
    </BrowserRouter>
  );
}
