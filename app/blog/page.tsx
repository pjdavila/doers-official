import type { Metadata } from 'next';
import { Suspense } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BlogCard from '@/components/blog/blog-card';
import { getWordPressPosts } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Blog - DOERS AI Development | Latest AI Insights & News',
  description: 'Stay updated with the latest AI development insights, machine learning trends, and technology news from DOERS, Puerto Rico\'s premier AI development agency.',
  openGraph: {
    title: 'Blog - DOERS AI Development',
    description: 'Latest AI insights, machine learning trends, and technology news from Puerto Rico\'s leading AI agency.',
  },
};

export default async function BlogPage() {
  const { posts, pagination } = await getWordPressPosts(1, 12);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bebas text-5xl md:text-7xl mb-6">
              AI Insights & <span className="text-orange">Expertise</span>
            </h1>
            <p className="text-gray text-lg md:text-xl font-space">
              Discover the latest in artificial intelligence, machine learning, and technology innovation from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {posts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>

              {/* Pagination Info */}
              {pagination.totalPages > 1 && (
                <div className="text-center">
                  <p className="text-gray text-sm font-space">
                    Showing {posts.length} of {pagination.total} posts
                  </p>
                </div>
              )}
            </>
          ) : (
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
