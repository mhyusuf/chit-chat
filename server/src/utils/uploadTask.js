const multer = require("multer");

module.exports = multer({
  limits: { fileSize: "1000000" },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|svg|tiff)$/)) {
      return cb(
        new Error(
          "Unrecognized file extension. Supported file types are jpg, jpeg, png, gif, svg, tiff."
        )
      );
    }
    cb(null, true);
  },
});
