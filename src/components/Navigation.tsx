import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "page01", label: "1" },
  { id: "page02", label: "2" },
  { id: "page03", label: "3" },
  { id: "page04", label: "4" },
  { id: "page05", label: "5" },
  { id: "page06", label: "6" },
  { id: "page07", label: "7" },
  { id: "page08", label: "8" },
  { id: "page09", label: "9" },
  { id: "page10", label: "10" },
  { id: "page11", label: "11" },
  { id: "page12", label: "12" },
  { id: "page13", label: "13" },
  { id: "page14", label: "14" },
  { id: "page15", label: "15" },
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
    <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-2">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={cn(
              "w-10 h-10 rounded-full border transition-all duration-300",
              "flex items-center justify-center text-sm font-semibold",
              "hover:scale-110",
              activeSection === id
                ? "bg-primary border-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary))]"
                : "bg-card/50 border-border/50 text-muted-foreground hover:border-primary/50"
            )}
            title={`Page ${label}`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};
