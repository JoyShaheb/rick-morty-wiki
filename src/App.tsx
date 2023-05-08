import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  CharacterDetails,
  Characters,
  ErrorPage,
  Episode,
  Location,
} from "./pages";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "@mui/material";

const App = () => {
  const uiTheme = useSelector((state: RootState) => state.system);

  return (
    <ThemeProvider theme={theme(uiTheme.mode)}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container maxWidth="xl" sx={{ my: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterDetails />} />
            <Route path="/Episode" element={<Episode />} />
            <Route path="/location" element={<Location />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
``;
