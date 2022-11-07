var express = require('express');
var app = express();

function makeUpperCase(input = '') {
    if (Array.isArray(input)) {
        return input.map((c) => String(c).toUpperCase())
    }

    return input.toUpperCase()
}

app.get("/", (req, res) => {

    try {
        setTimeout(() => {
            const un = req.query.un;
            res.send(makeUpperCase(un))
        }, 1000)

    } catch (err) {
        if (err.message === 'not found') throw notFound()
        throw err
    }
})

app.use((req, res) => {
    res.status(404).send({ message: "not found" })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 9.1 - Implement a Pollution service resolution`));