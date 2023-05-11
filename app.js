const express = require('express')
require('dotenv').config()
const app = express()
const db = require('./db')
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3005
const router = require('./router')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.use('/', router)



const start = async () => {
    try {
        console.log(db, '!')
        await db.authenticate()
        await db.sync()
        app.listen(PORT, () => {
            console.log('server started on the port ' + PORT )
        })
    }
    catch (e){
        console.log(e)
    }
}

start()

