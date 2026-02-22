import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import PrinciplesSection from "../components/PrinciplesSection";
import TechStackSection from "../components/TechStackSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import { siteConfig } from "../data/portfolioData";
import { User } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <section className="border-t border-border py-24">
          <Container>
            <div className="mb-12">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <User className="h-3.5 w-3.5" />
                <span>About</span>
              </div>
              <h1 className="text-4xl font-bold text-foreground mt-3">
                {siteConfig.name}
              </h1>
            </div>
            <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground max-w-2xl">
              <p>
                I focus on building resilient platforms and developer tools that scale with growing teams and traffic.
              </p>
              <p>
                My work blends system design, operational excellence, and product thinking to deliver measurable outcomes.
              </p>
              <p>
                I enjoy mentoring engineers, aligning stakeholders, and simplifying complex infrastructure challenges.
              </p>
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
