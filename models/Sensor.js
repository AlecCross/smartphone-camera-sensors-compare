const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    manufacturer: {type: String, required: true},
    model: {type: String, required: true, unique: true},
    pixelSize: {type: Number, required: true},
    heightPixels: {type: Number, required: true},
    widthPixels: {type: Number, required: true},
    //diagonal: {type: Number, required: true}
})

// module.exports = model('Sensor', schema)
module.exports = model('Sensor', schema)