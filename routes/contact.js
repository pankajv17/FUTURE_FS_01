const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error sending message' });
  }
});

module.exports = router;
