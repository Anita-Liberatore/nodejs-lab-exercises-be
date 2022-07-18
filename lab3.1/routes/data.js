const { Router } = require('express') 
const router = Router() 
const { randomBytes } = require('crypto')
const data = randomBytes(10).toString('base64')


router.get('/', (req, res) => { 
    const result = {
        "data": data
    }
    res.send(result) 
}) 

module.exports = router