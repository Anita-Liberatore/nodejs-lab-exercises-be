'use strict'
const { promisify } = require('util')

const { boat } = require('./../model.js')

const read = promisify(boat.read)
const del = promisify(boat.del)

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })


  fastify.get('/boat/:id', async (request, reply) => {
    const { id } = request.params

    try {
      return await read(id);
    } catch(err) {
      if(err.message == 'not found') {
        reply.status(404)
        return 'not found'
      }

      reply.send(err)
    }
  })

  fastify.delete('/boat/:id', async (request, reply) => {
    const { id } = request.params

    try {
      reply.status(204)
      return await del(id);
    } catch(err) {
      if(err.message == 'not found') {
        reply.status(404)
        return 'not found'
      }

      reply.send(err)
    }
  })
}
