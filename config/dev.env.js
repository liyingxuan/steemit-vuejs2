'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"http://steem.lyx/"',
  API_URL: '"http://steem.lyx/api/v1/"',
  OAUTH_URL: '"http://localhost/oauth/"'
})
