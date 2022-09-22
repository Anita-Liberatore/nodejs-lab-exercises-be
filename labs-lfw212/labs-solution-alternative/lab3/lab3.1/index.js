var express = require('express');
var app = express();
var data = require('./data')

// respond with data from data.js using data function
// Responds to HTTP GET requests to / with data from the data function as exported from the data.js
app.get('/', async function(req, res) {
  const result = await data()
  res.send(result)
});

//Responds with a 404 to GET requests to any other route
app.use((_, res) => {
  res.status(404).json({ message: "not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 3.1 Deliver Data from a Library API`));

module.exports = app