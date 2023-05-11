const express = require('express')
const {getAllApplicationsController, updateApplicationController, deleteApplicationController, addApplicationController} = require("./controller");
const router = express.Router()

router.get('/', getAllApplicationsController)
router.post('/', updateApplicationController)
router.put('/', addApplicationController)
router.delete('/', deleteApplicationController)

module.exports = router
