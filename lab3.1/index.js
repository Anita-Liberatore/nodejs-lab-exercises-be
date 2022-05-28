const express = require('express');
const createError = require('http-errors')

const app = express();
const data = require('./routes/data')

app.use('/', data)

app.use((req, res, next) => {
    if (req.method !== 'GET') {
        console.log("Method 404")
        next(createError(404))
        return
    }
    console.log("Not Found")
    next(createError(404))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app