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
  // Add base path if needed
  basePath: '',
  // Add asset prefix if needed
  assetPrefix: '',
  // Add custom headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig 