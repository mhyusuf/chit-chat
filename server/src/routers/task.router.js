const router = require("express").Router();

const {
  GetTaskById,
  GetTasksByLevel,
} = require("../controllers/task.controller");

router.get("/:id", GetTaskById);
router.get("/:targetLanguage/:level", GetTasksByLevel);

module.exports = router;
