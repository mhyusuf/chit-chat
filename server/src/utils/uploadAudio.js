const multer = require("multer");

exports.uploadAudio = multer({
  limits: { fileSize: "1000000" },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(wav)$/)) {
      return cb(
        new Error("Unrecognized file extension. Supported file type is wav.")
      );
    }
    cb(null, true);
  },
});
