const express = require('express');
const createError = require('http-errors')

const app = express();
const data = require('./data')

app.use('/', data)
app.use('/:id', data)

app.use((req, res, next) => {
    if (req.method !== 'GET') {
        console.log("Method 405")
        next(createError(405))
    } else {
        console.log("Method 404")
        next(createError(404))
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 3.2 - Implement a Status Code Response`));

module.exports = app