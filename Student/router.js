const express = require('express')
const {addStudentController} = require("./controller");
const router = express.Router()

router.put('/', addStudentController)

module.exports = router
