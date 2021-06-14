

const Queue = require('../database/models/queueSchema')

exports.handleTypes = async (req, res) =>
{


    try
    {

       
        const { user, users, type, content } = req.body
        if (user || users && type && content)
        {

            Queue.addToQueue({ type, content, users: users || new Array(user) })
            res.status(200).send('added to Queue and will be sent shortly')
        }
        else 
        {
            res.status(400).send('Bad Request')
        }
    } catch (error)
    {
        res.status(400).send(error)
    }


}