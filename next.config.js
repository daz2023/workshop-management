/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable static optimization
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Add trailing slash for better static file serving
  trailingSlash: true,
}

module.exports = nextConfig 