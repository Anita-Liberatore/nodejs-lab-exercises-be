'use strict'
const got = require('got')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })


  fastify.get('/dummy/:id', async function (request, reply) {
    const { id } = request.params

    const result = await got(`https://dummyjson.com/products/${id}`).json()

    return result;

  })

  fastify.get('/bicycle/:id', async function (request, reply) {
    const { id } = request.params

    const result = await got(`http://localhost:8080/ok/${id}`).json()
    return result;


  })
}
