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
  // Ensure proper MIME types
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|mjs|jsx)$/,
      type: 'javascript/auto',
    });
    return config;
  },
}

module.exports = nextConfig 