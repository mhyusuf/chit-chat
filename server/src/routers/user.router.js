const router = require("express").Router();
const { authMiddleware } = require("../middlewares/auth");

const {
  LogoutUser,
  GetCurrentUser,
} = require("../controllers/user.controller");

router.get("/logout", authMiddleware, LogoutUser);
router.get("/", authMiddleware, GetCurrentUser);

module.exports = router;
