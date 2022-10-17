'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/ok', async function (request, reply) {
    return { root: true }
  })

  fastify.get('/proxy', async function (request, reply) {
    const { url } = request.query
    try { new URL(url) }
    catch (err) {
      throw fastify.httpErrors.badRequest()
    }
    return reply.from(url)
  })
}
