const router = require("express").Router();

const {
  GetTaskById,
  GetTasksByLevel,
  GetTaskThumbnail,
} = require("../controllers/task.controller");

router.get("/:id", GetTaskById);
router.get("/:id/thumbnail", GetTaskThumbnail);
router.get("/:targetLanguage/:level", GetTasksByLevel);

module.exports = router;
