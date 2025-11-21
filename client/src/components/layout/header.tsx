'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../language-switcher";
import { useMounted } from "@/hooks/use-mounted";

const Header = () => {
  const { t } = useTranslation();
  const mounted = useMounted();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = mounted ? [
    { name: t('header.navigation.home'), href: "#" },
    { name: t('header.navigation.services'), href: "#services" },
    { name: t('header.navigation.work'), href: "#work" },
    { name: t('header.navigation.about'), href: "#about" },
    { name: t('header.navigation.contact'), href: "#contact" },
  ] : [
    { name: 'Home', href: "#" },
    { name: 'Services', href: "#services" },
    { name: 'Work', href: "#work" },
    { name: 'About', href: "#about" },
    { name: 'Contact', href: "#contact" },
  ];

  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? "bg-black bg-opacity-80 backdrop-blur-md shadow-md" : ""
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center gap-8">
          <Link href="#" className="flex items-center gap-2 flex-shrink-0">
            <img src="/images/DOERS-Horizontal.png" alt="DOERS Logo" className="h-14" />
            {mounted && <span className="hidden sm:block text-orange text-xs font-space">{t('header.since')}</span>}
          </Link>
          
          <nav className="hidden lg:flex items-center flex-1 justify-center">
            <div className="bg-white bg-opacity-[0.08] backdrop-blur-sm rounded-full px-2 py-2 border border-white border-opacity-10">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <a 
                    href={link.href} 
                    key={link.name}
                    data-testid={`nav-${link.name.toLowerCase()}`}
                    className="relative text-white font-space text-sm px-5 py-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <LanguageSwitcher />
            <a 
              href="#contact" 
              data-testid="button-get-started"
              className="bg-black text-white px-6 py-3 rounded-full font-space font-medium text-sm hover:bg-opacity-80 transition-all flex items-center gap-2 border border-white border-opacity-20"
            >
              <span>{mounted ? t('header.cta') : 'Get Started'}</span>
              <ArrowRight size={16} />
            </a>
          </div>
          
          <button 
            className="lg:hidden text-white" 
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-black bg-opacity-95 backdrop-blur-md fixed top-[72px] left-0 w-full overflow-hidden z-50"
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  className="text-white font-space tracking-wide text-lg border-b border-gray border-opacity-20 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                className="bg-orange text-white px-6 py-3 rounded-full font-space font-medium tracking-wide text-lg text-center"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                {mounted ? t('header.cta') : 'Get Started'}
              </motion.a>
              
              <motion.div
                className="mt-4 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.1 }}
              >
                <LanguageSwitcher />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
