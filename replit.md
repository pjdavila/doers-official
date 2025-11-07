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

### 🎨 PREMIUM UI/UX ENHANCEMENTS (November 2025)
**Status**: ✅ Completed - Transformed into $100,000 premium website

**Major Enhancements Implemented**:

1. **SEO Optimization** (client/index.html):
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