import { motion } from "framer-motion";
import Reveal from "@/components/animations/reveal";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// Componente de cohete clásico estilo cartoon
const ClassicRocket = () => {
  return (
    <motion.div className="rocket-3d">
      <svg viewBox="0 0 240 400" width="100%" height="100%" className="w-full h-full">
        {/* Efectos de iluminación y gradientes */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff3333" />
            <stop offset="50%" stopColor="#ff0000" />
            <stop offset="100%" stopColor="#cc0000" />
          </linearGradient>
          
          <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f5f5f5" />
            <stop offset="100%" stopColor="#e0e0e0" />
          </linearGradient>
          
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66ccff" />
            <stop offset="50%" stopColor="#33aaff" />
            <stop offset="100%" stopColor="#0088cc" />
          </linearGradient>
          
          <radialGradient id="fireGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#ffff00" stopOpacity="1" />
            <stop offset="40%" stopColor="#ffcc00" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#ff6600" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff3300" stopOpacity="0" />
          </radialGradient>
          
          <filter id="softShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#222" />
          </filter>
        </defs>

        {/* Zona de fuego del cohete */}
        <motion.g
          animate={{ 
            y: [0, -3, 0]
          }}
          transition={{ 
            duration: 0.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {/* Fuego del cohete */}
          <motion.path 
            d="M120 290 
               C100 310, 90 340, 120 370 
               C150 340, 140 310, 120 290 Z" 
            fill="url(#fireGradient)"
            filter="url(#glow)"
            animate={{ 
              d: [
                "M120 290 C100 310, 90 340, 120 370 C150 340, 140 310, 120 290 Z",
                "M120 290 C100 315, 95 345, 120 380 C145 345, 140 315, 120 290 Z",
                "M120 290 C100 310, 90 340, 120 370 C150 340, 140 310, 120 290 Z"
              ]
            }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />
        
          {/* Cuerpo principal del cohete - parte inferior (base) */}
          <motion.path
            d="M90 240 L90 290 L150 290 L150 240 Z"
            fill="#333333"
            stroke="#222222"
            strokeWidth="1"
          />
        
          {/* Cuerpo principal del cohete - parte central */}
          <motion.ellipse
            cx="120"
            cy="240"
            rx="30"
            ry="5"
            fill="#333333"
            stroke="#222222"
            strokeWidth="1"
          />
        
          {/* Cuerpo principal del cohete - parte blanca */}
          <motion.path
            d="M90 100 L90 240 
               A30 10 0 0 0 150 240
               L150 100 Z"
            fill="url(#whiteGradient)"
            stroke="#bbbbbb"
            strokeWidth="1"
            filter="url(#softShadow)"
          />
          
          {/* Nariz roja del cohete */}
          <motion.path
            d="M90 100 C90 50, 120 20, 150 100 Z"
            fill="url(#redGradient)"
            stroke="#cc0000"
            strokeWidth="1"
            filter="url(#softShadow)"
          />
          
          {/* Ventana/portilla circular */}
          <motion.circle
            cx="120"
            cy="150"
            r="20"
            fill="url(#blueGradient)"
            stroke="#999999"
            strokeWidth="3"
            filter="url(#softShadow)"
            animate={{ 
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Brillo de la ventana */}
          <motion.circle
            cx="115"
            cy="145"
            r="5"
            fill="#ffffff"
            opacity="0.7"
          />
          
          {/* Aletas laterales rojas */}
          <motion.path
            d="M150 180 L190 240 L150 240 Z"
            fill="url(#redGradient)"
            stroke="#cc0000"
            strokeWidth="1"
            filter="url(#softShadow)"
          />
          
          <motion.path
            d="M90 180 L50 240 L90 240 Z"
            fill="url(#redGradient)"
            stroke="#cc0000"
            strokeWidth="1"
            filter="url(#softShadow)"
          />
          
          {/* Aleta central roja */}
          <motion.path
            d="M120 240 L120 200 L90 240 L150 240 Z"
            fill="url(#redGradient)"
            stroke="#cc0000"
            strokeWidth="1"
            filter="url(#softShadow)"
          />
          
          {/* Detalles del cohete - línea de separación */}
          <motion.path
            d="M90 170 L150 170"
            stroke="#cccccc"
            strokeWidth="1"
          />
          
          {/* Remaches/tornillos decorativos */}
          {[...Array(8)].map((_, i) => (
            <motion.circle 
              key={i}
              cx={i % 2 === 0 ? 95 : 145}
              cy={130 + i * 15}
              r={2}
              fill="#999999"
            />
          ))}
        </motion.g>

        {/* Partículas de fuego */}
        {[...Array(12)].map((_, i) => (
          <motion.circle 
            key={i}
            cx={105 + Math.random() * 30}
            cy={330 + Math.random() * 40}
            r={2 + Math.random() * 3}
            fill={i % 2 === 0 ? "#ffcc00" : "#ff6600"}
            animate={{ 
              opacity: [0, 0.8, 0],
              y: [0, 40 + Math.random() * 50],
              x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 40],
              scale: [1, 0.5, 0]
            }}
            transition={{ 
              duration: 1 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 1
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

const HeroSection = () => {
  const { t } = useTranslation();
  
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
            {/* Animación del cohete 3D estilo cartoon */}
            <div className="w-full h-full" style={{ position: 'relative' }}>
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                
                {/* Animación del cohete clásico */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-72 h-72 md:w-96 md:h-96"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      y: [0, -20, 0],
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      opacity: { duration: 0.5 }
                    }}
                  >
                    <ClassicRocket />
                  </motion.div>
                </div>
                
                {/* Efecto de estrellas en el fondo */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 0.8, 0],
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
