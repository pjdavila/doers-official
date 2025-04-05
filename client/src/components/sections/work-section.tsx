import { motion } from "framer-motion";
import Reveal from "@/components/animations/reveal";
import ProjectCard from "@/components/ui/project-card";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import project1Image from "@/assets/images/projects/project1.svg";
import project2Image from "@/assets/images/projects/project2.svg";
import project3Image from "@/assets/images/projects/project3.svg";
import project4Image from "@/assets/images/projects/project4.svg";

const projects = [
  {
    image: project1Image,
    category: "work.projects.ottApp.category",
    title: "WAPA TV",
    description: "work.projects.ottApp.description",
    categoryColor: "text-orange",
  },
  {
    image: project2Image,
    category: "work.projects.webRedesign.category",
    title: "TeleOnce",
    description: "work.projects.webRedesign.description",
    categoryColor: "text-purple",
  },
  {
    image: project3Image,
    category: "work.projects.ecommerce.category",
    title: "PRTicket",
    description: "work.projects.ecommerce.description",
    categoryColor: "text-orange",
  },
  {
    image: project4Image,
    category: "work.projects.interactive.category",
    title: "Jeep & RAM",
    description: "work.projects.interactive.description",
    categoryColor: "text-purple",
  }
];

const WorkSection = () => {
  const { t } = useTranslation();
  return (
    <section id="work" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        {/* Animated background elements */}
        <motion.div 
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-orange opacity-5 blur-[100px]"
          animate={{ 
            x: [0, -20, 0],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-6xl mb-4">{t('work.title')}</h2>
            <p className="font-space text-lg text-gray max-w-2xl mx-auto">{t('work.subtitle')}</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              category={project.category}
              title={project.title}
              description={project.description}
              categoryColor={project.categoryColor}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <Reveal delay={0.3}>
          <div className="text-center">
            <motion.a 
              href="#" 
              className="inline-flex items-center gap-2 border border-gray border-opacity-30 px-8 py-4 rounded-full font-space font-medium text-lg hover:bg-white hover:bg-opacity-5 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t('work.viewAll')}</span>
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WorkSection;
