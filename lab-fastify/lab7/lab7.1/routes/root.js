'use strict'
const got = require('got')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })


  fastify.get('/dummy/:id', async function (request, reply) {
    const { id } = request.params
    const product = await got(`https://dummyjson.com/products/${id}`).json()
    return product;

  })

  fastify.get('/bicycle/:id', async function (request, reply) {
    const { id } = request.params
    const bicycle = await got(`http://localhost:8080/${id}`).json()
    return bicycle;
  })

  fastify.get('/brand/:id', async function (request, reply) {
    const { id } = request.params
    const brand = await got(`http://localhost:8090/brand/${id}`).json()
    return brand;
  })

  fastify.get('/:id', async function (request, reply) {
    const { id } = request.params

    try {
      const [bicycle, brand] = await Promise.all([
        got(`http://localhost:8080/${id}`).json(),
        got(`http://localhost:8090/brand/${id}`).json()
      ])

      return {
        id: bicycle.id,
        color: bicycle.color,
        brand: brand.name
      };
    } catch(err) {

      if(!err.response) throw err
      if(err.response.statusCode === 404) {
        throw fastify.httpErrors.notFound();
      }
      
      throw err
    }
  })
}
