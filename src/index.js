

const app = require('./app')
const { connect } = require('../src/database/connection')
const notificationSender = require('./utils/notificationSender')

const port = 3000


app.listen(port, async () =>
{

    await connect()
    console.log(`listening on port ${port} `)

    notificationSender()


})