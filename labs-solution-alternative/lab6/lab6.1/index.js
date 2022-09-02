var express = require('express');
var app = express();
var model = require('./model')

app.get('/boat/:id', function (req, res, next) {

    const id = req.params.id
    model.boat.read(id, (err, data) => {
        
        if(err) {
            if(err.code === 'E_NOT_FOUND') {
                next()
                return
            }

            next()
            return
        }

        res.send(data);
    })
  });
  

app.use((req, res) => {
    if (req.method != 'GET') {
        return res.status(405).json({ message: "method not allowed" });
    }
    res.status(404).json({ message: "not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 6.1 - Implement a RESTful JSON POST`));

module.exports = app