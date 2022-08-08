const express = require('express');
const createError = require('http-errors')

const app = express();
const data = require('./routes/router')

app.use('/', data)

app.use((req, res, next) => {
    if (req.path !== '/') {
        res.status(404).send('Not found');
    }
    next();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 3.1`));

module.exports = app