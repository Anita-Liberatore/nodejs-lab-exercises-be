const { Router } = require('express')
const router = Router()
const createError = require('http-errors')
var people = require('./people.json')

router.get('/', function (req, res) {
  res.send(people);
})

router.get('/:id', function (req, res, next) {
  var id = req.params.id
  var person = people.find(u => u.id == id);
  if (person != null) {
    res.send(person);
  } else {
    console.log("id not found")
    next(createError(404))
  }
})

module.exports = router