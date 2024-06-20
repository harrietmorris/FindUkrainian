import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./themes/theme";
import { BusinessProvider } from "./context/BusinessContext";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import BusinessDetailPage from "./pages/BusinessDetailPage/BusinessDetailPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useTranslation } from 'react-i18next'
import LanguageSwap from "./i18next/languageswap";



function App() {
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
      
        <BusinessProvider>
          {error ? (
            <div>Oops! Something went wrong. Please try again later.</div>
          ) : (
            <div className="app">
              < LanguageSwap />
              <Header />
              <div> 
              <h1 className="title">{t('welcome')}</h1>
             
              </div>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/id/:id"} element={<BusinessDetailPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
              <Footer />
            </div>
          )}
        </BusinessProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
