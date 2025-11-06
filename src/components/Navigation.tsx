import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "intro", label: "0", emoji: "🚀" },
  { id: "casino", label: "1", emoji: "🎰" },
  { id: "railgun", label: "2", emoji: "🚆" },
  { id: "response", label: "3", emoji: "🚨" },
  { id: "closing", label: "4", emoji: "🎤" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-4">
        {sections.map(({ id, label, emoji }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={cn(
              "w-12 h-12 rounded-full border-2 transition-all duration-300",
              "flex items-center justify-center text-lg",
              "hover:scale-110",
              activeSection === id
                ? "bg-primary border-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary))]"
                : "bg-card/50 border-border text-muted-foreground hover:border-primary"
            )}
            title={`Section ${label}`}
          >
            {emoji}
          </button>
        ))}
      </div>
    </nav>
  );
};
