"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Smartphone } from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    description: "Building responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks like Tailwind.",
    icon: <Layout className="h-6 w-6" />,
  },
  {
    name: "Backend Development",
    description: "Designing robust APIs and server logic using Node.js, Express, and Next.js API routes.",
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    name: "Database Design",
    description: "Structuring scalable databases with PostgreSQL, Supabase, and MongoDB.",
    icon: <Database className="h-6 w-6" />,
  },
  {
    name: "Mobile App Development",
    description: "Creating cross-platform mobile experiences with React Native.",
    icon: <Smartphone className="h-6 w-6" />,
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 lg:px-24 border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a passionate developer who loves turning complex problems into simple, beautiful, and intuitive designs. 
            When I'm not coding, you can find me exploring new technologies or contributing to open source.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
