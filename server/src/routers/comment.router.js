const {
  CreateComment,
  DeleteComment,
} = require("../controllers/comment.controller");

const router = require("express").Router();

router.post("/", CreateComment);
router.delete("/:id", DeleteComment);

module.exports = router;
