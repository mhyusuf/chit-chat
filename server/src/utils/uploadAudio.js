const multer = require("multer");

exports.uploadAudio = multer({
  limits: { fileSize: 1000000 },
  fileFilter(req, file, cb) {
    // console.log(file, "IN UPLOAD AUDIO");
    cb(null, true);
  },
});
