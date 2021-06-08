const {Router} = require('express')
const config = require('config')
const Sensor = require('../models/Sensor')
const router = Router()

router.post('/add', async (req, res) => {
    try {
        console.log('Body', req.body)

        const baseUrl = config.get('baseUrl')
        const {manufacturer, model, pixelSize, heightPixels, widthPixels} = req.body

        const sensor = new Sensor({
            manufacturer, model, pixelSize, heightPixels, widthPixels
        })
        await sensor.save()
        res.status(201).json({ sensor })

    }catch (e){
        res.status(500).json({message: 'Опаньки в sensor/add'})
    }
})

router.post('/', async (req, res) => {
    try {
        const sensors = await Sensor.find()//Скорее всего будет логика поиска по вводу.
        //Если пустой ввод то показать все,
            //...Если начать вбивать название сенсора то фильтровать из всех только те где есть совпадения
        res.json(sensors)
    }catch (e){
        res.status(500).json({message: 'Опаньки в sensor/'})
    }
})

router.post('/id', async (req, res) => {
    try {
        const sensor = await Sensor.findById(req.params.id)
        res.json(sensor)
    }catch (e){
        res.status(500).json({message: 'Опаньки в sensor/id'})
    }
})

module.exports = router