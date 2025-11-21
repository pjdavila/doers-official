import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BlogPostContent from '@/components/blog/blog-post-content';
import { getWordPressPostBySlug, stripHtmlTags } from '@/lib/wordpress';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getWordPressPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - DOERS',
    };
  }

  const description = stripHtmlTags(post.excerpt.rendered);
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return {
    title: `${post.title.rendered} - DOERS Blog`,
    description,
    openGraph: {
      title: post.title.rendered,
      description,
      type: 'article',
      publishedTime: post.date,
      authors: ['DOERS'],
      images: featuredImage ? [{ url: featuredImage }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getWordPressPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-6 py-32">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray hover:text-orange transition-colors mb-12 font-space"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>

          {/* Post Content */}
          <BlogPostContent post={post} />
        </div>
      </div>
      <Footer />
    </>
  );
}
