

const rateLimit = require("express-rate-limit");
const requestRateLimit = rateLimit({
    windowMs: 60000, // 1 hour window
    max: 5, // start blocking after 5 requests,
    handler: (req, res) =>
    {

        console.log('Limit Request reached waiting for 1 minute to listen for requests again ')
        res.status(429).send("max reached try agin later")
    },


})

module.exports = requestRateLimit