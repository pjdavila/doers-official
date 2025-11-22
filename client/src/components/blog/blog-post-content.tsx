'use client'

import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import type { WordPressPost } from "@shared/wordpress-types";
import { formatPostDate } from "@/lib/wordpress";

interface BlogPostContentProps {
  post: WordPressPost;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const categories = post._embedded?.['wp:term']?.[0] || [];

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-12">
        <h1 className="font-bebas text-4xl md:text-6xl mb-6 text-white">
          {post.title.rendered}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray text-sm mb-8">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <time dateTime={post.date}>
              {formatPostDate(post.date)}
            </time>
          </div>

          {categories.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Tag size={16} />
              {categories.map((category, index) => (
                <span key={category.id}>
                  <span className="text-orange hover:text-orange/80 transition-colors cursor-pointer">
                    {category.name}
                  </span>
                  {index < categories.length - 1 && <span className="mx-2">,</span>}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Featured Image */}
        {featuredImage && (
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      {/* Content */}
      <div
        className="prose prose-invert prose-lg max-w-none
          prose-headings:font-space prose-headings:text-white
          prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8
          prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
          prose-p:text-gray prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-orange prose-a:no-underline hover:prose-a:text-orange/80
          prose-strong:text-white prose-strong:font-semibold
          prose-ul:text-gray prose-ul:my-6
          prose-ol:text-gray prose-ol:my-6
          prose-li:mb-2
          prose-blockquote:border-l-4 prose-blockquote:border-orange prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray
          prose-code:text-orange prose-code:bg-zinc-900 prose-code:px-2 prose-code:py-1 prose-code:rounded
          prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-lg
          prose-img:rounded-lg prose-img:my-8"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
};

export default BlogPostContent;
