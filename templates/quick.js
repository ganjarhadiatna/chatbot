require('dotenv').config()

const line = require('@line/bot-sdk')

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
}

const client = new line.Client(config)

module.exports = (event, val) => {
    const echo = {
        type: "text",
        text: val,
        quickReply: {
            items: [
                {
                    type: "action",
                    imageUrl: "https://dvinugspt.files.wordpress.com/2014/01/kimbab.jpg",
                    action: {
                        type: "message",
                        label: "Sushi",
                        text: "Sushi"
                    }
                },
                {
                    type: "action",
                    imageUrl: "https://dvinugspt.files.wordpress.com/2014/01/kimbab.jpg",
                    action: {
                        type: "message",
                        label: "Sushi",
                        text: "Sushi"
                    }
                },
                {
                    type: "action",
                    imageUrl: "https://dvinugspt.files.wordpress.com/2014/01/kimbab.jpg",
                    action: {
                        type: "message",
                        label: "Sushi",
                        text: "Sushi"
                    }
                },
                {
                    type: "action",
                    imageUrl: "https://dvinugspt.files.wordpress.com/2014/01/kimbab.jpg",
                    action: {
                        type: "message",
                        label: "Sushi",
                        text: "Sushi"
                    }
                },
                {
                    type: "action",
                    imageUrl: "https://dvinugspt.files.wordpress.com/2014/01/kimbab.jpg",
                    action: {
                        type: "message",
                        label: "Sushi",
                        text: "Sushi"
                    }
                },
                {
                    type: "action",
                    imageUrl: "https://dvinugspt.files.wordpress.com/2014/01/kimbab.jpg",
                    action: {
                        type: "message",
                        label: "Sushi",
                        text: "Sushi"
                    }
                }
            ]
        }
    }
    console.log('-------------------------------')
    
    console.log("message: " + event.message.text)
    console.log("reply: " + val)
    console.log("quick reply: " + echo)

    console.log('-------------------------------')

    return client.replyMessage(event.replyToken, echo)
}