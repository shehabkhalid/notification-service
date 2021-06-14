const { expect } = require('chai')
const request = require('supertest')
const { connect } = require('../src/database/connection')
const Queue = require('../src/database/models/queueSchema')

describe('Queue', () =>
{


    before(async () => await connect())

    it('Queue insert', async () =>
    {


        const item = {
            users: ["dhaus7a"],
            type: "PUSH",
            content: "hello world"
        }
        const test = await Queue.addToQueue(item)


        expect(test).to.not.be.null;

    })


    it('Queue Get Front', async () =>
    {


        const item = {
            users: ["dhaus7a"],
            type: "PUSH",
            content: "hello world"
        }
        await Queue.addToQueue(item)
        const test = await Queue.getFront()


        expect(test).to.not.be.null;

    })

    
})