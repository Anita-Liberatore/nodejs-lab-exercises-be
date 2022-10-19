'use strict'
const { promisify } = require('util')
const { brand } = require('./../model.js')

const read = promisify(brand.read)

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.get('/brand/:id', async function (request, reply) {
    const { id } = request.params

    try {
      return await read(id)
    } catch(err) {
      if(err.code === 'E_NOT_FOUND') {
        reply.status(404)
        reply.send(err)
      }

      reply.send(err)
    }
  })
}
