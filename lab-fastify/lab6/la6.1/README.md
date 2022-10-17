Use either Fastify or Express to implement a RESTful HTTP server so that when the command
npm start is executed it starts a server that listens on process.env.PORT.

The server should support a POST request to /boat that uses the model.js file to create a
new entry. The route should only accept application/json mime-type requests and should
respond with application/json content-type responses.

The POST request should expect JSON data to be sent in the following format:
{ data: { brand, color } }

A successful request should respond with a 201 Created status code. Unexpected errors should
result in a 500 Server Error response.

The service must also support the same GET /boat/{id} route as implemented in the
previous chapter.