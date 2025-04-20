import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";

// --orange-crayola: #ff6b35ff;
// --peach: #f7c59fff;
// --beige: #efefd0ff;
// --polynesian-blue: #004e89ff;
// --lapis-lazuli: #1a659eff;

// #2E073F
// #7A1CAC
// #AD49E1
// #EBD3F8
// #FBFBFB
// #00DFA2
// #F6FA70

//
//

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#e4d2ee",
          200: "#caa4de",
          300: "#af77cd",
          400: "#9549bd",
          500: "#7a1cac",
          600: "#62168a",
          700: "#491167",
          800: "#310b45",
          900: "#180622",
        },
        secondary: {
          100: "#ffe1d7",
          200: "#ffc4ae",
          300: "#ffa686",
          400: "#ff895d",
          500: "#ff6b35",
          600: "#cc562a",
          700: "#994020",
          800: "#662b15",
          900: "#33150b",
        },
        darkPurple: {
          100: "#d5cdd9",
          200: "#ab9cb2",
          300: "#826a8c",
          400: "#583965",
          500: "#2e073f",
          600: "#250632",
          700: "#1c0426",
          800: "#120319",
          900: "#09010d",
        },
        pink: {
          100: "#efdbf9",
          200: "#deb6f3",
          300: "#ce92ed",
          400: "#bd6de7",
          500: "#ad49e1",
          600: "#8a3ab4",
          700: "#682c87",
          800: "#451d5a",
          900: "#230f2d",
        },
        paleLavender: {
          100: "#fbf6fe",
          200: "#f7edfc",
          300: "#f3e5fb",
          400: "#efdcf9",
          500: "#ebd3f8",
          600: "#bca9c6",
          700: "#8d7f95",
          800: "#5e5463",
          900: "#2f2a32",
        },
        white: {
          100: "#fefefe",
          200: "#fdfdfd",
          300: "#fdfdfd",
          400: "#fcfcfc",
          500: "#fbfbfb",
          600: "#c9c9c9",
          700: "#979797",
          800: "#646464",
          900: "#323232",
        },
        green: {
          100: "#ccf9ec",
          200: "#99f2da",
          300: "#66ecc7",
          400: "#33e5b5",
          500: "#00dfa2",
          600: "#00b282",
          700: "#008661",
          800: "#005941",
          900: "#002d20",
        },
        yellow: {
          100: "#fdfee2",
          200: "#fbfdc6",
          300: "#fafca9",
          400: "#f8fb8d",
          500: "#f6fa70",
          600: "#c5c85a",
          700: "#949643",
          800: "#62642d",
          900: "#313216",
        },
      }
    : {
        primary: {
          100: "#180622",
          200: "#310b45",
          300: "#491167",
          400: "#62168a",
          500: "#7a1cac",
          600: "#9549bd",
          700: "#af77cd",
          800: "#caa4de",
          900: "#e4d2ee",
        },
        secondary: {
          100: "#33150b",
          200: "#662b15",
          300: "#994020",
          400: "#cc562a",
          500: "#ff6b35",
          600: "#ff895d",
          700: "#ffa686",
          800: "#ffc4ae",
          900: "#ffe1d7",
        },
        darkPurple: {
          100: "#09010d",
          200: "#120319",
          300: "#1c0426",
          400: "#250632",
          500: "#2e073f",
          600: "#583965",
          700: "#826a8c",
          800: "#ab9cb2",
          900: "#d5cdd9",
        },
        pink: {
          100: "#230f2d",
          200: "#451d5a",
          300: "#682c87",
          400: "#8a3ab4",
          500: "#ad49e1",
          600: "#bd6de7",
          700: "#ce92ed",
          800: "#deb6f3",
          900: "#efdbf9",
        },
        paleLavender: {
          100: "#2f2a32",
          200: "#5e5463",
          300: "#8d7f95",
          400: "#bca9c6",
          500: "#ebd3f8",
          600: "#efdcf9",
          700: "#f3e5fb",
          800: "#f7edfc",
          900: "#fbf6fe",
        },
        white: {
          100: "#323232",
          200: "#646464",
          300: "#979797",
          400: "#c9c9c9",
          500: "#fbfbfb",
          600: "#fcfcfc",
          700: "#fdfdfd",
          800: "#fdfdfd",
          900: "#fefefe",
        },
        green: {
          100: "#002d20",
          200: "#005941",
          300: "#008661",
          400: "#00b282",
          500: "#00dfa2",
          600: "#33e5b5",
          700: "#66ecc7",
          800: "#99f2da",
          900: "#ccf9ec",
        },
        yellow: {
          100: "#313216",
          200: "#62642d",
          300: "#949643",
          400: "#c5c85a",
          500: "#f6fa70",
          600: "#f8fb8d",
          700: "#fafca9",
          800: "#fbfdc6",
          900: "#fdfee2",
        },
      }),
});

export const themeSetting = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.pink[700],
              main: colors.pink[500],
              light: colors.pink[100],
            },
            background: {
              default: colors.darkPurple[800],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.pink[700],
              main: colors.pink[500],
              light: colors.pink[100],
            },
            background: {
              default: colors.yellow[900],
            },
          }),
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 12,
      h1: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 40,
      },
      h2: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 32,
      },
      h3: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 24,
      },
      h4: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 20,
      },
      h5: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 16,
      },
      h6: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 14,
      },
      body1: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 14,
      },
      body2: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 12,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);
  return [theme, colorMode];
};
