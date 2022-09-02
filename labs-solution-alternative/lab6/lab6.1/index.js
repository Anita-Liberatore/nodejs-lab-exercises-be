var express = require('express');
var app = express();
var model = require('./model')
app.use(express.json());

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

        res.json(data);
    })
  });

  app.post('/boat', function (req, res, next) {

    var id = model.boat.uid()
    model.boat.create(id, req.body.data, (err) => {

        if(err) {
            next(err)
            return
        }
        res.status(201).json({ id });
    })
  }); 
  
  
app.use((_, res) => {
    res.status(404).json({ message: "not found" });
  });

app.use((req, res) => {
    res.status(500).json({ message: "internal error server" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 6.1 - Implement a RESTful JSON POST`));

module.exports = app