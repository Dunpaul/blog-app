/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  webpack:(config, {isServer}) => {
    if(!isServer) {
    //  don't resolve 'fs' moule on the client to prevent this erroe on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false
      }
    }

    return config;
  }
}

module.exports = nextConfig
