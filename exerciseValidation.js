'use strict'

module.exports = async function (fastify) {

  const makeUpperCase = (input = "") => {
    if (Array.isArray(input)) {
      return input.map((c) => String(c).toUpperCase());
    }
  
    return input.toUpperCase();
  };

  const opts = {
    schema: {
      querystring: {
        type: 'object',
        properties: {
          name: {
            type: 'array'
          },
        },
        required: ['name'],
      }
    }
  }
  
  fastify.get('/', opts, async (request, reply) => {

    await new Promise((resolve) => {
      setTimeout(resolve,2000)
    
    })

    const name = request.query.name
      return {
        name: makeUpperCase(name)
      }
})
}
