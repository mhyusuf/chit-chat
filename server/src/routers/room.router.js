const router = require("express").Router();
const { authMiddleware } = require("../middlewares/auth");
const {
  GetRoomsByCourseId,
  GetRoomByStudentId,
  GetRoomDetailUsers,
} = require("../controllers/room.controller");

router.get("/course/:id", authMiddleware, GetRoomsByCourseId);
router.get("/student/:id", GetRoomByStudentId);
router.get("/:id/getUsers", GetRoomDetailUsers);

module.exports = router;
