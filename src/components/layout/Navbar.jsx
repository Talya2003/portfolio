import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Languages } from "lucide-react";
import Container from "./Container";
import { siteConfig, content } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";
import ResumeRequestModal from "../ResumeRequestModal";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const brand = useMemo(() => {
    return siteConfig.name
      .split(/[^a-zA-Z0-9]+/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(".");
  }, []);

  const labels = content[lang] || content.en;

  React.useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.toggle("dark", false);
      return;
    }
    if (stored === "dark") {
      setIsDark(true);
      document.documentElement.classList.toggle("dark", true);
      return;
    }
    setIsDark(true);
    document.documentElement.classList.toggle("dark", true);
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const navLinkClass =
    "font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors";

  return (
    <>
      <header className="fixed top-0 z-50 w-full h-16 bg-background/80 backdrop-blur-md border-b border-border/50">
        <Container className="flex h-16 items-center justify-between">
          <Link to="/" className="font-mono text-sm font-semibold">
            {brand || "first.last"}
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/#projects" className={navLinkClass}>
              {labels.nav.work}
            </Link>
            <Link to="/about" className={navLinkClass}>
              {labels.nav.about}
            </Link>
            <Link to="/#contact" className={navLinkClass}>
              {labels.nav.contact}
            </Link>
            <button
              type="button"
              onClick={() => setShowResume(true)}
              className={navLinkClass}
            >
              {labels.nav.resume}
            </button>
            <button
              type="button"
              onClick={() => setLang(lang === "he" ? "en" : "he")}
              className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              aria-label="Toggle language"
            >
              <Languages className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
        {isOpen && (
          <div className="md:hidden border-b border-border/50 bg-background/95 backdrop-blur-md">
            <Container className="py-6 flex flex-col gap-4">
              <Link to="/#projects" className={navLinkClass} onClick={() => setIsOpen(false)}>
                {labels.nav.work}
              </Link>
              <Link to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>
                {labels.nav.about}
              </Link>
              <Link to="/#contact" className={navLinkClass} onClick={() => setIsOpen(false)}>
                {labels.nav.contact}
              </Link>
              <button
                type="button"
                onClick={() => {
                  setShowResume(true);
                  setIsOpen(false);
                }}
                className={navLinkClass}
              >
                {labels.nav.resume}
              </button>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {labels.nav.language}
                </span>
                <button
                  type="button"
                  onClick={() => setLang(lang === "he" ? "en" : "he")}
                  className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                  aria-label="Toggle language"
                >
                  <Languages className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {labels.nav.theme}
                </span>
                <button
                  type="button"
                  onClick={() => setIsDark((prev) => !prev)}
                  className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              </div>
            </Container>
          </div>
        )}
      </header>
      <ResumeRequestModal open={showResume} onClose={() => setShowResume(false)} />
    </>
  );
}
