require('dotenv').config()

const line = require('@line/bot-sdk')

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
}

const client = new line.Client(config)

module.exports = (event, val) => {
    const echo = {
        type: "template",
        altText: val,
        template: {
            type: "carousel",
            columns: [
                {
                    thumbnailImageUrl: "https://dvinugspt.files.wordpress.com/2014/01/kimbab.jpg",
                    imageBackgroundColor: "#FFFFFF",
                    title: "this is menu",
                    text: "description",
                    defaultAction: {
                        type: "uri",
                        label: "View detail",
                        uri: "http://example.com/page/123"
                    },
                    actions: [
                        {
                            type: "postback",
                            label: "Lihat Detail",
                            data: "action=add&itemid=111",
                            text: "Lihat detail"
                        },
                        {
                            type: "postback",
                            label: "Pesan Sekarang",
                            data: "action=add&itemid=111",
                            text: "Pesan sekarang"
                        }
                    ]
                },
                {
                    thumbnailImageUrl: "https://dvinugspt.files.wordpress.com/2014/01/kimbab.jpg",
                    imageBackgroundColor: "#FFFFFF",
                    title: "this is menu",
                    text: "description",
                    defaultAction: {
                        type: "uri",
                        label: "View detail",
                        uri: "http://example.com/page/123"
                    },
                    actions: [
                        {
                            type: "postback",
                            label: "Lihat Detail",
                            data: "action=add&itemid=111",
                            text: "Lihat detail"
                        },
                        {
                            type: "postback",
                            label: "Pesan Sekarang",
                            data: "action=add&itemid=111",
                            text: "Pesan sekarang"
                        }
                    ]
                },
                {
                    thumbnailImageUrl: "https://dvinugspt.files.wordpress.com/2014/01/kimbab.jpg",
                    imageBackgroundColor: "#FFFFFF",
                    title: "this is menu",
                    text: "description",
                    defaultAction: {
                        type: "uri",
                        label: "View detail",
                        uri: "http://example.com/page/123"
                    },
                    actions: [
                        {
                            type: "postback",
                            label: "Lihat Detail",
                            data: "action=add&itemid=111",
                            text: "Lihat detail"
                        },
                        {
                            type: "postback",
                            label: "Pesan Sekarang",
                            data: "action=add&itemid=111",
                            text: "Pesan sekarang"
                        }
                    ]
                }
            ],
            imageAspectRatio: "rectangle",
            imageSize: "cover"
        }
    }

    console.log('-------------------------------')
    
    console.log("message: " + event.message.text)
    console.log("reply: " + val)
    console.log("carousel: " + echo)

    console.log('-------------------------------')

    return client.replyMessage(event.replyToken, echo)
}
