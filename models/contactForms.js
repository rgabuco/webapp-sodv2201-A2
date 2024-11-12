const mongoose = require('mongoose');

const contactFormsSchema =new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false },
});
module.exports = mongoose.model('contactForms', contactFormsSchema);
