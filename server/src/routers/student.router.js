const {
  GetStudentById,
  GetStudentsByRoom,
  GetStudentsByCourse,
} = require("../controllers/student.controller");
const router = require("express").Router();

router.get("/:id", GetStudentById);
router.get("/r/:id", GetStudentsByRoom);
router.get("/c/:id", GetStudentsByCourse);

module.exports = router;
