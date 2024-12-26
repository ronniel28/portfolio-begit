const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendEmail(name, email, message) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: email,
        to: 'ronniel.appleid@gmail.com',
        subject: `New message from ${name} ${email}`,
        text: message
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ' + error);
    }
}

module.exports = sendEmail;