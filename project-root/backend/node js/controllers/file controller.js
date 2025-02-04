const File = require('../models/fileModel');

exports.uploadFile = async (req, res) => {
  const newFile = new File({
    filename: req.file.filename,
    filePath: req.file.path
  });

  await newFile.save();
  res.json({ message: "File uploaded successfully" });
};
