'use client'

import { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import type { WordPressPost } from "@shared/wordpress-types";
import { stripHtmlTags, formatPostDate } from "@/lib/wordpress";

interface FeaturedPostProps {
  post: WordPressPost;
}

// Estimate reading time based on word count
const estimateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = stripHtmlTags(content).split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const categories = post._embedded?.['wp:term']?.[0] || [];
  
  // Memoize expensive calculations
  const excerpt = useMemo(() => stripHtmlTags(post.excerpt.rendered), [post.excerpt.rendered]);
  const readingTime = useMemo(() => estimateReadingTime(post.content.rendered), [post.content.rendered]);

  return (
    <motion.article
      className="group relative h-[600px] rounded-3xl overflow-hidden mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      data-testid="featured-post"
    >
      {/* Background Image */}
      {featuredImage && (
        <div className="absolute inset-0">
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Gradient Overlay - DOERS branding */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange/20 via-transparent to-purple/20 mix-blend-multiply"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
        {/* Featured Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-orange/90 backdrop-blur-sm rounded-full w-fit"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Sparkles size={16} className="text-black" />
          <span className="text-black font-space font-bold text-sm">FEATURED</span>
        </motion.div>

        {/* Categories */}
        {categories.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {categories.slice(0, 3).map((category, index) => {
              // Alternate colors for visual interest
              const colorClass = index === 0 ? 'bg-orange/20 text-orange border-orange/40' : 'bg-purple/20 text-purple border-purple/40';
              return (
                <span
                  key={category.id}
                  className={`text-xs px-3 py-1 ${colorClass} border backdrop-blur-sm rounded-full font-space font-semibold uppercase tracking-wide`}
                >
                  {category.name}
                </span>
              );
            })}
          </motion.div>
        )}

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <motion.h2
            className="font-bebas text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight group-hover:text-orange transition-colors duration-300 max-w-4xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            data-testid="featured-post-title"
          >
            {post.title.rendered}
          </motion.h2>
        </Link>

        {/* Excerpt */}
        <motion.p
          className="text-gray text-base md:text-lg mb-6 line-clamp-2 max-w-3xl font-space"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {excerpt}
        </motion.p>

        {/* Meta & CTA */}
        <motion.div
          className="flex flex-wrap items-center gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {/* Date */}
          <div className="flex items-center gap-2 text-gray text-sm font-space">
            <Calendar size={16} />
            <time dateTime={post.date}>
              {formatPostDate(post.date)}
            </time>
          </div>

          {/* Reading Time */}
          <div className="flex items-center gap-2 text-gray text-sm font-space">
            <Clock size={16} />
            <span>{readingTime} min read</span>
          </div>

          {/* Separator */}
          <div className="hidden md:block w-px h-6 bg-gray/30"></div>

          {/* CTA */}
          <Link
            href={`/blog/${post.slug}`}
            className="group/cta flex items-center gap-2 px-6 py-3 bg-orange hover:bg-orange/90 text-black rounded-full font-space font-bold transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-orange/50"
            data-testid="featured-post-cta"
          >
            Read Full Story
            <ArrowRight size={18} className="group-hover/cta:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/20 blur-3xl"></div>
      </div>
    </motion.article>
  );
};

export default FeaturedPost;
