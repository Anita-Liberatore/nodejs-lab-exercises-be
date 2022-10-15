'use strict'
const { promisify } = require('util')
const { boat } = require('./../model.js')
const read = promisify(boat.read)
const create = promisify(boat.create)



module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.get('/boat/:id', async (request, reply) => {
    const { id } = request.params

    try {
      return await read(id);
    } catch (err) {
      if (err.message === 'not found') {
        reply.notFound();
      } else {
        reply.send(err)
      }
    }
  })

  fastify.post('/boat', async (request, reply) => {
    const { data } = request.body

    const id = boat.uid()
    try {
      await create(id, data);
      reply.status(201)

      reply.send({
        id:id
      })
    } catch (err) {
      reply.send(err)
    }
  })
}
