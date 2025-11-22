'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { WordPressPost } from "@shared/wordpress-types";
import { stripHtmlTags, formatPostDate } from "@/lib/wordpress";

interface BlogCardProps {
  post: WordPressPost;
  index: number;
}

// Estimate reading time based on word count
const estimateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = stripHtmlTags(content).split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

const BlogCard = ({ post, index }: BlogCardProps) => {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const excerpt = stripHtmlTags(post.excerpt.rendered);
  const readingTime = estimateReadingTime(post.content.rendered);

  return (
    <motion.article
      className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange/50 transition-all duration-500 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      data-testid={`blog-card-${post.id}`}
    >
      {/* Featured Image */}
      {featuredImage && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.slice(0, 2).map((category, index) => {
              const colorClass = index === 0 
                ? 'bg-orange/10 text-orange border-orange/30' 
                : 'bg-purple/10 text-purple border-purple/30';
              return (
                <span
                  key={category.id}
                  className={`text-xs px-3 py-1.5 ${colorClass} border backdrop-blur-sm rounded-full font-space font-semibold uppercase tracking-wide`}
                >
                  {category.name}
                </span>
              );
            })}
          </div>
        )}

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl md:text-2xl font-space font-bold text-white mb-3 line-clamp-2 group-hover:text-orange transition-colors duration-300 leading-tight">
            {post.title.rendered}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-800">
          <div className="flex items-center gap-2 text-gray text-xs font-space">
            <Calendar size={14} />
            <time dateTime={post.date}>
              {formatPostDate(post.date)}
            </time>
          </div>
          
          <div className="flex items-center gap-2 text-gray text-xs font-space">
            <Clock size={14} />
            <span>{readingTime} min</span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="ml-auto flex items-center gap-1 text-orange text-sm font-space font-semibold hover:gap-2 transition-all duration-300 group/link"
            data-testid={`read-more-${post.id}`}
          >
            Read
            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Hover Effect Border & Glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange/0 via-orange/0 to-purple/0 group-hover:from-orange/20 group-hover:via-purple/20 group-hover:to-orange/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10"></div>
    </motion.article>
  );
};

export default BlogCard;
