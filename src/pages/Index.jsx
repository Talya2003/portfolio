import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import GitHubReposSection from "../components/GitHubReposSection";
import PrinciplesSection from "../components/PrinciplesSection";
import TechStackSection from "../components/TechStackSection";
import ExperienceTimeline from "../components/ExperienceTimeline";

export default function Index() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ProjectsSection />
        <GitHubReposSection />
        <PrinciplesSection />
        <TechStackSection />
        <ExperienceTimeline />
      </main>
      <Footer />
    </div>
  );
}
