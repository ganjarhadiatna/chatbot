require('dotenv').config()

const line = require('@line/bot-sdk')

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
}

const client = new line.Client(config)

module.exports = (event, pID, sID) => {
    const echo = {
        type: 'sticker',
        packageId: pID,
        stickerId: sID
    }
    
    console.log('-------------------------------')
    
    console.log("message: " + event.message.text)
    console.log("reply: " + pID + " " + sID)

    console.log('-------------------------------')

    return client.replyMessage(event.replyToken, echo)
}