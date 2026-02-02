import type { Metadata } from 'next';
import { Suspense } from 'react';

export const runtime = 'edge';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FeaturedPost from '@/components/blog/featured-post';
import BlogCard from '@/components/blog/blog-card';
import BlogPagination from '@/components/blog/blog-pagination';
import { getWordPressPosts } from '@/lib/wordpress';
import { TrendingUp, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - DOERS AI Development | Latest AI Insights & Tech News',
  description: 'Breaking news and in-depth analysis on AI, machine learning, and emerging technologies from Puerto Rico\'s premier AI development agency. Stay ahead of the tech curve.',
  openGraph: {
    title: 'Blog - DOERS AI Development | Latest AI & Tech News',
    description: 'Breaking AI news, machine learning insights, and technology analysis from Puerto Rico\'s leading AI agency.',
  },
};

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  
  // Validate and sanitize page number BEFORE making the API call
  let requestedPage = parseInt(page || '1', 10);
  if (isNaN(requestedPage) || requestedPage < 1) {
    requestedPage = 1;
  }
  
  // Fetch posts with validated page number
  let { posts, pagination } = await getWordPressPosts(requestedPage, 9);
  
  // If no posts but totalPages > 0, the page is out of range - fetch the last valid page
  if (posts.length === 0 && pagination.totalPages > 0 && requestedPage > pagination.totalPages) {
    const result = await getWordPressPosts(pagination.totalPages, 9);
    posts = result.posts;
    pagination = result.pagination;
  }

  // Separate featured post from the rest
  const [featuredPost, ...regularPosts] = posts;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            {/* Breaking News Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-orange/10 border border-orange/30 rounded-full backdrop-blur-sm">
              <Zap size={16} className="text-orange" />
              <span className="text-orange font-space font-bold text-sm uppercase tracking-wide">Latest Tech News</span>
            </div>
            
            <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl mb-6 leading-none">
              AI & Tech <span className="text-orange">Intelligence</span>
            </h1>
            <p className="text-gray text-lg md:text-xl font-space leading-relaxed max-w-2xl mx-auto">
              Breaking news, in-depth analysis, and expert insights on artificial intelligence, machine learning, and emerging technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      {featuredPost && (
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <FeaturedPost post={featuredPost} />
          </div>
        </section>
      )}

      {/* Latest Stories Header */}
      {regularPosts.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="text-orange" size={24} />
              <h2 className="font-bebas text-3xl md:text-4xl text-white">
                Latest Stories
              </h2>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          {regularPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {regularPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <BlogPagination
                  currentPage={pagination.currentPage}
                  totalPages={pagination.totalPages}
                  basePath="/blog"
                />
              )}
            </>
          ) : !featuredPost && (
            <div className="text-center py-20">
              <p className="text-gray text-lg font-space">No blog posts found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
