import { Route, Routes } from "react-router-dom";
import Landing from "./scenes/landing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import ProductHero from "./fail";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/test" element={<ProductHero />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
