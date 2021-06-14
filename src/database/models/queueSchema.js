const mongoose = require('mongoose')
const queueSchema = new mongoose.Schema({

    type: {
        type: String,
        required: true
    },
    content: {

        type: String,
        default: '',
    },
    users: {
        type: [{
            type: String
        }],
        required: true
    }

})

queueSchema.statics.addToQueue = async (element) =>
{



    const top = new Queue(element)
    return await top.save()


}

queueSchema.statics.getFront = async () =>
{

    return await Queue.findOne({})
}

queueSchema.methods.popFront = async function ()
{

    try
    {

        await Queue.findByIdAndDelete({ _id: this._id })
    } catch (error)
    {
        console.log(error)
    }


}



const Queue = mongoose.model('Queue', queueSchema)

module.exports = Queue;