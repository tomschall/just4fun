import { createMuiTheme } from "@material-ui/core/styles";

const habeschaGreen= "#009444";
const habeschaRed= "#D52B1E";
const habeschaBraun= "#723e1c";

export default createMuiTheme({
  palette : {
    common: {
      habeschaGreen: `${habeschaGreen}`,
      habeschaRed: `${habeschaRed}`,
    },
    primary: {
      main: `${habeschaGreen}`
    },
    secondary: {
      main: `${habeschaRed}`
    },
    braun: {
      main: `${habeschaBraun}`
    }
  },
  typography: {
    tab: {
      textTransform: 'none',
      fontFamily: 'Titillium Web',
      fontSize: '1rem',
    }
  }

});