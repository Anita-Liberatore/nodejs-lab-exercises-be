var express = require('express'),
    router = express.Router();
const model = require('../model/model');

router.delete('/boat/:id', (req, res, next) => {
    var id = req.params.id;

    model.boat.del(id, (err) => {
        if (err) {
            if(err.code == 'E_NOT_FOUND') {
                next()
                return
            } 

            next(err)
            return
        }
        res.status(204).send();
    });
});

router.get('/boat/:id', (req, res, next) => {
    model.boat.read(req.params.id, (err, data) => {

        if (err) {
            if(err.code == 'E_NOT_FOUND') {
                next()
                return
            }

            next(err)
            return
        }
        res.status(200).send(data);
        

    })
});

module.exports = router;