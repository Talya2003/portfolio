import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Container from "./layout/Container";
import { content, siteConfig } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import profileImage from "../public/images/talya.png";

export default function HeroSection() {
  const { lang } = useLanguage();
  const labels = content[lang] || content.en;

  return (
    <section className="min-h-screen flex items-center pt-8">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="font-mono text-base text-muted-foreground mb-6">
              {labels.title} | {labels.location}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              {labels.headline}
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground mb-10 max-w-2xl">
              {labels.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-foreground text-background rounded-md px-6 py-3 font-mono text-sm font-medium hover:opacity-80 transition-opacity inline-flex items-center gap-2"
              >
                {labels.hero.primaryCta}
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.github}
                className="border border-border text-foreground rounded-md px-6 py-3 font-mono text-sm font-medium hover:bg-secondary transition-colors"
              >
                {labels.hero.secondaryCta}
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-24 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-border" />
              <span className="font-mono text-xs text-muted-foreground">{labels.hero.scroll}</span>
              <span className="h-px w-12 bg-border" />
            </motion.div>
          </motion.div>
          <div className="flex justify-center lg:justify-end lg:items-start">
            <div className="relative lg:-mt-8">
              <div className="absolute -inset-6 rounded-full bg-foreground/5 blur-2xl" />
              <img
                src={profileImage}
                alt={siteConfig.name}
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border border-border bg-card"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
