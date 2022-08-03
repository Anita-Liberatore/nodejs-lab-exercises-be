var express = require('express'),
    router = express.Router();

router.get('/', (req, res, next) => {
  res.send(({ message: "Ping message"}))
})
 
module.exports = router;