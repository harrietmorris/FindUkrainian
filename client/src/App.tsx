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
import Login from "./components/Login/Login";

function App() {
  const [error, setError] = useState<string | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <BusinessProvider>
          {error ? (
            <div>Oops! Something went wrong. Please try again later.</div>
          ) : (
            <div className="app">
              <Header />
              <h1 className="title">Find 🇺🇦 services in Köln 🇩🇪</h1>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/login"} element={<Login />} />
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
