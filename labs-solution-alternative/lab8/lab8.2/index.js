const express = require('express')
const app = express();
const request = require('request');


/*app.get('/todos/:id', function(req,res) {
  const id = req.params.id
  var newurl =  `http://jsonplaceholder.typicode.com/users`;
  request(newurl).pipe(res);
}); */

app.get("/", function(req, res, next) {

  const url = req.query.url

  try {
    request(url).pipe(res);
  } catch(err) {
    const badRequest = new Error('bad request')
    badRequest.status=400
    next(badRequest)
  }
})

app.use((req,res) => {
  res.status(404).send({message: "not found"})
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 8.2 - Implement a RESTful JSON POST`));
