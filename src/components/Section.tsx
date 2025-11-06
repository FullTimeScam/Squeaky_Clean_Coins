import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, children, className }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen w-full flex items-center justify-center px-6 md:px-12 py-20",
        "snap-start",
        className
      )}
    >
      <div className="max-w-6xl w-full">
        {children}
      </div>
    </section>
  );
};
