const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({message: "Hello World!"})
})

app.use((req, res) => {
    if(req.method != 'GET') {
      return res.status(405).json({ message: "method not allowed" });
    }
    res.status(404).json({ message: "not found" });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
