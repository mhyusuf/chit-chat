const { authMiddleware } = require("../middlewares/auth");
const {
  GetMessagesByRoom,
  CreateMessage,
  DeleteMessage,
} = require("../controllers/message.controller");
const router = require("express").Router();

router.get("/:id", authMiddleware, GetMessagesByRoom);
router.post("/", authMiddleware, CreateMessage);
router.delete("/:id", authMiddleware, DeleteMessage);

module.exports = router;
