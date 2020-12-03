const multer = require("multer");

exports.uploadFile = multer({
  limits: { fileSize: "10000000" },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx|ppt|pptx|pdf)$/)) {
      return cb(
        new Error(
          "Unrecognized file extension. Supported file types are doc, docx, ppt, pptx, pdf."
        )
      );
    }
    cb(null, true);
  },
});
