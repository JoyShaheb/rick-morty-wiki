import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Characters from "./pages/Characters";
import Error404 from "./pages/Error404";
import Episode from "./pages/Episode";
import Location from "./pages/Location";

function App() {
  const uiTheme = useSelector((state: any) => state.uiSettings.theme);
  return (
    <ThemeProvider theme={theme(uiTheme)}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/Episode" element={<Episode />} />
          <Route path="/Location" element={<Location />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
