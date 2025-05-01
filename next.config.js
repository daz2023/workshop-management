/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable the static optimization for auth pages
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Add trailing slash for better static file serving
  trailingSlash: true,
  // Ensure proper MIME types for static files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|mjs|jsx)$/,
      type: 'javascript/auto',
    });
    return config;
  },
}

module.exports = nextConfig 