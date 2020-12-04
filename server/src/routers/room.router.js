const router = require("express").Router();
const {
  GetRoomsByCourseId,
  GetRoomByStudentId,
  GetRoomDetailUsers,
} = require("../controllers/room.controller");

router.get("/course/:id", GetRoomsByCourseId);
router.get("/student/:id", GetRoomByStudentId);
router.get("/:id/getUsers", GetRoomDetailUsers);

module.exports = router;
