import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: "#ff9800",
              hover: "#f57c00",
              gray: "#858d94",
              text: "#fff",
            },
            secondary: {
              main: "#d32f2f",
            },
            neutral: {
              dark: "#212b35",
              gray: "#343d48",
            },
            background: {
              default: "#161b25",
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: "#ff9800",
              hover: "#f57c00",
              gray: "#343d48",
              text: "#000",
            },
            secondary: {
              main: "##d32f2f",
            },
            neutral: {
              dark: "#ffffff",
              gray: "#f4f6f8",
            },
            background: {
              default: "#fff",
            },
            color: {
              default: "#000",
            },
          }),
    },
    direction: "rtl",
    typography: {
      fontFamily: "IRANSans, Arial",
      fontSize: 14,
      h1: {
        fontFamily: "IRANSans, Arial",
        fontSize: 40,
      },
      h2: {
        fontFamily: "IRANSans, Arial",
        fontSize: 32,
      },
      h3: {
        fontFamily: "IRANSans, Arial",
        fontSize: 24,
      },
      h4: {
        fontFamily: "IRANSans, Arial",
        fontSize: 20,
      },
      h5: {
        fontFamily: "IRANSans, Arial",
        fontSize: 18,
      },
      h6: {
        fontFamily: "IRANSans, Arial",
        fontSize: 16,
      },
      p: {},
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'IRANSans';
            font-style: normal;
            font-weight: 400;
            src: local('IRANSans'), url('${process.env.PUBLIC_URL}/fonts/IRANSans.ttf') format('truetype');
          }
        `,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  console.log("mode", mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
