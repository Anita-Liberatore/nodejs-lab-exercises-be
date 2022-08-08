const data = require('../model/data')


const getData = async (req, res, next) => {
    try {
        let response = await data();
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
    }
};



module.exports = {
    getData
}