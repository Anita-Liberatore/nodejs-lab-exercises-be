const { Router } = require('express') 
const router = Router() 
const service = require('../service/service')



router.get('/', service.getData)


module.exports = router