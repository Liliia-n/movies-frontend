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
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: FontSize.LARGE,
      color: Colors.WHITE
    },
    h2: {
      fontSize: FontSize.MEDIUM,
      color: Colors.WHITE
    },
    h3: {
      fontSize: FontSize.PREMEDIUM
    },
    body1: {
      fontSize: FontSize.PREMEDIUM_2
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
