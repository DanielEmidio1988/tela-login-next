const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withCSS(withImages({
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./src/server/database')
    }
    return config
  },
  env: {
    API_URL: 'http://localhost:3000/api'
  }
}))

