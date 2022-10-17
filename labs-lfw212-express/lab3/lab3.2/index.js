var express = require('express');
var app = express();

/*Responds to HTTP GET requests to / with a 200 OK HTTP status, the content is
irrelevant */
/*Responds to HTTP POST requests to / with a 405 Method Not Allowed HTTP status*/
app.get('/', function(req, res) {
  res.send("Hello World")
});

//Responds with a 404 to GET requests to any other route
app.use((req, res) => {
  if(req.method != 'GET') {
    return res.status(405).json({ message: "method not allowed" });
  }

  res.status(404).json({ message: "not found" });
  
});


/*
● Listens on localhost
● Listens on port 3000
*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 3.2 - Implement a Status Code Response`));

module.exports = app