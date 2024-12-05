import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import i18next from 'i18next';

import { theme } from 'src/common/theme';
import router from 'src/routing/router';

import 'react-toastify/dist/ReactToastify.css';
import 'src/locales/i18n';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ToastContainer />
          <RouterProvider router={router} />
        </LocalizationProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
