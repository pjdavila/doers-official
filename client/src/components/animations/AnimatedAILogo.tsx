import svgContent from "./animated-ai-logo.html?raw";

const AnimatedAILogo = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default AnimatedAILogo;
