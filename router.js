const express = require('express')
const router = express.Router()
const studentRouter = require('./Student/router')
const applicationRouter = require('./Application/router')
const bookRouter = require('./Book/router')

router.use('/student', studentRouter)
router.use('/application', applicationRouter)
router.use('/book', bookRouter)

module.exports = router
