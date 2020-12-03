const { authMiddleware } = require("../middlewares/auth");
const { uploadAudio } = require("../utils/uploadAudio");
const {
  GetMessagesByRoom,
  CreateMessage,
  DeleteMessage,
  GetAudio,
} = require("../controllers/message.controller");
const router = require("express").Router();

router.get("/:id", authMiddleware, GetMessagesByRoom);
router.get("/:id/audio", authMiddleware, GetAudio);
router.post(
  "/",
  authMiddleware,
  uploadAudio.single("fileContent"),
  CreateMessage
);
router.delete("/:id", authMiddleware, DeleteMessage);

module.exports = router;
