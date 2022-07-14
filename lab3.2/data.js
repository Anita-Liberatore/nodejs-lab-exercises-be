const { Router } = require('express') 
const router = Router() 

var people = require('./people.json')

router.get('/', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(people);
})

router.get('/:id', function (req, res) {
   var id = req.params.id
   var person = people.find(u => u.id == id); 
   res.send(person);
})

module.exports = router