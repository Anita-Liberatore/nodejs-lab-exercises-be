var express = require('express'),
    router = express.Router();
const model = require('../model/model');
const { randomBytes } = require('crypto')

router.post('/boat', (req, res, next) => {
    var id = model.boat.uid();

    model.boat.create(id, req.body.data, (err) => {
        if (err) {
            if(err.code == 'unknown error') {
                res.status(500).send('unknown error');
                return;
            }
        }
        res.status(201).send({ id });
    });
});

router.get('/boat/:id', (req, res, next) => {
    model.boat.read(req.params.id, (err, data) => {

        if (err) {
            if(err.code == 'E_NOT_FOUND') {
                res.status(404).send('Not found');
                return;
            }
        }
        res.status(200).send(data);
        

    })
});

module.exports = router;