'use client'

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/use-mounted";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const mounted = useMounted();

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Botón de regreso */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-gray hover:text-white transition-colors font-space">
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>
        </motion.div>

        <motion.h1 
          className="font-bebas text-6xl md:text-8xl mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple">{mounted ? t('privacy.title') : 'Privacy Policy'}</span>
        </motion.h1>
        
        <motion.div 
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-8">
            {/* Secciones con animación staggered */}
            {[
              { key: 'section1', delay: 0.1 },
              { key: 'section2', delay: 0.15 },
              { key: 'section3', delay: 0.2 },
              { key: 'section4', delay: 0.25 },
              { key: 'section5', delay: 0.3 },
              { key: 'section6', delay: 0.35 },
              { key: 'section7', delay: 0.4 }
            ].map(({ key, delay }) => (
              <motion.section
                key={key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay }}
                className="border-l-2 border-purple/30 pl-6 py-4"
              >
                <h2 className="font-bebas text-3xl text-orange mb-4">{mounted ? t(`privacy.${key}.title`) : 'Section'}</h2>
                <p className="font-space text-lg text-gray leading-relaxed">
                  {mounted ? t(`privacy.${key}.content`) : 'Content'}
                </p>
                {key === 'section2' && (
                  <motion.ul 
                    className="font-space text-gray space-y-3 ml-6 mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: delay + 0.2 }}
                  >
                    <li className="flex items-start gap-3">
                      <span className="text-orange mt-1">•</span>
                      {mounted ? t('privacy.section2.item1') : 'Information we collect'}
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange mt-1">•</span>
                      {mounted ? t('privacy.section2.item2') : 'How we use your information'}
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange mt-1">•</span>
                      {mounted ? t('privacy.section2.item3') : 'Data sharing'}
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange mt-1">•</span>
                      {mounted ? t('privacy.section2.item4') : 'Your rights'}
                    </li>
                  </motion.ul>
                )}
              </motion.section>
            ))}

            <motion.section 
              className="bg-gradient-to-r from-purple/10 to-orange/10 p-8 rounded-xl border border-purple/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="font-bebas text-3xl text-purple mb-4">{mounted ? t('privacy.contact.title') : 'Contact Us'}</h2>
              <p className="font-space text-lg text-gray leading-relaxed mb-4">
                {mounted ? t('privacy.contact.content') : 'If you have any questions about this privacy policy, please contact us.'}
              </p>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="font-space text-orange">Email: info@doers.dev</p>
              </div>
            </motion.section>

            <motion.div 
              className="text-center pt-8 border-t border-gray/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="font-space text-sm text-gray">
                {mounted ? t('privacy.lastUpdated') : 'Last updated: November 2025'}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;