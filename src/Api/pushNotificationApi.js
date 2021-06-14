module.exports = (user, content) =>
{

    setTimeout(() => {

        console.log(`Notification pushed to user with id ${user} with content ${content}` )
    }, 500)

}