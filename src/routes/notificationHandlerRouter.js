const express = require('express')
const requestRateLimit = require('../middleware/rateLimit')
const router = express.Router()
const notificationHandlerController = require('../controllers/notificationHandlerController')

module.exports = router.post('/notificationHandler', requestRateLimit, notificationHandlerController.handleTypes)