var data = require('../data/mockUser.json')

var express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  res.send(({ message: "Ping message" }))
})

router.get('/user/:id', (req, res) => {
  const userId = Number(req.params.id);

  const user = data;

  const result = user.filter(u => u.id === userId)
  res.send(result)
})


router.get('/user', async (request, response) => {
  try {
    response.send(data)
  } catch (error) {
    response
      .status(500)
      .json({ message: "Error in invocation of API: /users" })
  }

})


router.get('/next', (req, res, next) => {
  console.log("The response will be sent by the next function.")
  next();
}, (req, res) => {
  res.send("I just set up a route with a second call back")
}

)


module.exports = router;