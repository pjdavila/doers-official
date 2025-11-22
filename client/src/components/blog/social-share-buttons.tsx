'use client'

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { SiX, SiFacebook, SiLinkedin, SiWhatsapp } from "react-icons/si";

interface SocialShareButtonsProps {
  url: string;
  title: string;
}

const SocialShareButtons = ({ url, title }: SocialShareButtonsProps) => {
  const shareLinks = useMemo(() => {
    if (!url) return [];
    
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    return [
      {
        name: "Twitter/X",
        icon: SiX,
        url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
        color: "hover:bg-white/10",
        testId: "button-share-twitter"
      },
      {
        name: "Facebook",
        icon: SiFacebook,
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        color: "hover:bg-blue-600/10",
        testId: "button-share-facebook"
      },
      {
        name: "LinkedIn",
        icon: SiLinkedin,
        url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        color: "hover:bg-blue-500/10",
        testId: "button-share-linkedin"
      },
      {
        name: "WhatsApp",
        icon: SiWhatsapp,
        url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
        color: "hover:bg-green-500/10",
        testId: "button-share-whatsapp"
      }
    ];
  }, [url, title]);

  if (!url || shareLinks.length === 0) {
    return null;
  }

  return (
    <div className="py-8 border-t border-b border-zinc-800 my-12">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Share2 size={20} className="text-orange" />
          <span className="font-space text-white font-medium">Compartir artículo</span>
        </div>
        
        <div className="flex items-center gap-3">
          {shareLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 rounded-full bg-zinc-900/50 border border-zinc-800 ${social.color} transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-testid={social.testId}
                aria-label={`Compartir en ${social.name}`}
              >
                <Icon size={18} className="text-gray group-hover:text-white transition-colors" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialShareButtons;
