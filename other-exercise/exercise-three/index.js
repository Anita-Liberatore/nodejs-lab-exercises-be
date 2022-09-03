const express = require('express')
const app = express()
const port = 3000

function makeUpperCase(input = '') {

    if(Array.isArray(input)) {
        return input.map((c) => String(c).toUpperCase())
    }

    return input.toUpperCase();
}
app.get("/", (req, res, next, err) => {

    if(!req.query.name) {
       next(err)
       return
    }
    setInterval(() => {
        const id = req.query.name;
        res.json(makeUpperCase(id))
    }, 300)
   

})

app.use((req, res) => {
    return res.status(400).json({message: "bad request"})
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })
  