const express = require('express');
const app = express();
const model = require('./model');
const createError = require('http-errors')


app.get('/boat/:id', (req, res) => {

    model.boat.read(req.params.id, (err, data) => {

        if (err) {

            if (err.code == 'E_NOT_FOUND') {
                res.sendStatus(404);
            } else {
                res.sendStatus(500);
            }

        } else {
            res.send(data);
        }

    })
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 5.1 - Implement a RESTful JSON GET`));

module.exports = app