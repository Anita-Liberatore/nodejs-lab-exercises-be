const express = require('express');
const app = express();
const createError = require('http-errors')

const userController = require('./routes/user-controller');
const errorController = require('./routes/error-controller');


const myLogger = function (req, res, next) {
    console.log('Time:', new Date());
    console.log('Request URL:', req.originalUrl);
    next();
}

app.use(myLogger)

app.use('/', userController);


app.use((req, res, next) => {
    if (req.method !== 'GET') {
        console.log("Method 405")
        next()
    } else {
        console.log("Method 404")
        next()
    }
}) 

app.use('/', errorController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Project One`));

module.exports = app