const router = require("express").Router();
const { authMiddleware } = require("../middlewares/auth");

const {
  GetTeacherByCourse,
  ChangeNameTeacher,
  RegisterTeacher,
  LoginTeacher,
  ChangeStudentName,
} = require("../controllers/teacher.controller");

router.post("/register", RegisterTeacher);
router.post("/login", LoginTeacher);
router.get("/:id", authMiddleware, GetTeacherByCourse);
router.put("/profile", authMiddleware, ChangeNameTeacher);
router.put("/student", authMiddleware, ChangeStudentName);

module.exports = router;
