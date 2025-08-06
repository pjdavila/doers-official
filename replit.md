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

## Recent Changes (January 2025)

### Deployment Configuration Issue - NEEDS MANUAL FIX
**Issue**: Deployment fails because `.replit` file uses development commands instead of production commands.

**Current Configuration in `.replit`**:
```
[deployment]
deploymentTarget = "cloudrun"
build = ["npm", "run", "build"]
run = ["sh", "-c", "npm run dev"]  # ❌ This is the problem
```

**Required Manual Fixes**:
1. **Update `.replit` file** (line 11):
   - Change: `run = ["sh", "-c", "npm run dev"]`
   - To: `run = ["sh", "-c", "npm run start"]`

2. **Update top-level run command** (line 2):
   - Change: `run = "npm run dev"`
   - To: `run = "npm run start"`

**Status**: ✅ Build scripts verified working, ❌ Manual `.replit` fixes required

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