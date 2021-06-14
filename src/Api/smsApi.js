module.exports = (user, content) =>
{

    setTimeout(() => {

        console.log(`Sms sent to user with id ${user} with content ${content}` )
    }, 500)

}