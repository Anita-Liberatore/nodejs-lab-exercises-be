const express = require('express')
const app = express();
const request = require('request');


app.get('/todos/:id', function(req,res) {
  const id = req.params.id
  var newurl =  `http://jsonplaceholder.typicode.com/todos/${id}`;
  request(newurl).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 8.2 - Implement a RESTful JSON POST`));
