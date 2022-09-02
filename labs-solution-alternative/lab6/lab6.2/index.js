var express = require('express');
var app = express();
var model = require('./model')

app.use(express.json())

app.get("/boat/:id", function(req,res, next) {

    model.boat.read(req.params.id, (err,data) => {

        if(err) {
            if(err.code === 'E_NOT_FOUND') {
                next()
                return
            }

            next() 
            return
        }
        res.json(data)
    })
})

app.delete("/boat/:id", function(req, res, next) {

    model.boat.del(req.params.id, (err, id) => {
        if(err) {
            if(err.code === 'E_NOT_FOUND') {
                next()
                return
            }

            next(err) 
            return
        }

        res.status(204).json({id})
    })
})

app.use((req, res) => {
    res.status(404).send("not found")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 6.2 - Implement a RESTful JSON DELETE`));

module.exports = app