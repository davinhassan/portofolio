"use client";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-6 pt-4 flex flex-col md:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} Davin. All rights reserved.</p>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
