const express = require("express")
const cors = require('cors')
const notificationHandlerRouter = require("./routes/notificationHandlerRouter")


const app = express()
app.use(cors())
app.use(express.json())
app.use(notificationHandlerRouter)

module.exports = app