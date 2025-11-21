/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Transpile packages that need it
  transpilePackages: ['three', '@splinetool/react-spline', '@splinetool/runtime'],
  
  // External packages for server
  serverExternalPackages: ['sharp'],
  
  // TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
  
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 300,
    },
  },
};

export default nextConfig;
