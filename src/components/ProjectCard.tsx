"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  demo_url: string | null;
  github_url: string | null;
  tags: string[];
}

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.5) }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted/50">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <span className="text-xl font-bold tracking-widest text-primary/30 uppercase">{project.title.substring(0, 3)}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold leading-tight">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          )}
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium hover:bg-accent hover:text-white transition-colors"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
