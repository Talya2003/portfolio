import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import { projects } from "../data/portfolioData";

export default function CaseStudyPage() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div>
        <Navbar />
        <main className="pt-16">
          <section className="border-t border-border py-24">
            <Container className="text-center">
              <h1 className="text-3xl font-bold text-foreground">Project not found</h1>
                <p className="text-base text-muted-foreground mt-4">
                  The case study you are looking for does not exist.
                </p>
              <Link
                to="/#projects"
                className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mt-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to projects
              </Link>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <section className="border-t border-border py-24">
          <Container>
            <Link
              to="/#projects"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
            <div className="mt-8 flex flex-col gap-12 lg:flex-row">
              <div className="flex-1">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {project.category}
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mt-4">
                  {project.subtitle}
                </p>
                <div className="mt-12 space-y-12">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                      Overview
                    </p>
                    <p className="text-base leading-relaxed text-foreground/80">
                      {project.overview}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                      Problem
                    </p>
                    <p className="text-base leading-relaxed text-foreground/80">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                      Architecture
                    </p>
                    <p className="text-base leading-relaxed text-foreground/80">
                      {project.architecture}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                      Implementation
                    </p>
                    <p className="text-base leading-relaxed text-foreground/80">
                      {project.implementation}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                      Challenges
                    </p>
                    <p className="text-base leading-relaxed text-foreground/80">
                      {project.challenges}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                      Results
                    </p>
                    <p className="text-base leading-relaxed text-foreground/80">
                      {project.results}
                    </p>
                  </div>
                </div>
              </div>
              <aside className="lg:sticky lg:top-24 lg:w-64 lg:self-start">
                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Role
                      </p>
                      <p className="text-base text-foreground mt-2">{project.role}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Year
                      </p>
                      <p className="text-base text-foreground mt-2">{project.year}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Duration
                      </p>
                      <p className="text-base text-foreground mt-2">{project.duration}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Team
                      </p>
                      <p className="text-base text-foreground mt-2">{project.team}</p>
                    </div>
                  </div>
                  <div className="border-t border-border mt-6 pt-6 space-y-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex justify-between">
                        <span className="font-mono text-xs text-muted-foreground">
                          {metric.label}
                        </span>
                        <span className="font-mono text-xs text-foreground">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-border mt-6 pt-6 space-y-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
