import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import i18next from 'i18next';
import { AppProps } from 'next/dist/shared/lib/router/router';

import Layout from 'src/common/layout';
import { theme } from 'src/common/theme';
import { store } from 'src/store/store';

import 'react-toastify/dist/ReactToastify.css';
import 'src/locales/i18n';
import '../App.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18next}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ToastContainer />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LocalizationProvider>
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  );
}
export default App;
