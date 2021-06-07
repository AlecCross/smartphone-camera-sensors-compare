const express = require('express')
const config = require("config")
//Подключение пакета для работы с Монго БД
const mongoose = require('mongoose')

const app = express()

//Регистрация роута: Префикс пути '/api/sensor'; И сам роут
    //require динамический

app.use('/api/sensor', require('./routes/sensor.routes'))

//app.use(express.json({extended: true}))

//Получаем порт из файла конфига default.json
const PORT = config.get('port') || 5000

//Обернутый connect в функцию с async await
async function start(){
    try {
        //Подключение к Mongo
        await mongoose.connect(config.get('mongoUri'), {
            //эти параметры нужны чтобы mongoose.connect успешно работал
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        //Чтобы не hardкодить можно воспользоваться npm i config https://www.npmjs.com/package/config
        app.listen(PORT, ()=> console.log(`App has been started on port ${PORT}...`))
    }catch (e){
        console.log('Server error', e.message )
        //выход из процесса nodeJS и его завершение в случае если что-то пошло не так
        process.exit(1)
    }
}

start()