const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  filePath: { type: String, required: true }
});

module.exports = mongoose.model('File', fileSchema);
