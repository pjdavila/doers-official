'use client'

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import MagneticButton from "@/components/animations/magnetic-button";
import TextReveal from "@/components/animations/text-reveal";
import OrbitingElements from "@/components/animations/orbiting-elements";
import Starfield from "@/components/animations/starfield";
import { useMounted } from "@/hooks/use-mounted";

const HeroSection = () => {
  const { t } = useTranslation();
  const mounted = useMounted();
  
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center" id="hero">
      {/* Starfield Background */}
      <Starfield className="z-0" />
      
      {/* Gradient overlays for depth - GPU accelerated */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-full bg-purple opacity-5 blur-[150px] will-change-transform"
          animate={{ 
            x: [0, 30, 0],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/2 h-full bg-orange opacity-5 blur-[150px] will-change-transform"
          animate={{ 
            x: [0, -30, 0],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="font-bebas text-4xl md:text-6xl xl:text-7xl leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Build and Launch Your <motion.span 
                className="text-orange drop-shadow-[0_0_30px_rgba(255,90,31,0.6)]"
                animate={{ 
                  textShadow: [
                    "0 0 30px rgba(255,90,31,0.6)",
                    "0 0 50px rgba(255,90,31,0.8)",
                    "0 0 30px rgba(255,90,31,0.6)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >First Real AI App</motion.span> - Fast
            </motion.h1>
            
            <TextReveal className="font-space text-lg md:text-xl text-gray/90 mb-8 max-w-xl mx-auto lg:mx-0" delay={0.5}>
              Transform your business with cutting-edge artificial intelligence. We solve complex problems with AI solutions.
            </TextReveal>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <MagneticButton magneticStrength={0.3}>
                <a 
                  href="#contact" 
                  data-testid="button-get-started"
                  className="bg-gradient-to-r from-orange via-orange to-orange/80 text-white px-10 py-4 rounded-full font-space font-semibold text-lg hover:shadow-[0_0_40px_rgba(255,90,31,0.6)] transition-all text-center block relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange/0 via-white/30 to-orange/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </a>
              </MagneticButton>
              
              <motion.p 
                className="font-space text-sm text-gray/70 flex items-center justify-center lg:justify-start gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs">S</kbd>
                <span>Press anytime to get started</span>
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* Right - Orbiting Elements */}
          <motion.div 
            className="w-full lg:w-1/2 relative h-[500px] md:h-[700px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <OrbitingElements />
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-gray mb-2 font-space uppercase">{mounted ? t('hero.scroll') : 'SCROLL DOWN'}</span>
          <a href="#services" className="text-white opacity-60 hover:opacity-100 transition-opacity">
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
