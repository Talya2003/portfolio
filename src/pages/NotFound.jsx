import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import { content } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function NotFound() {
  const { lang } = useLanguage();
  const labels = content[lang] || content.en;

  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <section className="border-t border-border py-24">
          <Container className="text-center">
            <h1 className="text-3xl font-bold text-foreground">{labels.notFound.title}</h1>
            <p className="text-base text-muted-foreground mt-4">
              {labels.notFound.body}
            </p>
            <Link
              to="/"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mt-6"
            >
              {labels.notFound.back}
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
