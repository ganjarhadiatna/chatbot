require('dotenv').config()

const line = require('@line/bot-sdk')

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
}

const client = new line.Client(config)

module.exports = (event, val) => {
    const echo = {
        type: 'text',
        text: val
    }
    
    console.log('-------------------------------')
    
    console.log("message: " + event.message.text)
    console.log("reply: " + val)

    console.log('-------------------------------')

    return client.replyMessage(event.replyToken, echo)
}