import { motion } from "framer-motion";
import Reveal from "@/components/animations/reveal";
import ServiceCard from "@/components/ui/service-card";
import { Smartphone, Laptop, Tv, Bot, Palette, LineChart, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform apps with seamless user experiences that drive engagement and achieve business goals.",
    iconBgColor: "bg-orange/10",
    iconColor: "text-orange",
  },
  {
    icon: Laptop,
    title: "High-Performance Websites",
    description: "Stunning, responsive websites optimized for conversion, speed, and seamless user journeys.",
    iconBgColor: "bg-purple/10",
    iconColor: "text-purple",
  },
  {
    icon: Tv,
    title: "OTT Applications",
    description: "Custom streaming solutions for delivering content across multiple platforms with immersive viewing experiences.",
    iconBgColor: "bg-orange/10",
    iconColor: "text-orange",
  },
  {
    icon: Bot,
    title: "AI Workflow Automation",
    description: "Intelligent systems that streamline processes, reduce costs, and deliver smarter business operations.",
    iconBgColor: "bg-purple/10",
    iconColor: "text-purple",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Strategic design that balances aesthetics with functionality to create memorable brand experiences.",
    iconBgColor: "bg-orange/10",
    iconColor: "text-orange",
  },
  {
    icon: LineChart,
    title: "Digital Strategy",
    description: "Data-driven roadmaps that align technology with business objectives for sustainable growth.",
    iconBgColor: "bg-purple/10",
    iconColor: "text-purple",
  }
];

const ServicesSection = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-20 relative overflow-hidden" style={{ perspective: "1500px" }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        {/* Animated background elements with depth */}
        <motion.div 
          className="absolute top-0 left-0 w-1/3 h-1/2 bg-purple opacity-5 blur-[100px]"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -10, 0],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-orange opacity-5 blur-[100px]"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 10, 0],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating geometric shapes for depth */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple/10 rounded-full"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-orange/10"
          style={{ borderRadius: "30%" }}
          animate={{
            y: [0, 30, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <motion.h2 
              className="font-bebas text-4xl md:text-6xl mb-4"
              whileInView={{
                backgroundImage: [
                  "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 100%)",
                  "linear-gradient(to right, #FF5A1F 0%, #7A3FFF 50%, #FFFFFF 100%)",
                  "linear-gradient(to right, #FFFFFF 0%, #FF5A1F 50%, #7A3FFF 100%)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t('services.title')}
            </motion.h2>
            <p className="font-space text-lg text-gray max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </div>
        </Reveal>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ transformStyle: "preserve-3d" }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconBgColor={service.iconBgColor}
              iconColor={service.iconColor}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <Reveal delay={0.3}>
          <div className="mt-20 text-center">
            <motion.a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-full font-space font-medium text-lg hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;
