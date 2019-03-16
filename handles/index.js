const {Wit, log} = require('node-wit')
const replyText = require('../templates/text')
const replySticker = require('../templates/sticker')
const replyConfirm = require('../templates/confirm')
const replyButton = require('../templates/button')
const replyCarousel = require('../templates/carousel')

// wit
const client = new Wit({
    accessToken: process.env.WIT_TOKEN,
    logger: new log.Logger(log.DEBUG)
});

module.exports = async (event, req) => {
    switch (event.type) {
        case "message":

            try {

                var data = await client.message(event.message.text)
                var intent = data.entities.intent[0].value

                if (intent) {

                    console.log('-------------------------------')
                    console.log('Intent: ' + intent);
                    console.log('-------------------------------')

                    switch (intent) {
                        case "greetings":
                            replyText(event, "Hi apa kabar.. Untuk memulai tur ketik 'menu' yah")
                            break
                        case "thanks":
                            // try {
                            //     replySticker(event, "13", "1")
                            // } catch(e) {
                            //     replyText(event, "Sama-sama...")
                            // }
                            replyText(event, "Sama-sama...")
                            break
                        case "detail":
                            replyButton(event, "Kamu memilih")
                            break
                        case "kontak":
                            replyText(event, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
                            break
                        case "fasilitas":
                            replyText(event, "* Lorem ipsum dolor sit amet * Lorem ipsum dolor sit amet * Lorem ipsum dolor sit amet")
                            break
                        case "order":
                            replyConfirm(event, "Apakah kamu yakin akan memesan ini?")
                            break
                        case "order_yes":
                            replyText(event, "Pesanan berhasil dilakukan, untuk pembayaran silahkan lakukan ditempat.")
                            break
                        case "order_no":
                            replyText(event, "Pesanan kamu dibatalkan")
                            break
                        case "menu":
                            replyCarousel(event, 'Pilih menu favorit kamu')
                            break
                        default:
                            replyText(event, "Ketik 'Hello' yah")
                            break
                    }

                } else {
                    replyText(event, "Hmmm, silahkan coba lagi")
                }
                
            } catch(e) {
                console.error(e);
                replyText(event, "Ketik 'Hello' yah.")
            }
            
            break;
    
        default:
            return Promise.resolve(null)
            break;
    }
}
