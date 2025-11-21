'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Dribbble } from "lucide-react";
import doersLogo from "../../assets/images/DOERS-Horizontal.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray to-transparent opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Link href="#" className="flex items-center gap-2 mb-6 md:mb-0">
            <img src={doersLogo} alt="DOERS Logo" className="h-9" />
            <span className="text-orange text-xs font-space">{t('footer.since')}</span>
          </Link>
          
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#services" className="text-gray hover:text-white transition-colors font-space text-sm">{t('header.navigation.services')}</a>
            <a href="#work" className="text-gray hover:text-white transition-colors font-space text-sm">{t('header.navigation.work')}</a>
            <a href="#about" className="text-gray hover:text-white transition-colors font-space text-sm">{t('header.navigation.about')}</a>
            <a href="#contact" className="text-gray hover:text-white transition-colors font-space text-sm">{t('header.navigation.contact')}</a>
            <Link href="/privacy-policy" className="text-gray hover:text-white transition-colors font-space text-sm">{t('footer.privacy')}</Link>
          </nav>
        </div>
        
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} DOERS. {t('footer.copyright')}</p>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-gray hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-gray hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-gray hover:text-white transition-colors">
              <Dribbble size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
