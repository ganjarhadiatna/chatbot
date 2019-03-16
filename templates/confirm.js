require('dotenv').config()

const line = require('@line/bot-sdk')

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
}

const client = new line.Client(config)

module.exports = (event, val) => {
    const echo = {
        "type": "template",
        "altText": "Mohon konfirmasi",
        "template": {
            "type": "confirm",
            "text": val,
            "actions": [
                {
                  "type": "message",
                  "label": "Ya",
                  "text": "Ya pesan"
                },
                {
                  "type": "message",
                  "label": "Tidak",
                  "text": "Tidak pesan"
                }
            ]
        }
    }

    console.log('-------------------------------')
    
    console.log("message: " + event.message.text)
    console.log("reply: " + val)
    console.log("confirm: " + echo)

    console.log('-------------------------------')

    return client.replyMessage(event.replyToken, echo)
}