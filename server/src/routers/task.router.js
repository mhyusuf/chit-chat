const router = require("express").Router();

const {
  GetTaskById,
  GetTasksByLevel,
} = require("../controllers/task.controller");

router.get("/:id", GetTaskById);
router.get("/:originalLangauge/:targetLanguage/:level", GetTasksByLevel);

module.exports = router;
