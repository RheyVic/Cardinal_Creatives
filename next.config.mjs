/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ This enables static site export

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
