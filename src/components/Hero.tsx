"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 md:px-12 lg:px-24">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-[120px] mix-blend-screen" />

      <div className="z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center rounded-full border border-border bg-background/50 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm"
        >
          <span className="mr-2 flex h-2 w-2 rounded-full bg-green-500"></span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl"
        >
          Crafting Digital Experiences That Matter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          I'm Davin, a full-stack developer specializing in building modern web applications
          with React, Next.js, and Supabase. I turn complex problems into elegant solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="group w-full sm:w-auto"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/davinhassan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background hover:bg-accent hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-davin-hassan-ghiffari-546853253/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background hover:bg-accent hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:davinhassan769@gmail.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background hover:bg-accent hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
