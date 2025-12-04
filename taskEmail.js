require('dotenv').config();

const nodeMailer = require("nodemailer");
const { v4: uuidv4 } = require('uuid');


const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD;

//const controller = require('/controller/createTaskDataController');

if (!GMAIL_USER || !GMAIL_PASS) {
    console.error('Missing env vars: GMAIL_USER or GMAIL_APP_PASSWORD');
    console.error('Tjek .env eller dine eksport-variabler');
    process.exit(1);
}

//const whatever = controller.imageUpload.uniqueId; // Bare for at bruge controlleren uden fejl
//console.log(whatever, 'hahahahahahahha');
//Linket -> hvor den skal hen (til owner fra task gasstation)



async function sendTaskEmail(imageUuid, toEmail) {
    const html = `
        <h1>Test Email</h1>
    <p>This is a test email sent from the taskEmail.js module.</p>
    <a href="http://localhost:3000/images/task/${imageUuid}">Se billeder for opgaven her</a>`;

    // Brug eksplicit SMTP med secure port
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD
        }
    });

    const mailOptions = {
        from: GMAIL_USER,
        to: toEmail, //Put din egen email her for at teste
        subject: 'Test Email from taskEmail.js',
        html: html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sendt:', info.messageId);
    } catch (error) {
        console.error('Fejl ved afsendelse:', error);
        // Hvis 535-5.7.8: username/password not accepted -> tjek app-password eller OAuth2
    }
}

module.exports = { sendTaskEmail };

//sendTaskEmail();