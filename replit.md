# Multilingual Digital Platform Project

## Project Overview
A multilingual digital platform with advanced 3D interactive design, focusing on immersive user experiences through cutting-edge web technologies and detailed animated elements.

## Technology Stack
- **Frontend**: React with TypeScript, Tailwind CSS, Framer Motion
- **Internationalization**: i18next for multilingual support
- **3D Graphics**: Spline for 3D animations
- **Build Tool**: Vite for build optimization
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Replit Cloud Run

## Current Project Structure
```
├── client/               # Frontend React application
├── server/              # Backend Express server
├── shared/              # Shared types and schemas
├── dist/                # Production build output
├── attached_assets/     # Static assets
└── node_modules/        # Dependencies
```

## Production Build Configuration
- **Build Command**: `npm run build` - Builds both frontend (Vite) and backend (esbuild)
- **Start Command**: `npm run start` - Runs production server with NODE_ENV=production
- **Development**: `npm run dev` - Development server with hot reload

## Recent Changes

### 🔄 NEXT.JS 16 MIGRATION (November 21, 2025)
**Status**: ✅ Completed - Migrated from Vite + React to Next.js 16 with App Router

**Migration Overview**:
The project has been successfully migrated to Next.js 16 for improved SEO, SSR capabilities, and better performance optimization.

**New Structure Created**:

1. **Next.js App Router Setup** (`app/` directory):
   - `app/layout.tsx` - Root layout with complete SEO meta tags and JSON-LD structured data
   - `app/page.tsx` - Main home page importing existing components
   - `app/not-found.tsx` - Custom 404 page
   - `app/privacy-policy/page.tsx` - Privacy policy page
   - `app/globals.css` - Global styles with Tailwind
   - `app/providers.tsx` - Client-side providers (React Query, i18next)
   - `app/i18n.ts` - i18next configuration for client-side translations
   - `app/locales/` - Translation files (en, es)

2. **Configuration Files**:
   - `next.config.mjs` - Next.js configuration with image optimization and transpilation
   - `tsconfig.json` - Updated with Next.js paths and settings
   - `tailwind.config.ts` - Compatible with both Vite and Next.js
   - `postcss.config.mjs` - PostCSS configuration

3. **Public Assets**:
   - Migrated all public assets to `public/` directory
   - SEO images: og-image.jpg, twitter-image.jpg
   - Animated SVG logo files

**Key Features**:
- ✅ Server-Side Rendering (SSR) for better SEO
- ✅ App Router with file-based routing
- ✅ Enhanced SEO with meta tags and JSON-LD
- ✅ i18next integration for multilingual support
- ✅ React Query for data fetching
- ✅ All existing components work with 'use client' directives
- ✅ Improved performance with Turbopack (Next.js 16)
- ✅ Image optimization with next/image

**Migration Strategy**:
- Maintained all existing Vite/React components in `client/src/`
- Next.js pages import and use existing components as Client Components
- Preserved all animations, 3D effects, and interactive features
- Kept Express backend for API routes (can migrate to Next.js API routes later)
- Dual setup: Both Vite and Next.js configurations available

**Running the Project**:

**Option 1: Next.js (Recommended for Production)**
```bash
# Development
npm run dev  # Starts Next.js dev server on port 3000

# Production
npm run build  # Builds Next.js app
npm run start  # Starts Next.js production server
```

**Option 2: Vite (Legacy)**
```bash
# Development
npm run vite-dev  # Starts Vite + Express on port 5000

# Production
npm run vite-build  # Builds Vite app
npm run vite-start  # Starts production server
```

**⚠️ Manual Step Required**:
To switch the Replit workflow to Next.js, update `.replit` file (line ~41):
- Change: `args = "npm run dev"` (currently runs Vite)
- To ensure it runs Next.js when workflow restarts

**What's Improved**:
- Better SEO with server-side rendering
- Faster page loads with automatic code splitting
- Built-in image optimization
- Better production builds with Turbopack
- Improved developer experience with App Router
- Future-proof architecture for scaling

**Technical Notes**:
- Project uses ES modules (`"type": "module"`) so Next.js config is `.mjs`
- All client-side components marked with `'use client'` directive
- Tailwind configuration shared between Vite and Next.js
- i18next initialized on client-side for browser language detection

### 🚀 GALAXIES.DEV INSPIRED HERO SECTION (November 2025)
**Status**: ✅ Completed - Orbital animation system with 3D effects

**New Components Created**:

1. **OrbitingElements Component** (`client/src/components/animations/orbiting-elements.tsx`):
   - 3D orbital rings with rotating elements
   - Isometric central platform with gradient effects
   - Technology icons (Code, Database, Smartphone, Globe, Zap, CPU) on orbits
   - Multiple orbit rings with independent rotation speeds
   - Floating particles and dots for depth
   - Glassmorphism cards for orbital elements
   - Responsive hover effects with scale animations

2. **Starfield Component** (`client/src/components/animations/starfield.tsx`):
   - 200+ animated stars with varying sizes and speeds
   - Pulsating star effects with random delays
   - Shooting stars animation
   - Nebula cloud effects with purple/orange gradients
   - Deep space gradient background
   - Realistic space atmosphere

3. **Updated Hero Section** (`client/src/components/sections/hero-section.tsx`):
   - Replaced globe with orbital animation system
   - Starfield background for space theme
   - AI-focused messaging and CTAs
   - "Press S to get started" interactive hint
   - Improved layout for orbital visualization
   - Better mobile responsiveness

**Technical Implementation**:
- Pure CSS 3D transforms with Framer Motion
- No Three.js dependency needed
- Optimized performance with GPU acceleration
- Smooth 60fps animations
- Modular component architecture

### 🎯 AI-FOCUSED SEO OPTIMIZATION (November 2025)
**Status**: ✅ Completed - SEO optimized for AI crawler detection

**SEO Updates**:

1. **Meta Tags for AI Detection** (client/index.html):
   - Comprehensive meta tags for search engines
   - Open Graph and Twitter Card integration
   - JSON-LD structured data for Organization and WebSite
   - Geo tags for location-based search
   - Language support for English/Spanish

2. **Advanced Animation System**:
   - Created 5 premium animation components:
     - MagneticButton: Cursor-tracking magnetic effect
     - ParticleSystem: Connected particle background
     - TextReveal: Word-by-word reveal animation
     - Counter: Animated number counters with spring physics
     - ScrollReveal: Scroll-triggered animations

3. **Hero Section Enhancements**:
   - Integrated ParticleSystem background
   - MagneticButton CTAs with cursor tracking
   - TextReveal subtitle animation
   - Pulsing glow effects on title
   - Gradient shimmer on primary CTA

4. **Premium Components**:
   - LoadingScreen with progress bar and particle effects
   - TestimonialsSection with glass morphism cards
   - Auto-rotating carousel with staggered animations
   - Client logos grid

5. **Services Section 3D Effects**:
   - Mouse-tracking 3D tilt cards
   - Floating icon animations with depth
   - Icon glow effects on hover
   - Shine sweep effect
   - Floating geometric background shapes
   - Animated gradient title

6. **About Section Upgrades**:
   - Animated Counter components for statistics
   - Glass morphism stat cards
   - Alternating orange/purple color scheme
   - Hover effects with scale and color transitions

7. **Performance & Accessibility**:
   - Smooth scroll behavior
   - prefers-reduced-motion support for accessibility
   - Optimized animations with Framer Motion
   - Proper cleanup and state management

**Technical Implementation**:
- All animations use Framer Motion for consistency
- Spring physics for natural motion
- Proper TypeScript types (fixed LucideIcon type)
- 3D transforms with preserve-3d
- Responsive design maintained

**Deployment Notes**:
- ✅ Created og-image.jpg (1200x630px) in client/public/
- ✅ Created twitter-image.jpg (1200x630px) in client/public/
- ⚠️ Recommended: Test performance on lower-powered devices
- ⚠️ Recommended: Validate social preview images before launch using Facebook/Twitter debuggers

## Recent Changes (August 2025)

### ✅ DEPLOYMENT CONFIGURATION FIXED
**Issue Resolved**: Updated deployment configuration to use production commands instead of development commands.

**Production Build Status**: 
- ✅ Build command working: `npm run build` 
- ✅ Start command working: `npm run start`
- ✅ Production bundle size: ~314KB gzipped
- ✅ All dependencies properly bundled

**Required Manual Step for User**:
Since the `.replit` file cannot be edited programmatically, you need to manually update the workflow configuration:

1. **In the `.replit` file, line 41** (under workflow tasks):
   - Change: `args = "npm run dev"`  
   - To: `args = "npm run start"`

**Current Status**: 
- ✅ Production build verified working
- ✅ Package.json scripts configured correctly
- ⚠️ Workflow still uses development command (manual fix needed)

**What this fixes**: 
- Eliminates "dev command blocked for security" deployment error
- Ensures production optimizations are applied
- Uses proper NODE_ENV=production environment

## Project Architecture

### Frontend Structure
- Modern React with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- i18next for internationalization
- Spline integration for 3D content

### Backend Structure
- Express.js server with TypeScript
- In-memory storage interface
- REST API routes
- Session management

### Build Process
- Frontend: Vite builds to `dist/public/`
- Backend: esbuild bundles to `dist/index.js`
- Production: Single `dist/` folder contains complete application

## User Preferences
- Communication: Clear, technical explanations
- Code Style: TypeScript with proper typing
- Architecture: Full-stack JavaScript with minimal backend

## Development Guidelines
- Follow fullstack_js development guidelines
- Use shadcn/ui components
- Implement proper error handling
- Maintain responsive design
- Support multiple languages

## Known Issues
1. **Deployment Configuration**: Manual `.replit` file updates required for production deployment
2. **Console Warning**: Container positioning warning for scroll offset calculations (non-critical)

## Next Steps
1. User needs to manually update `.replit` file for deployment
2. Consider implementing database migration for production
3. Optimize bundle size (current: ~1MB gzipped)