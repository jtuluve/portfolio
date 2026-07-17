/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/devicon@latest/icons/**",
      },
    ],
  },
}

export default nextConfig
