import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#555273',
    },
    secondary: {
      main: '#37373a',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
