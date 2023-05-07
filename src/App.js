import { Route, Routes } from "react-router-dom";
import Landing from "./scenes/landing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import ProductHero from "./fail";
import "./styles/helper_styles.scss";
import "./styles/app.scss";
import i18n from "./utils/i18n";
import HotelList from "./scenes/hotel";
import { Suspense, useState } from "react";
import { RefreshOutlined } from "@mui/icons-material";
import LocaleContext from "./LocaleContext";

const theme = createTheme();

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<RefreshOutlined />}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <main>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/test" element={<ProductHero />} />
                <Route path="/hotels" element={<HotelList />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </Suspense>
    </LocaleContext.Provider>
  );
}

export default App;
