import React from "react";
import Container from "./layout/Container";
import { techStack } from "../data/portfolioData";
import { Cpu } from "lucide-react";

export default function TechStackSection() {
  return (
    <section className="border-t border-border py-24">
      <Container>
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <Cpu className="h-3.5 w-3.5" />
            <span>Tools & Technologies</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mt-3">Tech Stack</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((stack) => (
            <div key={stack.category}>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {stack.category}
              </p>
              <div className="space-y-2">
                {stack.items.map((item) => (
                  <p key={item} className="font-mono text-base text-foreground">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
