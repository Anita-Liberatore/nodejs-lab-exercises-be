const express = require('express');
const app = express();
const controller = require('./router/router');
const createError = require('http-errors')


app.use(function (req, res, next) {
    console.log('Time:', new Date());
    console.log('Request URL:', req.originalUrl);
    next();
});

//body parser middleware
app.use(express.json());

app.use('/', controller);

app.use((req, res, next) => {
    if (req.method !== 'GET') {
        res.status(405).send('Method not allowed');
    }
    next()
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 6.1 - Implement a RESTful JSON GET`));

module.exports = app