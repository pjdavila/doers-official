import { motion } from "framer-motion";
import { Cpu, Smartphone, Globe, Zap, Code, Database } from "lucide-react";
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
        { icon: Cpu, color: "#7A3FFF", size: 56, delay: 0 },
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
      {/* Central Platform - Isometric style */}
      <div className="relative z-20">
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Main platform */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Isometric platform layers */}
            <motion.div 
              className="absolute w-48 h-48 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(122, 63, 255, 0.3) 0%, rgba(255, 90, 31, 0.3) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 20px 60px rgba(122, 63, 255, 0.3), inset 0 0 40px rgba(255, 90, 31, 0.2)",
                transform: "perspective(1000px) rotateX(45deg) rotateZ(45deg)"
              }}
              animate={{
                rotateZ: [45, 50, 45],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Center glow */}
            <motion.div
              className="absolute w-32 h-32 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255, 90, 31, 0.4) 0%, transparent 70%)",
                filter: "blur(20px)"
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* AI Logo / Icon in center */}
            <motion.div
              className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #FF5A1F 0%, #7A3FFF 100%)",
                boxShadow: "0 10px 40px rgba(255, 90, 31, 0.5)"
              }}
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Cpu className="w-10 h-10 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Orbits */}
      {orbits.map((orbit, orbitIndex) => (
        <div key={orbitIndex} className="absolute inset-0 flex items-center justify-center">
          {/* Orbit ring */}
          <motion.div
            className="absolute rounded-full border border-white/10"
            style={{
              width: orbit.radius * 2,
              height: orbit.radius * 2,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: 1,
              rotate: 360
            }}
            transition={{
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 1, delay: orbitIndex * 0.2 },
              rotate: { duration: orbit.duration, repeat: Infinity, ease: "linear" }
            }}
          />

          {/* Elements on orbit */}
          {orbit.elements.map((element, elementIndex) => {
            const Icon = element.icon;
            const angle = (360 / orbit.elements.length) * elementIndex;
            
            return (
              <motion.div
                key={`${orbitIndex}-${elementIndex}`}
                className="absolute"
                style={{
                  width: orbit.radius * 2,
                  height: orbit.radius * 2,
                }}
                initial={{ rotate: angle }}
                animate={{ rotate: angle + 360 }}
                transition={{
                  duration: orbit.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: element.delay
                }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.1, 1],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: elementIndex * 0.3
                  }}
                >
                  <motion.div
                    className="rounded-2xl backdrop-blur-md flex items-center justify-center"
                    style={{
                      width: element.size,
                      height: element.size,
                      background: `${element.color}20`,
                      border: `2px solid ${element.color}40`,
                      boxShadow: `0 0 20px ${element.color}40`
                    }}
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      rotate: -(angle + 360)
                    }}
                    transition={{
                      rotate: {
                        duration: orbit.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: element.delay
                      }
                    }}
                  >
                    <Icon 
                      size={element.size * 0.5} 
                      style={{ color: element.color }}
                      strokeWidth={2.5}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      ))}

      {/* Orbital dots/particles */}
      {orbitDots.map((dot) => (
        <div
          key={`dot-${dot.id}`}
          className="absolute"
          style={{
            width: dot.radius * 2,
            height: dot.radius * 2,
          }}
        >
          <motion.div
            className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-white/40"
            initial={{ rotate: dot.initialRotation }}
            animate={{ rotate: dot.initialRotation + 360 }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "linear",
              delay: dot.delay
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default OrbitingElements;
