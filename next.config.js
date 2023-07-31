/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
        domains: ['www.instagram.com'],
    },
    env: {
        CLIENT_ID: process.env.CLIENT_ID,
        API_LINK: process.env.API_LINK,
      },
}


