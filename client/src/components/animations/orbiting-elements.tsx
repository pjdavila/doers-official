import { motion } from "framer-motion";
import { Smartphone, Globe, Zap, Code, Database } from "lucide-react";
import { useMemo } from "react";

interface OrbitingElementsProps {
  className?: string;
}

const OrbitingElements = ({ className = "" }: OrbitingElementsProps) => {
  const orbits = useMemo(() => [
    {
      radius: 250,
      duration: 40,
      elements: [
        { icon: Code, color: "#FF5A1F", size: 48, delay: 0 },
        { icon: Database, color: "#7A3FFF", size: 40, delay: 20 },
      ]
    },
    {
      radius: 350,
      duration: 60,
      elements: [
        { icon: Smartphone, color: "#FFFFFF", size: 44, delay: 0 },
        { icon: Globe, color: "#FF5A1F", size: 52, delay: 30 },
        { icon: Zap, color: "#7A3FFF", size: 36, delay: 45 },
      ]
    },
    {
      radius: 450,
      duration: 80,
      elements: [
        { icon: Code, color: "#7A3FFF", size: 56, delay: 0 },
        { icon: Globe, color: "#FFFFFF", size: 42, delay: 40 },
      ]
    }
  ], []);

  const orbitDots = useMemo(() => 
    [1, 2, 3, 4, 5, 6].map((i) => ({
      id: i,
      radius: 180 + Math.random() * 300,
      duration: 30 + Math.random() * 40,
      delay: Math.random() * 20,
      initialRotation: Math.random() * 360
    }))
  , []);

  return (
    <div className={`absolute inset-0 flex items-center justify-center ${className}`}>
      {/* Center glow effect - Using will-change for GPU acceleration */}
      <motion.div
        className="absolute w-96 h-96 rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(255, 90, 31, 0.2) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* AI Logo / Animated SVG - Large and centered with GPU acceleration */}
      <motion.div
        className="relative z-10 w-[600px] h-[600px] flex items-center justify-center will-change-transform"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: 1,
          y: [0, -20, 0]
        }}
        transition={{
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 1.2,
            delay: 0.3,
            ease: "easeOut"
          },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }
        }}
      >
        <iframe 
          src="/animated-ai-logo.html" 
          className="w-full h-full border-0"
          title="AI Technology Animation"
          style={{
            filter: "drop-shadow(0 20px 60px rgba(255, 90, 31, 0.4))",
            pointerEvents: "none"
          }}
        />
      </motion.div>
    </div>
  );
};

export default OrbitingElements;
