var express = require('express'),
  router = express.Router();

router.post('/', (req, res) => {
  res.send(({ message: "Error 405" }))
})

router.post('/', (req, res) => {
  res.send(({ message: "Error 405" }))
})

router.get('/:param', (req, res) => {
    res.send(({ message: "Error Not Found" }))
  })
  

module.exports = router;