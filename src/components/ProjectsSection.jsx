import React, { useMemo, useState } from "react";
import Container from "./layout/Container";
import ProjectCard from "./ProjectCard";
import { content } from "../data/portfolioData";
import { Briefcase } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const labels = content[lang] || content.en;
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = useMemo(() => {
    const set = new Set(labels.projects.map((project) => project.category));
    return ["ALL", ...Array.from(set)];
  }, [labels.projects]);

  const visibleProjects =
    activeCategory === "ALL"
      ? labels.projects
      : labels.projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="border-t border-border py-24">
      <Container>
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5" />
            <span>{labels.sections.selectedWork}</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mt-3">
            {labels.sections.projects}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {labels.projectsFilter.label}
            </span>
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const label = category === "ALL" ? labels.projectsFilter.all : category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
