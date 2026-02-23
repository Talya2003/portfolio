import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./context/LanguageContext";
import AnimatedBackground from "./components/AnimatedBackground";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      setTimeout(() => {
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="app-shell">
        <AnimatedBackground />
        <BrowserRouter>
          <ScrollToHash />
          {/* TODO: Optional page transitions can be added here. */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project/:id" element={<CaseStudyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}
