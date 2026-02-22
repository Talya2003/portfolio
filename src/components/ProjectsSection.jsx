import React from "react";
import Container from "./layout/Container";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";
import { Briefcase } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <Container>
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Selected Work</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mt-3">Projects</h2>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
