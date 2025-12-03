require('dotenv').config();

const nodeMailer = require("nodemailer");

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD;

if (!GMAIL_USER || !GMAIL_PASS) {
    console.error('Missing env vars: GMAIL_USER or GMAIL_APP_PASSWORD');
    console.error('Tjek .env eller dine eksport-variabler');
    process.exit(1);
}

const html = `
<h1>Test Email</h1>
<p>This is a test email sent from the taskEmail.js module.</p>
`;

async function main() {
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
        to: 'ngni74305@gmail.com', //Put din egen email her for at teste
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

main();