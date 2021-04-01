const withPlugins = require('next-compose-plugins')

const dotenv = require('dotenv')

dotenv.config()

const plugins = []

const nextConfig = {
  env: {},
  images: {
    domains: ['localhost'],
  },
}

module.exports = withPlugins(plugins, nextConfig)
