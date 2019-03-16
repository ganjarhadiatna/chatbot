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
            type: "buttons",
            thumbnailImageUrl: "https://dvinugspt.files.wordpress.com/2014/01/kimbab.jpg",
            imageAspectRatio: "rectangle",
            imageSize: "cover",
            imageBackgroundColor: "#FFFFFF",
            title: "Menu",
            text: "descriptions",
            defaultAction: {
                type: "uri",
                label: "View detail",
                uri: "http://example.com/page/123"
            },
            actions: [
				{
                	type: "postback",
                	label: "Fasilitas",
                	data: "action=add&itemid=111",
                	text: "Fasilitas"
				},
				{
                	type: "postback",
                	label: "Alamat & Kontak",
                	data: "action=add&itemid=111",
                	text: "Alamat & kontak"
              	},
                {
                  	type: "postback",
                  	label: "Pesan Sekarang",
                    data: "action=add&itemid=123",
                    text: "Pesan sekarang"
                }
            ]
        }
      }

    console.log('-------------------------------')
    
    console.log("message: " + event.message.text)
    console.log("reply: " + val)
    console.log("button: " + echo)

    console.log('-------------------------------')

    return client.replyMessage(event.replyToken, echo)
}