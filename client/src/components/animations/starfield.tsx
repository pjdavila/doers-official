import { motion } from "framer-motion";
import { useMemo } from "react";
import { isMobile, useReducedMotion } from "@/lib/device-detection";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface ShootingStar {
  id: number;
  top: number;
  delay: number;
}

interface StarfieldProps {
  className?: string;
  starCount?: number;
}

const Starfield = ({ className = "", starCount = 50 }: StarfieldProps) => {
  const mobile = isMobile();
  const reducedMotion = useReducedMotion();
  const effectiveStarCount = mobile ? Math.floor(starCount / 2) : starCount;
  
  const stars = useMemo<Star[]>(() => 
    Array.from({ length: effectiveStarCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5
    }))
  , [effectiveStarCount]);

  const shootingStars = useMemo<ShootingStar[]>(() => 
    [1].map((i) => ({
      id: i,
      top: Math.random() * 50,
      delay: i * 8
    }))
  , []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(20, 20, 40, 1) 0%, rgba(0, 0, 0, 1) 100%)"
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={reducedMotion ? { opacity: 0.5 } : {
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={reducedMotion ? {} : {
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={`shooting-${star.id}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            width: "100px",
            top: `${star.top}%`,
            left: "-100px",
          }}
          animate={{
            x: ["0vw", "100vw"],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: star.delay,
            repeatDelay: 15
          }}
        />
      ))}

      {/* Nebula clouds */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          top: "10%",
          right: "10%",
          background: "radial-gradient(circle, rgba(122, 63, 255, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-20"
        style={{
          bottom: "20%",
          left: "5%",
          background: "radial-gradient(circle, rgba(255, 90, 31, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default Starfield;
