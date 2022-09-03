const express = require('express')
const app = express()
const port = 3000

function makeUpperCase(input = '') {

    if (Array.isArray(input)) {
        return input.map((c) => String(c).toUpperCase())
    }

    return input.toUpperCase();
}
app.get('/', (req, res) => {
    const un = req.query.un;
    setTimeout(() => {
        res.send(makeUpperCase(un))
    }, 1000);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
