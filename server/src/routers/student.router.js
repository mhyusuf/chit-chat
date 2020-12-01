const router = require("express").Router();
const { authMiddleware } = require("../middlewares/auth");

const {
  GetStudentById,
  GetStudentsByRoom,
  GetStudentsByCourse,
  ChangeNameStudent,
  ChangeAvatarStudent,
  RegisterStudent,
  LoginStudent,
} = require("../controllers/student.controller");

router.post("/register", RegisterStudent);
router.post("/login", LoginStudent);
router.get("/:id", authMiddleware, GetStudentById);
router.get("/r/:id", authMiddleware, GetStudentsByRoom);
router.get("/c/:id", authMiddleware, GetStudentsByCourse);
router.put("/profile/:id", authMiddleware, ChangeNameStudent);
router.put("/avatar", authMiddleware, ChangeAvatarStudent);

module.exports = router;
