const express = require('express')
const app = express()
const port = 3000



app.use((req, _, next) => {
    if (req.socket.remoteAddress === "127.0.0.1") {
      const err = new Error("Forbidden");
      err.status = 403;
  
      next(err);
  
      return;
    }
  
    next();
  });
  
  app.get("/", (req, res) => {
    res.send("The remote IP address is: " + req.socket.remoteAddress);
  });

function makeUpperCase(input = '') {

    if(Array.isArray(input)) {
        return input.map((c) => String(c).toUpperCase())
    }

    return input.toUpperCase();
}
app.get("/name", (req, res, next, err) => {

    if(!req.query.name) {
       next(err)
       return
    }
    setInterval(() => {
        const id = req.query.name;
        res.json(makeUpperCase(id))
    }, 300)
   

})


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })
  