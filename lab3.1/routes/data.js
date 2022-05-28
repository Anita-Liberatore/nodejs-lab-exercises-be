const { Router } = require('express') 
const router = Router() 
const { randomBytes } = require('crypto')
const data = randomBytes(10).toString('base64')


router.get('/', (req, res) => { 
    res.send(data) 
}) 
module.exports = router