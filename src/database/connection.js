const mongoose = require('mongoose')


const connect = () => mongoose.connect(`mongodb://mongo:27017}/backend-task`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=> console.log('Db Connected Successfully')).catch(()=>{console.log('DB Failed to Connect')})

module.exports = {connect}