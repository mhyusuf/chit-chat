const router = require("express").Router();
const { authMiddleware } = require("../middlewares/auth");

const {
  GetStudentById,
  GetStudentsByCourse,
  ChangeNameStudent,
  ChangeAvatarStudent,
  RegisterStudent,
  LoginStudent,
  GetStudentsByRoom,
  GetBothSetsStudentsByCourse,
} = require("../controllers/student.controller");

router.post("/register", RegisterStudent);
router.post("/login", LoginStudent);
router.get("/:id", authMiddleware, GetStudentById);
router.get("/course/:id", authMiddleware, GetStudentsByCourse);
router.get("/sistercourse/:id", authMiddleware, GetBothSetsStudentsByCourse);
router.get("/student/:id", authMiddleware, GetStudentsByRoom);
router.put("/profile/:id", authMiddleware, ChangeNameStudent);
router.put("/avatar/:id", authMiddleware, ChangeAvatarStudent);

module.exports = router;
