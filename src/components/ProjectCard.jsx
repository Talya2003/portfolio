import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group block rounded-lg border border-border bg-card p-6 sm:p-8 transition-all hover:border-muted-foreground/30 hover:bg-secondary/50"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {project.category}
          </span>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mt-2">{project.title}</h3>
        <p className="text-base leading-relaxed text-muted-foreground mb-6">
          {project.description}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-mono text-lg font-semibold text-foreground">
                {metric.value}
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
