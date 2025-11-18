import { useEffect, useRef } from "react";

const AnimatedAILogo = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load SVG content
    fetch('/src/components/animations/animated-ai-logo.html')
      .then(res => res.text())
      .then(svgContent => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svgContent;
        }
      });
  }, []);

  return <div ref={containerRef} className={className} />;
};

export default AnimatedAILogo;
