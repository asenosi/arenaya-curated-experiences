import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({ children, delay = 0, className, direction = "up" }: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  const getTransformClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-x-0 translate-y-0`;
    }
    
    switch (direction) {
      case "left":
        return `${baseClasses} opacity-0 -translate-x-16`;
      case "right":
        return `${baseClasses} opacity-0 translate-x-16`;
      case "down":
        return `${baseClasses} opacity-0 -translate-y-12`;
      case "up":
      default:
        return `${baseClasses} opacity-0 translate-y-12`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn(getTransformClasses(), className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
