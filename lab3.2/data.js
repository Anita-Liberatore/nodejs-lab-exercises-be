const { Router } = require('express') 
const router = Router() 

const people = require('./people.json')

router.get('/', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(people));
})

module.exports = router