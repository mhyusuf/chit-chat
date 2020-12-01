const router = require("express").Router();

const {
  RegisterUser,
  LoginUser,
  LogoutUser,
  ChangeNameUser,
  ChangeAvatarUser,
  GetCurrentUser,
} = require("../controllers/user.controller");

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/logout", LogoutUser);
router.put("/profile", ChangeNameUser);
router.put("/avatar", ChangeAvatarUser);
router.get("/", GetCurrentUser);

module.exports = router;
