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

  if (!person) {
    res.status(404).send('Id not found');
    return;
  }

  return res.send(person)

})

module.exports = router