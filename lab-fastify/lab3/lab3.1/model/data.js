'use strict'
const { promisify } = require('util')
const { randomBytes } = require('crypto')

async function data () {
  console.log(randomBytes(10).toString('base64'))
  return randomBytes(10).toString('base64')
}

module.exports = data
