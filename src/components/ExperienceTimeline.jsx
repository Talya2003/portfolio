import React from "react";
import { motion } from "framer-motion";
import Container from "./layout/Container";
import { content } from "../data/portfolioData";
import { Waypoints } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ExperienceTimeline() {
  const { lang } = useLanguage();
  const labels = content[lang] || content.en;

  return (
    <section className="border-t border-border py-24 bg-secondary/30">
      <Container>
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <Waypoints className="h-3.5 w-3.5" />
            <span>{labels.sections.career}</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mt-3">
            {labels.sections.experience}
          </h2>
        </div>
        <div className="space-y-4">
          {labels.experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative border-border py-8 ${
                lang === "he" ? "border-r-2 pr-8" : "border-l-2 pl-8"
              }`}
            >
              <span
                className={`absolute top-10 h-3 w-3 rounded-full border-2 border-border bg-background group-hover:border-foreground transition-colors ${
                  lang === "he" ? "-right-[7px]" : "-left-[7px]"
                }`}
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {experience.company}
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {experience.role} | {experience.period}
                </p>
              </div>
              <p className="text-base text-muted-foreground mt-2">
                {experience.description}
              </p>
              <div className="mt-4 space-y-2">
                {experience.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground" />
                    <p className="text-base text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
