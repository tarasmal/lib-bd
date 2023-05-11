const express = require('express')
require('dotenv').config()
const app = express()
const db = require('./db')
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3005

app.use(cors())
app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.send('Hello World')
})


const start = () => {
    try {
        db.authenticate()
        db.sync()
        app.listen(PORT, () => {
            console.log('server started on the port ' + PORT )
        })
    }
    catch (e){
        console.log(e)
    }
}

start()

