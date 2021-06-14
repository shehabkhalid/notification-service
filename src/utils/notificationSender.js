const Queue = require('../database/models/queueSchema')
const pushNotificationApi = require('../Api/pushNotificationApi')
const smsApi = require('../Api/smsApi')
const { SMS, PUSH } = require('./types')
module.exports = async () =>
{


    setInterval(async () =>
    {

        
        const front = await Queue.getFront();

        if(front)
        {
            for (let user of front.users)
            {
                if (front.type === SMS)
                    await smsApi(user, front.content)
                else
                    await pushNotificationApi(user, front.content)
    
               
            }
            await front.popFront()
           
        }
      
    }, 100)

}