module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/categories',
        destination: '/categories/all',
        permanent: true,
      },
      {
        source : '/categories/alphabets',
        destination : '/categories/all',
        permanent : true,
      }
    ]
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
  },
}
