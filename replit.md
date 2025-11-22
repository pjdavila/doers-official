# Multilingual Digital Platform Project

## Overview
A multilingual digital platform with advanced 3D interactive design, focusing on immersive user experiences through cutting-edge web technologies and detailed animated elements. The project aims to provide a robust, high-performance web presence with a focus on SEO, especially for AI crawler detection, and a visually rich user experience. It integrates WordPress for blog content and utilizes modern frontend and backend technologies.

## User Preferences
- Communication: Clear, technical explanations
- Code Style: TypeScript with proper typing
- Architecture: Full-stack JavaScript with minimal backend

## System Architecture
The platform is built on Next.js 16 with the App Router, providing Server-Side Rendering (SSR) for improved SEO and performance. The frontend leverages React 18, TypeScript, Tailwind CSS for styling, and Framer Motion for sophisticated animations. Internationalization is handled via i18next for English and Spanish. For 3D graphics and interactive elements, Spline is integrated, creating an orbital animation system with detailed elements and a dynamic starfield background.

The UI/UX emphasizes immersive experiences with advanced animation components such as MagneticButton, ParticleSystem, TextReveal, Counter, and ScrollReveal. Design patterns include glassmorphism for cards and elements, and a dynamic color scheme featuring orange/purple gradients. SEO optimization is a core focus, with comprehensive meta tags, Open Graph, Twitter Card integration, and JSON-LD structured data.

The backend is an Express.js server with TypeScript, handling API routes and email functionality. It uses an in-memory storage interface, with a future consideration for a PostgreSQL database with Drizzle ORM. The build process uses Turbopack for Next.js and esbuild for the backend, producing an optimized production bundle.

### Feature Specifications:
- **Hero Section**: Features an orbital animation system with technology icons, a Starfield background, AI-focused messaging, and interactive hints.
- **Services Section**: Incorporates mouse-tracking 3D tilt cards, floating icon animations, and gradient titles.
- **About Section**: Utilizes animated counter components and glassmorphism stat cards with alternating color schemes.
- **Blog Integration**: Seamlessly pulls content from WordPress via its REST API.
- **Accessibility**: Includes smooth scroll behavior and `prefers-reduced-motion` support.

## External Dependencies
- **Framework**: Next.js 16
- **Frontend Libraries**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Internationalization**: i18next
- **3D Graphics**: Spline
- **CMS Integration**: WordPress REST API (cmsnet.co/doers)
- **Backend Framework**: Express.js
- **Database (Planned)**: PostgreSQL with Drizzle ORM
- **Deployment Platform**: Replit Cloud Run (doers.dev)

## WordPress Blog Integration
The platform includes a fully-featured blog powered by WordPress CMS with TechCrunch/Engadget-inspired editorial design:

### Blog Features:
- **WordPress REST API**: Fetches posts from cmsnet.co/doers endpoint
- **Editorial Design**: Professional blog layout with featured posts, category badges, reading time
- **Image Optimization**: All WordPress images use Next.js Image component for production performance
- **Pagination**: 9 posts per page with URL parameter navigation (?page=2, ?page=3)
- **Featured Post Hero**: Large hero section for latest post with DOERS brand gradients (orange/purple)
- **Reading Time Estimates**: Automatically calculated from post content
- **Category Badges**: Alternating DOERS color scheme (orange/purple)
- **Responsive Design**: Mobile-first grid layout adapting to all screen sizes
- **SEO Optimized**: Server-side rendering for all blog pages with proper meta tags

### Blog Routes:
- `/blog` - Blog listing page with pagination (Dynamic SSR)
- `/blog/[slug]` - Individual post pages (Dynamic SSR)

### Technical Implementation:
- `client/src/lib/wordpress.ts` - API client and utility functions
- `client/src/components/blog/` - Blog components (FeaturedPost, BlogCard, BlogPagination)
- `shared/wordpress-types.ts` - TypeScript types for WordPress API responses
- `next.config.mjs` - Remote image patterns configured for cmsnet.co domain

## Production Build & Deployment

### Recent Optimizations (November 22, 2025):
1. **Image Migration to Next.js**: All `<img>` tags replaced with `<Image>` component for production optimization
2. **Vite Cleanup**: Legacy Vite server files moved to `/archive` directory
3. **TypeScript Configuration**: Updated tsconfig.json to exclude archived files
4. **Successful Production Build**: Clean build with no errors, ready for deployment

### Build Output:
```
Route (app)
├ ○ /                    (Static - prerendered)
├ ○ /_not-found          (Static)
├ ƒ /blog                (Dynamic - server-rendered)
├ ƒ /blog/[slug]         (Dynamic - server-rendered)
└ ○ /privacy-policy      (Static - prerendered)
```

### Deployment Commands:
```bash
# Development
next dev              # http://localhost:3000

# Production Build
next build            # Creates optimized bundle

# Production Server
next start            # Serves production build
```

### Production Domain:
- **URL**: doers.dev
- **WordPress CMS**: cmsnet.co/doers
- **Image CDN**: Configured for WordPress images from cmsnet.co domain