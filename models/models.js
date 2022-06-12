const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Temperature = sequelize.define('temperature',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    time: {type: DataTypes.STRING},
    temperature: {type: DataTypes.FLOAT},
})

const Truck = sequelize.define('truck',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
})

const Device = sequelize.define('device',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    device_number: {type: DataTypes.STRING},
})

Truck.hasOne(Device)
Device.belongsTo(Truck)

Device.hasMany(Temperature)
Temperature.belongsTo(Device)

module.exports = {
    Temperature,
    Truck,
    Device
}