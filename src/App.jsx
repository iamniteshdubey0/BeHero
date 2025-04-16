import React from "react";
import Home from "./pages/Home/Home";
import { ColorModeContext, useMode } from "./utils/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from './component/global/Navbar';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar></Navbar>
        <Home></Home>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
