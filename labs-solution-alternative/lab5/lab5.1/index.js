var express = require('express');
var app = express();
var model = require('./model')

// respond with data from model.js using read function to get all data
// Responds to HTTP GET requests to / with data
app.get('/boat/:id', function (req, res, next) {
    
    model.boat.read(req.params.id, (err, data) => {

        if (err) {
            if (err.code === 'E_NOT_FOUND') {
                next()
                return
            }

            next(res.status(500).json({ message: "error" }))
            return
        }

        res.send(data)
    })


});


app.use((req, res) => {
    if (req.method != 'GET') {
        return res.status(405).json({ message: "method not allowed" });
    }
    res.status(404).json({ message: "not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 5.1 - Implement a RESTful JSON GET`));

module.exports = app