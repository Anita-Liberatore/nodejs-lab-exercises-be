const express = require('express');
const createError = require('http-errors')

const app = express();
const data = require('./data')

app.use('/', data)
app.use('/:id', data)

app.use((req, res, next) => {
    if (req.method !== 'GET') {
        res.status(405).send('Method not allowed');
    }
    next()
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 3.2 `));

module.exports = app