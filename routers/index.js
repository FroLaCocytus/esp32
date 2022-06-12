const Router = require('express')
const router = new Router()

const deviceRouter = require('./deviceRouter')
const temperatureRouter = require('./temperatureRouter')



router.use('/device', deviceRouter)
router.use('/device/temperature', temperatureRouter)



module.exports = router