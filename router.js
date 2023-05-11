const express = require('express')
const router = express.Router()
const studentRouter = require('./Student/router')

router.use('/student', studentRouter)

module.exports = router
