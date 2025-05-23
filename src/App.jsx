import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./utils/theme";
import { UserContexProvider } from "./utils/UserContext";

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";

import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserContexProvider>
          <Routes>
            {/* Shared Landing Page */}
            <Route path="/" element={<Home />} />

            {/* Protected Routes */}
            <Route element={<PrivateRoutes />}></Route>

            {/* Public Routes */}
            <Route element={<PublicRoutes />}>
              <Route path="/auth" element={<Auth />} />
              <Route path="/resetPassword" element={<Auth />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Auth />} />
          </Routes>
        </UserContexProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
