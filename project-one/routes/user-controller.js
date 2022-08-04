var express = require('express'),
router = express.Router();

router.get('/', (req, res) => {
  res.send(({ message: "Ping message" }))
})


router.get('/prova', (req, res) => {
  res.send(({ message: "Ok" }))
});

module.exports = router;