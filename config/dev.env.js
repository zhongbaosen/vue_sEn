'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// 一些process.env中设置的参数
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
