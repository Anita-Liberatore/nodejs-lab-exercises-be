const express = require('express')
const app = express()
const port = 3000

function toUpperCaseName(name = '') {

    if(Array.isArray(name)) {
        return name.map((c) => String(c).toUpperCase())
    }
    return name.toUpperCase();
}  

app.get("/", (req, res) => {
    setTimeout(() => {
        const name = req.query.name
        res.json(toUpperCaseName(name))
    }, 300)
    
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })
  