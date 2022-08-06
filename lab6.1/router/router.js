var express = require('express'),
    router = express.Router();
const model = require('../model/model');
const { randomBytes } = require('crypto')
const DATA_500 = '4d2d'


router.post('/boat', (req, res, next) => {
    var id = model.boat.uid();

    model.boat.create(id, req.body.data, (err) => {
        if (err) {

            if(err.code == 'unknown') {
                next(err);
                return;
            }
        }
        else res.status(201).send({ id });
    });
});

router.get('/boat/:id', (req, res, next) => {
    model.boat.read(req.params.id, (err, data) => {

        if (err) {

            if (err.code == 'E_NOT_FOUND') {
                next(err);
                return;
            }

        } else {
            res.send(data);
        }

    })
});

module.exports = router;