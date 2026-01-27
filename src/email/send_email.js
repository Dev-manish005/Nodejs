const nodemailer = require("nodemailer");
require('dotenv').config();

async function main(req, res) {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: process.env.NM_HOST,
        port: process.env.NM_PORT,
        secure: process.env.NM_SECURE === "true",
        auth: {
            user: process.env.NM_USERNAME,
            pass: process.env.NM_PASSWORD,
        },
    });

    console.log(transporter)

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <pokeworld434@gmail.com>',
        to: "sameet41031@gmail.com,manish.j.p.005@gmail.com",
        subject: "For Testing",
        // text: "Hello Bro",
        html: "<i>Hello world?</i>"
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.send("Hello");
   
}
// main().catch(console.error);


module.exports = {
    main: main
}