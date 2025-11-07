import { motion } from "framer-motion";
import Reveal from "@/components/animations/reveal";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import InteractiveGlobe from "@/components/animations/interactive-globe";
import MagneticButton from "@/components/animations/magnetic-button";
import ParticleSystem from "@/components/animations/particle-system";
import TextReveal from "@/components/animations/text-reveal";



const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center" id="hero">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        {/* Particle System */}
        <ParticleSystem particleCount={80} colors={['#FF5A1F', '#7A3FFF', '#FFFFFF']} />
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-full bg-purple opacity-5 blur-[150px]"
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
          className="absolute bottom-0 left-0 w-1/2 h-full bg-orange opacity-5 blur-[150px]"
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
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(to right, #FFFFFF 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="font-bebas text-5xl md:text-7xl xl:text-8xl leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t('hero.title.you')} <motion.span 
                className="text-orange drop-shadow-[0_0_30px_rgba(255,90,31,0.6)]"
                animate={{ 
                  textShadow: [
                    "0 0 30px rgba(255,90,31,0.6)",
                    "0 0 50px rgba(255,90,31,0.8)",
                    "0 0 30px rgba(255,90,31,0.6)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >{t('hero.title.dream')}</motion.span> {t('hero.title.it')},<br/>
              {t('hero.title.we')} <motion.span 
                className="text-purple drop-shadow-[0_0_30px_rgba(122,63,255,0.6)]"
                animate={{ 
                  textShadow: [
                    "0 0 30px rgba(122,63,255,0.6)",
                    "0 0 50px rgba(122,63,255,0.8)",
                    "0 0 30px rgba(122,63,255,0.6)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >{t('hero.title.do')}</motion.span> {t('hero.title.it')}.
            </motion.h1>
            <TextReveal className="font-space text-xl md:text-2xl text-gray mb-8 max-w-xl" delay={0.5}>
              {t('hero.subtitle')}
            </TextReveal>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton magneticStrength={0.3}>
                <a 
                  href="#work" 
                  data-testid="button-view-work"
                  className="bg-gradient-to-r from-orange to-orange/80 text-white px-8 py-4 rounded-full font-space font-medium text-lg hover:shadow-[0_0_30px_rgba(255,90,31,0.5)] transition-all text-center block relative overflow-hidden group"
                >
                  <span className="relative z-10">{t('hero.cta.work')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange/0 via-white/20 to-orange/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </a>
              </MagneticButton>
              <MagneticButton magneticStrength={0.3}>
                <a 
                  href="#services" 
                  data-testid="button-services"
                  className="border-2 border-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-space font-medium text-lg hover:bg-white hover:bg-opacity-10 hover:border-purple transition-all text-center block"
                >
                  {t('hero.cta.services')}
                </a>
              </MagneticButton>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 relative h-[400px] md:h-[600px]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Globo interactivo DOERS */}
            <div className="w-full h-full" style={{ position: 'relative' }}>
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                
                {/* Globo interactivo con colores de DOERS */}
                <div className="absolute inset-0">
                  <InteractiveGlobe className="w-full h-full" />
                </div>
                
                {/* Overlay con efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none"></div>
              </div>
              
              {/* Elementos tecnológicos flotantes alrededor del globo */}
              <motion.div 
                className="absolute top-1/4 right-1/6 z-20"
                animate={{ 
                  scale: [1, 1.1, 1], 
                  rotate: [0, 360],
                  y: [0, -15, 0]
                }}
                transition={{ 
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="w-16 h-16 rounded-full bg-purple bg-opacity-30 backdrop-blur-md flex items-center justify-center border border-purple/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A3FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/3 left-1/6 z-20"
                animate={{ 
                  scale: [1, 1.2, 1], 
                  rotate: [0, -180],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
                  rotate: { duration: 6, repeat: Infinity, ease: "linear", delay: 1 },
                  x: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
              >
                <div className="w-14 h-14 rounded-full bg-orange bg-opacity-30 backdrop-blur-md flex items-center justify-center border border-orange/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 18l6-6-6-6" />
                    <path d="M8 6l-6 6 6 6" />
                  </svg>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 left-1/12 z-20"
                animate={{ 
                  scale: [1, 1.15, 1], 
                  rotate: [0, 90],
                  y: [0, -8, 0]
                }}
                transition={{ 
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                  rotate: { duration: 4, repeat: Infinity, ease: "linear", delay: 0.3 },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                }}
              >
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-gray mb-2 font-space uppercase">{t('hero.scroll')}</span>
          <a href="#services" className="text-white opacity-60 hover:opacity-100 transition-opacity">
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
