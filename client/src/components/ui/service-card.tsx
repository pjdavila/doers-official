import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
  delay?: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  iconBgColor,
  iconColor,
  delay = 0
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-2xl p-8 transition-all duration-300 bg-gradient-to-br from-black/40 via-black/30 to-black/20 backdrop-blur-sm border border-white/10 hover:border-orange/30 overflow-hidden group"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle at center, rgba(255,90,31,0.1) 0%, transparent 70%)",
          transform: "translateZ(0)",
        }}
      />
      
      {/* Floating icon with 3D effect */}
      <motion.div 
        className={`${iconBgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative`}
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "translateZ(40px)" : "translateZ(0px)",
        }}
        animate={{
          y: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{
            rotate: isHovered ? [0, 5, -5, 0] : 0,
          }}
          transition={{ duration: 0.6 }}
        >
          <Icon className={`${iconColor}`} size={32} />
        </motion.div>
        
        {/* Icon glow effect */}
        <motion.div 
          className={`absolute inset-0 ${iconBgColor} blur-xl opacity-0 group-hover:opacity-50 rounded-2xl`}
          animate={{
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      {/* Content with 3D depth */}
      <div style={{ transform: "translateZ(20px)" }}>
        <h3 className="font-space text-2xl mb-4 relative z-10">{title}</h3>
        <p className="text-gray relative z-10">{description}</p>
      </div>
      
      {/* Shine effect on hover */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
        }}
        animate={{
          x: isHovered ? ["0%", "100%"] : "0%",
        }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
};

export default ServiceCard;
