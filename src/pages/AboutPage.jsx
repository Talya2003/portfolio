import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import PrinciplesSection from "../components/PrinciplesSection";
import TechStackSection from "../components/TechStackSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import { siteConfig, content } from "../data/portfolioData";
import { User } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutPage() {
  const { lang } = useLanguage();
  const labels = content[lang] || content.en;

  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <section className="border-t border-border py-24">
          <Container>
            <div className="mb-12">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <User className="h-3.5 w-3.5" />
                <span>{labels.sections.about}</span>
              </div>
              <h1 className="text-4xl font-bold text-foreground mt-3">
                {siteConfig.name}
              </h1>
            </div>
            <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground max-w-2xl">
              {labels.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </section>
        <PrinciplesSection />
        <TechStackSection />
        <ExperienceTimeline />
      </main>
      <Footer />
    </div>
  );
}
