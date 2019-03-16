'use strict'

require('dotenv').config()

const line = require('@line/bot-sdk')
const restify = require('restify')
const handle = require('./handles/index')

// create line SDK config variables
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
}

// create express app
const app = restify.createServer()

// register a webhook handler with middleware
app.post(
    '/webhook', 
    line.middleware(config), 
    (req, res) => {
        Promise
            .all(req.body.events.map((event) => {
                handle(event, req)
            }))
            .then((result) => res.json(result))
            .catch((err) => {
                console.log(err)
            })
    }
)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Listening on "+app.url+"/webhook on "+port)
})