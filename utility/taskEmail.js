require('dotenv').config();

const nodeMailer = require("nodemailer");


const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD;


if (!GMAIL_USER || !GMAIL_PASS) {
    console.error('Missing env vars: GMAIL_USER or GMAIL_APP_PASSWORD');
    console.error('Tjek .env eller dine eksport-variabler');
    process.exit(1);
}

//Linket -> hvor den skal hen (til owner fra task gasstation)



async function sendTaskEmail(imageUuid, toEmail) {
    const html = `<h3>En ny rengøring er udført</h3>
        <p>Hej ejer af tankstation</p>
        <p>Der er netop blevet uploadet en ny rengøringsopgave for din tankstation.</p>
        <p>Du kan se billederne og oplysningerne ved at klikke på linket nedenfor:</p>
        <br>
        <a href="http://localhost:3000/showTaskImages/${imageUuid}">Se billeder for opgaven her</a>
        <p>Dette link er gyldigt i 48 timer og kan kun bruges en gang.</p>
        <p>Dette er en automatisk genereret email, svar venligst ikke på denne.</p>
        `;

    // Brug eksplicit SMTP med secure port
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD
        }
    });

    const mailOptions = {
        from: `"Automatisk email" <${GMAIL_USER}>`,
        to: toEmail, //Put din egen email her for at teste
        subject: 'Ny rengøringsopgave uploadet',
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