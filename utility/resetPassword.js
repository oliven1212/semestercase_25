require("dotenv").config();

const nodeMailer = require("nodemailer");

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD;

if (!GMAIL_USER || !GMAIL_PASS) {
  console.error("Missing env vars: GMAIL_USER or GMAIL_APP_PASSWORD");
  console.error("Tjek .env eller dine eksport-variabler");
  process.exit(1);
}

//Linket -> hvor den skal hen (til owner fra task gasstation)

async function resetPasswordEmail(toEmail, uniqueId) {
  const resetUrl = `http://91.98.73.200:3000/login/reset/${uniqueId}`;
  const html = `<h3>Reset dit password</h3>
        <p>Hej!</p>
        <p>Du har anmodet om at nulstille dit password</p>
        <p>Klik på linket nedenfor for at nulstille dit password:</p>
        <br>
        <a href=${resetUrl}>Nulstil password her</a>
        <p>Dette link er gyldigt i en time og kan kun bruges en gang.</p>
        <p>Dette er en automatisk genereret email, svar venligst ikke på denne.</p>
        `;

  // Brug eksplicit SMTP med secure port
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Password reset" <${GMAIL_USER}>`,
    to: toEmail, //Put din egen email her for at teste. Skal erstattes af toEmail
    subject: "Nulstil dit password",
    html: html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sendt:", info.messageId);
  } catch (error) {
    console.error("Fejl ved afsendelse:", error);
    // Hvis 535-5.7.8: username/password not accepted -> tjek app-password eller OAuth2
  }
}

module.exports = { resetPasswordEmail };

//sendTaskEmail();
