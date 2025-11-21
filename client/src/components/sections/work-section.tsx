'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/animations/reveal";
import ProjectCard from "@/components/ui/project-card";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMounted } from "@/hooks/use-mounted";
type Category = "apps" | "dashboards" | "websites" | "social";

interface Project {
  image: string;
  category: string;
  title: string;
  description: string;
  categoryColor: string;
  categories: Category[];
}

const projects: Project[] = [
  {
    image: "/images/projects/WAPA_TV_OTT_Streaming_8cf1a965.png",
    category: "work.projects.ottApp.category",
    title: "WAPA TV",
    description: "work.projects.ottApp.description",
    categoryColor: "text-orange",
    categories: ["apps"],
  },
  {
    image: "/images/projects/TeleOnce_Website_Redesign_2772bc46.png",
    category: "work.projects.webRedesign.category",
    title: "TeleOnce",
    description: "work.projects.webRedesign.description",
    categoryColor: "text-purple",
    categories: ["apps", "websites"],
  },
  {
    image: "/images/projects/PRTicket_E-commerce_Platform_9f37733b.png",
    category: "work.projects.ecommerce.category",
    title: "PRTicket",
    description: "work.projects.ecommerce.description",
    categoryColor: "text-orange",
    categories: ["websites"],
  },
  {
    image: "/images/projects/Jeep_RAM_Interactive_Experience_3ad3eead.png",
    category: "work.projects.interactive.category",
    title: "Jeep & RAM",
    description: "work.projects.interactive.description",
    categoryColor: "text-purple",
    categories: ["websites"],
  },
  {
    image: "/images/projects/Analytics_Dashboard_275a6a78.png",
    category: "work.projects.analytics.category",
    title: "Analytics Pro",
    description: "work.projects.analytics.description",
    categoryColor: "text-orange",
    categories: ["dashboards"],
  },
  {
    image: "/images/projects/CRM_Dashboard_96472a81.png",
    category: "work.projects.crm.category",
    title: "Sales CRM",
    description: "work.projects.crm.description",
    categoryColor: "text-purple",
    categories: ["dashboards"],
  },
  {
    image: "/images/projects/Social_Media_Campaign_3f193435.png",
    category: "work.projects.socialCampaign.category",
    title: "Social Campaign",
    description: "work.projects.socialCampaign.description",
    categoryColor: "text-orange",
    categories: ["social"],
  },
  {
    image: "/images/projects/Social_Media_Content_f0a14ef1.png",
    category: "work.projects.contentStrategy.category",
    title: "Content Strategy",
    description: "work.projects.contentStrategy.description",
    categoryColor: "text-purple",
    categories: ["social"],
  }
];

const categories = [
  { id: "all", label: "work.filters.all" },
  { id: "apps", label: "work.filters.apps" },
  { id: "dashboards", label: "work.filters.dashboards" },
  { id: "websites", label: "work.filters.websites" },
  { id: "social", label: "work.filters.social" },
];

const WorkSection = () => {
  const { t } = useTranslation();
  const mounted = useMounted();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter as Category));

  return (
    <section id="work" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
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
        <Reveal width="100%">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-6xl mb-4">{mounted ? t('work.title') : 'Our Work'}</h2>
            <p className="font-space text-lg text-gray max-w-2xl mx-auto">{mounted ? t('work.subtitle') : 'Explore our portfolio of digital solutions'}</p>
          </div>
        </Reveal>
        
        <Reveal delay={0.2} width="100%">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`
                  px-6 py-3 rounded-full font-space font-medium text-sm uppercase tracking-wider
                  border-2 transition-all duration-300
                  ${activeFilter === cat.id 
                    ? 'bg-gradient-to-r from-orange to-purple text-white border-transparent shadow-lg shadow-orange/30' 
                    : 'border-gray border-opacity-30 text-gray hover:border-opacity-60 hover:text-white'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`filter-${cat.id}`}
              >
                {mounted ? t(cat.label) : cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}
              </motion.button>
            ))}
          </div>
        </Reveal>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
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
          </motion.div>
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-space text-lg text-gray">
              {mounted ? t('work.noProjects') : 'No projects found in this category'}
            </p>
          </motion.div>
        )}
        
        <Reveal delay={0.3}>
          <div className="text-center">
            <motion.a 
              href="#" 
              className="inline-flex items-center gap-2 border border-gray border-opacity-30 px-8 py-4 rounded-full font-space font-medium text-lg hover:bg-white hover:bg-opacity-5 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-view-all-projects"
            >
              <span>{mounted ? t('work.viewAll') : 'View All Projects'}</span>
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WorkSection;
