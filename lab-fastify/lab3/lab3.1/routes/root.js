'use strict'
const data = require("../model/data")

module.exports = async function (fastify, opts) {
  fastify.get('/ping', async function (request, reply) {
    return { root: true }
  })
}

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    try {
      return await data()
    } catch(err) {
      reply.send(err)
    }
  })
}

