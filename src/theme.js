import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4CAF50",
      contrastText: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
      outlined: {
        borderRadius: "1rem",
      },
      contained: {
        borderRadius: "1rem",
      },
    },
    MuiTypography: {
      subtitle2: {
        fontWeight: 700,
      },
      h4: {
        fontSize: "1.75rem",
      },
      h5: {
        fontWeight: 300,
      },
      h2: {
        fontSize: 36,
        fontWeight: 700,
      },
      h6: {
        fontSize: 18,
        fontWeight: 400,
      },
    },
  },
});

export default theme;
