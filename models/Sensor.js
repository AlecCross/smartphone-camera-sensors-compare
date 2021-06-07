const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    manufacturer: {type: String, required: true, unique: true},
    model: {type: String, required: true, unique: true},
    // pexelSize: {type: Number, required: true},
    // heightPixels: {type: Number, required: true},
    // widthPixels: {type: Number, required: true},
    // diagonal: {type: Number, required: true}
})

module.exports = model('Sensor', schema)