import { motion } from "framer-motion";
import Reveal from "@/components/animations/reveal";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// Componente de nave espacial estilo Star Wars
const Rocket3D = () => {
  return (
    <motion.div className="rocket-3d">
      <svg viewBox="0 0 240 400" width="100%" height="100%" className="w-full h-full">
        {/* Capa de efectos de iluminación */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="metallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#666666" />
            <stop offset="50%" stopColor="#dddddd" />
            <stop offset="100%" stopColor="#444444" />
          </linearGradient>
          <linearGradient id="cockpitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7A3FFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#473290" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="thrusterGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#ffcc00" stopOpacity="1" />
            <stop offset="70%" stopColor="#ff5a1f" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Cuerpo principal - nave espacial estilizada */}
        <motion.path
          d="M120 10 
            L145 60 L160 70 L170 100 L170 220
            L150 255 L120 260 L90 255 L70 220
            L70 100 L80 70 L95 60 Z"
          fill="url(#metallic)"
          stroke="#333"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Carcasa frontal y detalles de la nave */}
        <motion.path
          d="M120 10 L135 40 L105 40 Z"
          fill="#555"
          stroke="#444"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
        
        {/* Líneas de detalle en el cuerpo */}
        <motion.path 
          d="M120 10 L120 260"
          stroke="#444"
          strokeWidth="1"
          strokeDasharray="5 8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
        
        {/* Paneles laterales con detalles metálicos */}
        <motion.path 
          d="M90 70 L150 70 L145 220 L95 220 Z"
          fill="none"
          stroke="#666"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
        />
        
        {/* Detalles de panel de control */}
        <motion.rect
          x="100"
          y="110"
          width="40"
          height="10"
          rx="2"
          fill="#222"
          stroke="#444"
          strokeWidth="1"
        />
        <motion.rect
          x="105"
          y="130"
          width="30"
          height="5"
          rx="1"
          fill="#7A3FFF"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Cabina de mando con efecto brillante */}
        <motion.ellipse 
          cx="120" 
          cy="55" 
          rx="22" 
          ry="12" 
          fill="url(#cockpitGlow)" 
          filter="url(#glow)"
          initial={{ opacity: 0.7 }}
          animate={{ 
            opacity: [0.7, 1, 0.7],
            rx: [22, 23, 22],
            ry: [12, 13, 12]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Alas más aerodinámicas estilo TIE fighter/X-wing híbrido */}
        <motion.path 
          d="M70 120 L30 180 L40 200 L80 170 L70 120" 
          fill="#333"
          stroke="#444"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        <motion.path 
          d="M170 120 L210 180 L200 200 L160 170 L170 120" 
          fill="#333"
          stroke="#444"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Armamento - cañones láser */}
        <motion.rect
          x="50"
          y="150"
          width="25"
          height="5"
          fill="#222"
          stroke="#333"
          strokeWidth="1"
        />
        <motion.rect
          x="165"
          y="150"
          width="25"
          height="5"
          fill="#222"
          stroke="#333"
          strokeWidth="1"
        />
        
        {/* Puntos de energía en las alas */}
        <motion.circle 
          cx="35" 
          cy="185" 
          r="5" 
          fill="#7A3FFF" 
          filter="url(#glow)"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle 
          cx="205" 
          cy="185" 
          r="5" 
          fill="#7A3FFF" 
          filter="url(#glow)"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        
        {/* Propulsores - avanzados con efecto de energía */}
        <motion.g>
          {/* Propulsor izquierdo */}
          <motion.ellipse 
            cx="90" 
            cy="270" 
            rx="15" 
            ry="8" 
            fill="#222"
            stroke="#444"
            strokeWidth="1"
          />
          <motion.ellipse 
            cx="90" 
            cy="270" 
            rx="10" 
            ry="5" 
            fill="#111"
          />
          <motion.path 
            d="M80 270 L70 350 L90 320 L110 350 L100 270" 
            fill="url(#thrusterGlow)"
            filter="url(#glow)"
            animate={{ 
              d: [
                "M80 270 L70 350 L90 320 L110 350 L100 270",
                "M80 270 L75 380 L90 335 L105 380 L100 270",
                "M80 270 L70 350 L90 320 L110 350 L100 270"
              ],
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Propulsor derecho */}
          <motion.ellipse 
            cx="150" 
            cy="270" 
            rx="15" 
            ry="8" 
            fill="#222"
            stroke="#444"
            strokeWidth="1"
          />
          <motion.ellipse 
            cx="150" 
            cy="270" 
            rx="10" 
            ry="5" 
            fill="#111"
          />
          <motion.path 
            d="M140 270 L130 350 L150 320 L170 350 L160 270" 
            fill="url(#thrusterGlow)"
            filter="url(#glow)"
            animate={{ 
              d: [
                "M140 270 L130 350 L150 320 L170 350 L160 270",
                "M140 270 L135 380 L150 335 L165 380 L160 270",
                "M140 270 L130 350 L150 320 L170 350 L160 270"
              ],
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>
        
        {/* Partículas de propulsión */}
        {[...Array(8)].map((_, i) => (
          <motion.circle 
            key={i}
            cx={90 + Math.random() * 60}
            cy={330 + Math.random() * 50}
            r={1 + Math.random() * 3}
            fill="#ffcc00"
            animate={{ 
              opacity: [0, 0.8, 0],
              y: [0, 70 + Math.random() * 30],
              scale: [1, 0.5, 0]
            }}
            transition={{ 
              duration: 1 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 1
            }}
          />
        ))}

        {/* Luces de la nave */}
        <motion.circle 
          cx="40" 
          cy="120" 
          r="3" 
          fill="#ff0000" 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle 
          cx="180" 
          cy="120" 
          r="3" 
          fill="#ff0000" 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle 
          cx="120" 
          cy="40" 
          r="3" 
          fill="#00ff00" 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
};

const HeroSection = () => {
  const { t } = useTranslation();
  const [splineLoading, setSplineLoading] = useState(true);
  
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center" id="hero">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
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
            <h1 className="font-bebas text-5xl md:text-7xl xl:text-8xl leading-none mb-6">
              {t('hero.title.you')} <span className="text-orange drop-shadow-[0_0_10px_rgba(255,90,31,0.5)]">{t('hero.title.dream')}</span> {t('hero.title.it')},<br/>
              {t('hero.title.we')} <span className="text-purple drop-shadow-[0_0_10px_rgba(122,63,255,0.5)]">{t('hero.title.do')}</span> {t('hero.title.it')}.
            </h1>
            <p className="font-space text-xl md:text-2xl text-gray mb-8 max-w-xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#work" 
                className="bg-orange text-white px-8 py-4 rounded-full font-space font-medium text-lg hover:bg-opacity-90 transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta.work')}
              </motion.a>
              <motion.a 
                href="#services" 
                className="border border-gray border-opacity-30 px-8 py-4 rounded-full font-space font-medium text-lg hover:bg-white hover:bg-opacity-5 transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta.services')}
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 relative h-[400px] md:h-[600px]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* 3D Rocket Animation */}
            <div className="w-full h-full" style={{ position: 'relative' }}>
              <div className="relative w-full h-full rounded-3xl overflow-hidden">{/* Fondo eliminado */}
                
                {/* Animación del cohete 3D */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-64 h-64"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      y: [10, -10, 10],
                      rotate: [0, 3, 0, -3, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      opacity: { duration: 0.5 }
                    }}
                  >
                    <Rocket3D />
                  </motion.div>
                </div>
                
                {/* Efecto de partículas/estrellas */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Elementos tecnológicos flotantes alrededor del cohete */}
              <motion.div 
                className="absolute top-1/4 right-1/4 z-20"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-20 h-20 rounded-full bg-purple bg-opacity-20 backdrop-blur-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7A3FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 18l6-6-6-6" />
                    <path d="M8 6l-6 6 6 6" />
                  </svg>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/3 left-1/4 z-20"
                animate={{ scale: [1, 1.1, 1], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              >
                <div className="w-16 h-16 rounded-full bg-orange bg-opacity-20 backdrop-blur-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
              </motion.div>
              
              {/* Elemento flotante adicional */}
              <motion.div 
                className="absolute top-1/3 left-1/5 z-20"
                animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              >
                <div className="w-14 h-14 rounded-full bg-blue-500 bg-opacity-20 backdrop-blur-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
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
