const Router = require('express')
const router = new Router()
const temperatureController = require('../controllers/temperatureController')

router.post('/', temperatureController.create)
router.get('/', temperatureController.getAll)

module.exports = router