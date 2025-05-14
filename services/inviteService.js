// services/inviteService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendInviteEmail = async (toEmail) => {
  const mailOptions = {
    from: `"Your App" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: 'You’ve been invited!',
    html: `
      <h3>You've been invited to join our HelloWorld app!</h3>
      <p>Click below to register:</p>
      <a href="http://localhost:3000/register">Join Now</a>
    `,
  };

  return transporter.sendMail(mailOptions);
};

// ✅ EXPORT THE FUNCTION DIRECTLY
module.exports = sendInviteEmail;
