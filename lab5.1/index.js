const express = require('express');
const app = express();
const model = require('./model');
const ApiError = require('./ApiError');
const apiErrorHandler = require('./api-handler');


app.use(function (req, res, next) {
    console.log('Time:', new Date());
    console.log('Request URL:', req.originalUrl);
    next();
  });

app.get('/boat/:id', (req, res, next) => {

    model.boat.read(req.params.id, (err, data) => {

        if (err) {

            if (err.code == 'E_NOT_FOUND') {
                next(ApiError.notFound('not found'));
                return;
            }  else {
                next(ApiError.internal('internal error'));
            }

        } else {
            res.send(data);
        }

    })
});

app.use(apiErrorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 5.1 - Implement a RESTful JSON GET`));

module.exports = app