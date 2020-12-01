const router = require("express").Router();
const { authMiddleware } = require("../middlewares/auth");

const {
  RegisterTeacher,
  RegisterStudent,
  LoginStudent,
  LoginTeacher,
  LogoutUser,
  ChangeNameUser,
  ChangeAvatarUser,
  GetCurrentUser,
} = require("../controllers/user.controller");

router.post("/register/teacher", RegisterTeacher);
router.post("/register/student", RegisterStudent);
router.post("/login/teacher", LoginTeacher);
router.post("/login/student", LoginStudent);
router.get("/logout", LogoutUser);
router.put("/profile", ChangeNameUser);
router.put("/avatar", ChangeAvatarUser);
router.get("/", authMiddleware, GetCurrentUser);

module.exports = router;
