import { motion } from "framer-motion";
import Reveal from "@/components/animations/reveal";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// Componente de cohete 3D con efecto realista
const ClassicRocket = () => {
  return (
    <motion.div className="rocket-3d">
      <svg viewBox="0 0 240 450" width="100%" height="100%" className="w-full h-full">
        {/* Efectos avanzados de iluminación y gradientes */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          {/* Gradiente para la nariz del cohete */}
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="85%" y2="85%">
            <stop offset="0%" stopColor="#ff8c42" />
            <stop offset="40%" stopColor="#ff7730" />
            <stop offset="100%" stopColor="#ff5c11" />
          </linearGradient>
          
          {/* Gradiente para el cuerpo principal */}
          <linearGradient id="whiteGradient" x1="30%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f0f0f0" />
            <stop offset="100%" stopColor="#e6e6e6" />
          </linearGradient>
          
          {/* Gradiente para el efecto de sombra en el cuerpo */}
          <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#bbbbbb" />
            <stop offset="50%" stopColor="#e0e0e0" />
            <stop offset="100%" stopColor="#bbbbbb" />
          </linearGradient>
          
          {/* Gradiente para la ventana */}
          <radialGradient id="windowGradient" cx="40%" cy="40%" r="60%" fx="30%" fy="30%">
            <stop offset="0%" stopColor="#aae6ff" />
            <stop offset="40%" stopColor="#66ccff" />
            <stop offset="100%" stopColor="#0099cc" />
          </radialGradient>
          
          {/* Gradiente para las aletas */}
          <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7e42" />
            <stop offset="50%" stopColor="#ff5c11" />
            <stop offset="100%" stopColor="#e64d00" />
          </linearGradient>
          
          {/* Gradiente para el fuego principal */}
          <radialGradient id="fireGradient" cx="50%" cy="30%" r="70%" fx="50%" fy="30%">
            <stop offset="0%" stopColor="#ffff99" stopOpacity="1" />
            <stop offset="20%" stopColor="#ffff00" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#ffcc00" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#ff9900" stopOpacity="0.85" />
            <stop offset="80%" stopColor="#ff6600" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff3300" stopOpacity="0" />
          </radialGradient>
          
          {/* Gradiente para efectos metálicos */}
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b3b3b3" />
            <stop offset="50%" stopColor="#808080" />
            <stop offset="100%" stopColor="#4d4d4d" />
          </linearGradient>
          
          {/* Filtros para sombras y efectos 3D */}
          <filter id="softShadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#222" floodOpacity="0.3" />
          </filter>
          
          <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feOffset in="blur" dx="3" dy="3" result="offsetBlur" />
            <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
          </filter>
        </defs>

        {/* Grupo principal del cohete con efecto de flotación */}
        <motion.g
          animate={{ 
            y: [0, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {/* Efectos de fuego con múltiples capas */}
          <motion.g>
            {/* Capa externa del fuego - más amplia y difusa */}
            <motion.path 
              d="M120 290 
                 C90 320, 70 360, 120 410 
                 C170 360, 150 320, 120 290 Z" 
              fill="url(#fireGradient)"
              filter="url(#glow)"
              opacity="0.7"
              animate={{ 
                d: [
                  "M120 290 C90 320, 70 360, 120 410 C170 360, 150 320, 120 290 Z",
                  "M120 290 C85 325, 65 370, 120 420 C175 370, 155 325, 120 290 Z",
                  "M120 290 C90 320, 70 360, 120 410 C170 360, 150 320, 120 290 Z"
                ],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Capa interna del fuego - más brillante y concentrada */}
            <motion.path 
              d="M120 290 
                 C105 310, 95 340, 120 380 
                 C145 340, 135 310, 120 290 Z" 
              fill="#ffff00"
              filter="url(#glow)"
              opacity="0.9"
              animate={{ 
                d: [
                  "M120 290 C105 310, 95 340, 120 380 C145 340, 135 310, 120 290 Z",
                  "M120 290 C100 315, 90 350, 120 390 C150 350, 140 315, 120 290 Z",
                  "M120 290 C105 310, 95 340, 120 380 C145 340, 135 310, 120 290 Z"
                ],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Núcleo del fuego - intenso y brillante */}
            <motion.ellipse
              cx="120"
              cy="320"
              rx="15"
              ry="25"
              fill="#ffffff"
              filter="url(#glow)"
              opacity="0.8"
              animate={{ 
                ry: [25, 35, 25],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.g>
        
          {/* Base del cohete con detalles metálicos */}
          <g>
            {/* Parte inferior curva */}
            <path
              d="M85 240 L85 280 
                 A35 10 0 0 0 155 280 
                 L155 240 Z"
              fill="url(#metalGradient)"
              stroke="#555555"
              strokeWidth="1"
              filter="url(#softShadow)"
            />
            
            {/* Base metálica con sombras */}
            <ellipse
              cx="120"
              cy="280"
              rx="35"
              ry="8"
              fill="#444444"
              stroke="#333333"
              strokeWidth="1"
            />
            
            {/* Anillo de conexión */}
            <path
              d="M90 250 L90 260 L150 260 L150 250"
              fill="none"
              stroke="#666666"
              strokeWidth="1.5"
            />
          </g>
        
          {/* Cuerpo principal del cohete con efecto 3D */}
          <g>
            {/* Cuerpo principal blanco */}
            <path
              d="M85 80 L85 240 
                 A35 15 0 0 0 155 240
                 L155 80 Z"
              fill="url(#whiteGradient)"
              stroke="#cccccc"
              strokeWidth="1"
              filter="url(#softShadow)"
            />
            
            {/* Efecto de volumen y sombra lateral izquierda */}
            <path
              d="M85 80 L85 240 
                 C95 235, 105 233, 120 233
                 L120 80 Z"
              fill="url(#shadowGradient)"
              opacity="0.1"
            />
            
            {/* Detalles del cuerpo - lineas horizontales */}
            {[...Array(4)].map((_, i) => (
              <path
                key={`line-${i}`}
                d="M90 140 L150 140"
                stroke="#dddddd"
                strokeWidth="1"
                transform={`translate(0, ${i * 25})`}
                opacity="0.8"
              />
            ))}
          </g>
          
          {/* Nariz del cohete con efecto cónico 3D */}
          <g>
            <path
              d="M85 80 C85 30, 120 10, 155 80 Z"
              fill="url(#orangeGradient)"
              stroke="#e64d00"
              strokeWidth="1"
              filter="url(#softShadow)"
            />
            
            {/* Sombra para el efecto 3D en la nariz */}
            <path
              d="M85 80 C90 40, 105 20, 120 35 L120 80 Z"
              fill="#000000"
              opacity="0.1"
            />
            
            {/* Brillo en la punta */}
            <path
              d="M115 40 C118 30, 125 25, 130 35"
              stroke="#ffffff"
              strokeWidth="2"
              opacity="0.6"
              strokeLinecap="round"
            />
          </g>
          
          {/* Ventana circular con efecto cristal */}
          <g>
            {/* Ventana principal */}
            <circle
              cx="120"
              cy="130"
              r="18"
              fill="url(#windowGradient)"
              stroke="#999999"
              strokeWidth="3"
              filter="url(#softShadow)"
            />
            
            {/* Marco metálico */}
            <circle
              cx="120"
              cy="130"
              r="20"
              fill="none"
              stroke="url(#metalGradient)"
              strokeWidth="3"
            />
            
            {/* Reflejo en la ventana - efecto de brillo */}
            <path
              d="M110 122 A12 8 0 0 0 125 122"
              stroke="#ffffff"
              strokeWidth="4"
              opacity="0.6"
              strokeLinecap="round"
            />
            
            {/* Tornillos de la ventana */}
            {[45, 135, 225, 315].map((angle, i) => (
              <circle
                key={`screw-${i}`}
                cx={120 + Math.cos(angle * Math.PI / 180) * 22}
                cy={130 + Math.sin(angle * Math.PI / 180) * 22}
                r="2"
                fill="#666666"
              />
            ))}
          </g>
          
          {/* Aletas del cohete con efectos 3D */}
          <g>
            {/* Aleta derecha */}
            <path
              d="M155 180 L190 250 L155 250 Z"
              fill="url(#finGradient)"
              stroke="#cc4400"
              strokeWidth="1.5"
              filter="url(#softShadow)"
            />
            
            {/* Efecto 3D en aleta derecha */}
            <path
              d="M155 180 L170 210 L155 210 Z"
              fill="#ffffff"
              opacity="0.2"
            />
            
            {/* Aleta izquierda */}
            <path
              d="M85 180 L50 250 L85 250 Z"
              fill="url(#finGradient)"
              stroke="#cc4400"
              strokeWidth="1.5"
              filter="url(#softShadow)"
            />
            
            {/* Efecto 3D en aleta izquierda */}
            <path
              d="M85 180 L70 210 L85 210 Z"
              fill="#000000"
              opacity="0.2"
            />
            
            {/* Detalles en las aletas - líneas de refuerzo */}
            <path
              d="M85 200 L65 230"
              stroke="#cc4400"
              strokeWidth="1"
            />
            <path
              d="M155 200 L175 230"
              stroke="#cc4400"
              strokeWidth="1"
            />
          </g>
          
          {/* Detalles adicionales - logotipo y paneles */}
          <g>
            {/* Logo del cohete */}
            <circle
              cx="120"
              cy="180"
              r="10"
              fill="#ffffff"
              stroke="#dddddd"
              strokeWidth="1"
            />
            <path
              d="M115 180 L125 180 M120 175 L120 185"
              stroke="#ff5c11"
              strokeWidth="2"
              strokeLinecap="round"
            />
            
            {/* Panel de control */}
            <rect
              x="100"
              cy="205"
              width="40"
              height="15"
              rx="2"
              fill="#eeeeee"
              stroke="#dddddd"
              strokeWidth="1"
            />
            
            {/* Luces de estado */}
            <circle cx="105" cy="212" r="2" fill="#00cc00" />
            <circle cx="115" cy="212" r="2" fill="#ffcc00" />
            <circle cx="125" cy="212" r="2" fill="#ff0000" />
            <circle cx="135" cy="212" r="2" fill="#3366ff" />
          </g>
          
          {/* Elementos decorativos - antena y detalles */}
          <g>
            {/* Antena superior */}
            <line
              x1="120"
              y1="30"
              x2="120"
              y2="15"
              stroke="#999999"
              strokeWidth="1.5"
            />
            <circle
              cx="120"
              cy="12"
              r="3"
              fill="#ff5c11"
            />
            
            {/* Remaches decorativos en el cuerpo */}
            {[...Array(6)].map((_, i) => (
              <g key={`rivet-group-${i}`}>
                <circle 
                  key={`rivet-left-${i}`}
                  cx={90}
                  cy={100 + i * 25}
                  r={1.5}
                  fill="#999999"
                />
                <circle 
                  key={`rivet-right-${i}`}
                  cx={150}
                  cy={100 + i * 25}
                  r={1.5}
                  fill="#999999"
                />
              </g>
            ))}
          </g>
        </motion.g>

        {/* Partículas de fuego y humo */}
        <g>
          {/* Partículas de fuego */}
          {[...Array(15)].map((_, i) => (
            <motion.circle 
              key={`fire-particle-${i}`}
              cx={105 + Math.random() * 30}
              cy={320 + Math.random() * 60}
              r={1 + Math.random() * 3}
              fill={i % 3 === 0 ? "#ffff00" : i % 3 === 1 ? "#ffcc00" : "#ff6600"}
              filter="url(#glow)"
              animate={{ 
                opacity: [0, 0.8, 0],
                y: [0, 60 + Math.random() * 80],
                x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 60],
                scale: [1, 0.5, 0]
              }}
              transition={{ 
                duration: 1 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
          
          {/* Humo lateral */}
          {[...Array(8)].map((_, i) => (
            <motion.circle 
              key={`smoke-particle-${i}`}
              cx={i % 2 === 0 ? 80 + Math.random() * 10 : 160 - Math.random() * 10}
              cy={290 + Math.random() * 30}
              r={3 + Math.random() * 4}
              fill="#ffffff"
              opacity={0.3}
              animate={{ 
                opacity: [0, 0.3, 0],
                y: [0, -40 - Math.random() * 60],
                x: [0, (i % 2 === 0 ? -1 : 1) * (20 + Math.random() * 30)],
                scale: [0.5, 1.5, 3]
              }}
              transition={{ 
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </g>
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
