const express = require('express')
const router = express.Router()
const {addStudentController, deleteStudentController, updateStudentController, getAllStudentsController} = require("./controller");

router.get('/', getAllStudentsController)
router.put('/', addStudentController)
router.delete('/', deleteStudentController)
router.post('/', updateStudentController)


module.exports = router
