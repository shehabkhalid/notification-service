const { expect } = require('chai')
const request = require('supertest')
const { connect } = require('../src/database/connection')
const app = require('../src/app')

describe('POST /notificationHandler', async () =>
{

    before(async () => await connect())


    it('Right Input  ', async () =>
    {
        const res = await request(app).post('/notificationHandler').send({
            "users": ["7ghudas8", "hjkdhas78"],
            "type": "SMS",
            "content": "hello"
        })
        expect(res.statusCode).to.equal(200)
        expect(res.text).to.equal('added to Queue and will be sent shortly')

    })

    it('Wrong Input  ', async () =>
    {
        const res = await request(app).post('/notificationHandler').send({
            "users": ["7ghudas8", "hjkdhas78"],
            "typessad": "SMS",
            "content": "hello"
        })
        expect(res.statusCode).to.equal(400)

    })

    it('Limit Reached', async () =>
    {

        const allRequest = [{
            "user": "7ghudas8",
            "type": "SMS",
            "content": "hello"
        },
        {
            "user": "7ghudas8",
            "type": "SMS",
            "content": "hello"
        },
        {
            "user": "7ghudas8",
            "type": "PUSH",
            "content": "hello"
        },
        {
            "user": "7ghudas8",
            "type": "SMS",
            "content": "hello"
        },
        {
            "user": "7ghudasw8",
            "type": "PUSH",
            "content": "hello"
        },





        ]


        for (let req of allRequest)
        {

             await request(app).post('/notificationHandler').send(req)
        }

        const res = await request(app).post('/notificationHandler').send({
            "user": "7ghudas8",
            "type": "SMS",
            "content": "hello"
        })

        expect(res.statusCode).to.equal(429)

    })


})
