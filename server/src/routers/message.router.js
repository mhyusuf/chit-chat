const {
  GetMessagesByRoom,
  CreateMessage,
  DeleteMessage,
} = require("../controllers/message.controller");
const router = require("express").Router();

router.get("/:roomId", GetMessagesByRoom);
router.post("/", CreateMessage);
router.delete("/:id", DeleteMessage);

module.exports = router;
