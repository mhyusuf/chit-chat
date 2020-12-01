const router = require("express").Router();
const {
  GetRoomsByCourseId,
  GetRoomByStudentId,
} = require("../controllers/room.controller");

router.get("/getRooms/:id", GetRoomsByCourseId);
router.get("/getRoom/:id", GetRoomByStudentId);

module.exports = router;
