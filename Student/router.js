const express = require('express')
const {addStudentController, deleteStudentController} = require("./controller");
const router = express.Router()

router.put('/', addStudentController)
router.delete('/', deleteStudentController)

module.exports = router
