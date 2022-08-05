var data = require('../data/mockUser.json')

var express = require('express'),
router = express.Router();

router.get('/', (req, res) => {
  res.send(({ message: "Ping message" }))
})


router.get('/user', async (request, response) => {
  try{
   response.send(data)
  } catch(error) {
    response
        .status(500)
        .json({ message: "Error in invocation of API: /users" })
  }

})

module.exports = router;