import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import GitHubReposSection from "../components/GitHubReposSection";
import AiResumeQaSection from "../components/AiResumeQaSection";
import PrinciplesSection from "../components/PrinciplesSection";
import TechStackSection from "../components/TechStackSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ContactSection from "../components/ContactSection";

export default function Index() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ProjectsSection />
        <GitHubReposSection />
        <AiResumeQaSection />
        <PrinciplesSection />
        <TechStackSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
