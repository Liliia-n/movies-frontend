import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import i18next from 'i18next';

import { theme } from 'src/common/theme';
import router from 'src/routing/router';
import { setToken, setUser } from 'src/store/features/auth/authSlice';
import { getTokenSelector, getUserSelector } from 'src/store/features/auth/selectors';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { useGetUserInfoQuery } from 'src/store/services/auth/authApi';

import 'react-toastify/dist/ReactToastify.css';
import 'src/locales/i18n';

function App() {
  const dispatch = useAppDispatch();

  const user = useAppSelector(getUserSelector);
  const token = useAppSelector(getTokenSelector);

  const { data, isLoading } = useGetUserInfoQuery(user?.id ?? '', {
    skip: !user || !token?.token
  });

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.response));
      dispatch(
        setToken({
          token: data.response.token,
          validTo: data.response.validTo
        })
      );
    }
  }, [isLoading, data, dispatch]);

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
