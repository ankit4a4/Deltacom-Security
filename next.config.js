/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Ensure all service pages are pre-rendered
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

module.exports = nextConfig
