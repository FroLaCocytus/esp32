const {Temperature} = require('../models/models')

class TemperatureController {
    async create(req, res){
        const {time, temperature} = req.body
        const device = await Temperature.create({time, temperature})
        return res.json(device)
    }

    async getAll(req, res){
        const device = await Temperature.findAll() 
        return res.json(device)
    }
}

module.exports = new TemperatureController()