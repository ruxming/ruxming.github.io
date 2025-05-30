/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '',
  assetPrefix: '',  // Remove asset prefix for GitHub Pages
  distDir: 'out',  // Output to 'out' directory for static export
}

module.exports = nextConfig
