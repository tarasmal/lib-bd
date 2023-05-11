const express = require('express')
require('dotenv').config()
const app = express()
const db = require('./db')
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors())
app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.send('Hello World')
})

const start = () => {
    try {
        db.authenticate()
        db.sync()
        app.listen(3000, () => {
            console.log('server started on the port ' + 3000 )
        })
    }
    catch (e){
        console.log(e)
    }
}

start()

