console.log('✅ invite.js loaded');
const express = require('express');
const router = express.Router();
const sendInviteEmail = require('../services/inviteService');

router.get('/invite', (req, res) => {
  res.render('invite'); // Make sure 'invite.ejs' exists in the 'views' folder
});

router.post('/invite', async (req, res) => {
  const { email } = req.body;

  try {
    await sendInviteEmail(email);
    res.send('Invitation sent successfully!');
  } catch (err) {
    console.error('Error sending invite:', err);
    res.status(500).send('Failed to send invitation.');
  }
});

module.exports = router;
