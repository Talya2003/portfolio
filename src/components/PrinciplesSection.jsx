import React from "react";
import { motion } from "framer-motion";
import Container from "./layout/Container";
import { principles } from "../data/portfolioData";
import { Sparkles } from "lucide-react";

export default function PrinciplesSection() {
  return (
    <section className="border-t border-border py-24 bg-secondary/30">
      <Container>
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            <span>How I Work</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mt-3">
            Engineering Principles
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="font-mono text-sm font-semibold text-foreground mb-3">
                {principle.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
