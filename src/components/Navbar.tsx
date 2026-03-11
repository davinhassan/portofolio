"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 transition-all duration-300 md:px-12 lg:px-24 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <Link href="/" className="text-xl font-bold tracking-tighter">
        Davin<span className="text-primary">.dev</span>
      </Link>
      
      <nav className="hidden items-center gap-6 md:flex text-sm font-medium">
        <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          About
        </Link>
        <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
          Projects
        </Link>
        <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
          Contact
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Let's Talk
        </Button>
      </div>
    </motion.header>
  );
}
