import type { WordPressPost, WordPressCategory, WordPressPaginationInfo } from '@shared/wordpress-types';

const WORDPRESS_API_URL = 'https://cmsnet.co/doers/wp-json/wp/v2';

export async function getWordPressPosts(
  page: number = 1,
  perPage: number = 8,
  categoryId?: number
): Promise<{ posts: WordPressPost[]; pagination: WordPressPaginationInfo }> {
  try {
    const params = new URLSearchParams({
      per_page: perPage.toString(),
      page: page.toString(),
      _embed: 'true',
      orderby: 'date',
      order: 'desc',
    });

    if (categoryId) {
      params.append('categories', categoryId.toString());
    }

    const response = await fetch(`${WORDPRESS_API_URL}/posts?${params}`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const posts: WordPressPost[] = await response.json();
    
    // Get pagination info from headers
    const total = parseInt(response.headers.get('X-WP-Total') || '0');
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');

    return {
      posts,
      pagination: {
        total,
        totalPages,
        currentPage: page,
        perPage,
      },
    };
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return {
      posts: [],
      pagination: {
        total: 0,
        totalPages: 0,
        currentPage: page,
        perPage,
      },
    };
  }
}

export async function getWordPressPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`,
      {
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const posts: WordPressPost[] = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
}

export async function getWordPressCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/categories?per_page=100`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress categories:', error);
    return [];
  }
}

export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

export function formatPostDate(dateString: string, locale: string = 'en-US'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
