import { createMuiTheme } from '@material-ui/core/styles';

export const DarkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#002b36',
      light: '#00212b',
      dark: '#002b36',
    },
    panel: {
      header: '#002b36',
    },
    background: {
      default: '#00212b',
    },
    type: 'dark',
  },
});
export const LightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#002b36',
      light: '#00212b',
      dark: '#002b36',
    },
    panel: {
      header: '#f9f9f9',
    },
    background: {
      default: '#ffffff',
    },
    type: 'light',
  },
});
