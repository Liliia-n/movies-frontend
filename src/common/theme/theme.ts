import { createTheme } from '@mui/material';

import Colors from './colors';
import { FontSize } from './fonts';

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.PRIMARY
    },
    secondary: {
      main: Colors.SECONDARY
    },
    error: {
      main: Colors.ERROR
    },
    warning: {
      main: Colors.WARNING
    },
    success: {
      main: Colors.SUCCESS
    }
  },
  typography: {
    fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: FontSize.LARGE
    },
    h2: {
      fontSize: FontSize.MEDIUM
    },
    h3: {
      fontSize: FontSize.PREMEDIUM
    },
    body1: {
      fontSize: FontSize.DEFAULT
    },
    body2: {
      fontSize: FontSize.SMALL
    },
    subtitle1: {
      fontSize: FontSize.EXTRA_SMALL
    }
  }
});

export default theme;
