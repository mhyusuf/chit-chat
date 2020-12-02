const router = require("express").Router();

const {
  CreateRoom,
  DeleteRoom,
  EditRoom,
} = require("../../controllers/adminControllers/room.controller");

router.post("/", CreateRoom);
router.delete("/:id", DeleteRoom);
router.put("/:id", EditRoom);

module.exports = router;
