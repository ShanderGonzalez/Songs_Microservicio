const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  name: { type: String, required: true },
  path: { type: String, required: true },
  plays: { type: Number, default: 0 },
}, { versionKey: false });

module.exports = mongoose.model('Song', songSchema);
