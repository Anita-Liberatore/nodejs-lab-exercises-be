'use strict'

const got = require('got')

const {
  BOAT_SRV_PORT = 5000,
  BRAND_SRV_PORT = 4000
} = process.env

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.get('/:id', async function (request, reply) {
    const { id } = request.params

    try {

      const boat = await got(`http://localhost:${BOAT_SRV_PORT}/${id}`, { timeout: 1250, retry: 0 }).json()
      const brand = await got(`http://localhost:${BRAND_SRV_PORT}/${boat?.brand}`, { timeout: 1250, retry: 0}).json()

      return {
         id: boat?.id,
         color: boat?.color,
         brand: brand?.name
      }

    } catch(err) {

      if (err?.response?.statusCode === 404) {
        throw fastify.httpErrors.notFound()
      }

      if (err?.response?.statusCode === 400) {
        throw fastify.httpErrors.badRequest()
      }

      if (err?.response?.statusCode === 500) {
        throw fastify.httpErrors.internalServerError()
      }

      throw err
    }
  })


}
