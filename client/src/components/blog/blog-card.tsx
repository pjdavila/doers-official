'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import type { WordPressPost } from "@shared/wordpress-types";
import { stripHtmlTags, formatPostDate } from "@/lib/wordpress";

interface BlogCardProps {
  post: WordPressPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const excerpt = stripHtmlTags(post.excerpt.rendered);

  return (
    <motion.article
      className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange/50 transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Featured Image */}
      {featuredImage && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60"></div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.slice(0, 2).map((category) => (
              <span
                key={category.id}
                className="text-xs px-3 py-1 bg-orange/10 text-orange border border-orange/20 rounded-full font-space"
              >
                {category.name}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-space font-semibold text-white mb-3 line-clamp-2 group-hover:text-orange transition-colors duration-300">
            {post.title.rendered}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray text-xs">
            <Calendar size={14} />
            <time dateTime={post.date}>
              {formatPostDate(post.date)}
            </time>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-orange text-sm font-space hover:gap-2 transition-all duration-300"
          >
            Read More
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
    </motion.article>
  );
};

export default BlogCard;
