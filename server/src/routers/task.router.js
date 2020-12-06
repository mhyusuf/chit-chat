const router = require("express").Router();

const {
  GetTaskDetail,
  GetTasksByLevel,
  GetTaskThumbnail,
} = require("../controllers/task.controller");

router.get("/:id/thumbnail", GetTaskThumbnail);
router.get("/:targetLanguage/:level", GetTasksByLevel);
router.get("/:TaskId/course/:CourseId", GetTaskDetail);

module.exports = router;
