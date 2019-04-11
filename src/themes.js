import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
        main: '#ffffff',
    },
    secondary500: '#FF0000',
    secondary: {
      //main: '#5277C7',
      main: '#0C3CAF'
    },

  },
});