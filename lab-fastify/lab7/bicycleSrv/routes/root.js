'use strict'
const { promisify } = require('util')

const { bicycle } = require('./../model.js')

const read = promisify(bicycle.read)

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.get('/:id', async function (request, reply) {
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
