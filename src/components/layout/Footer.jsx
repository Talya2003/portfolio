import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Container from "./Container";
import { siteConfig, content } from "../../data/portfolioData";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const labels = content[lang] || content.en;

  return (
    <footer id="contact" className="border-t border-border bg-background py-16">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="space-y-4">
            <p className="font-mono text-sm font-semibold">{siteConfig.name}</p>
            <p className="text-base text-muted-foreground max-w-sm">
              {labels.subheadline}
            </p>
            <div className="flex items-center gap-2 text-base text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span>{labels.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-md border border-border p-2.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.github}
              className="rounded-md border border-border p-2.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.linkedin}
              className="rounded-md border border-border p-2.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="font-mono text-xs text-muted-foreground">
            ? {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
