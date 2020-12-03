const router = require("express").Router();

const {
  CreateTask,
  DeleteTask,
  EditTask,
  GetThumbnail,
} = require("../../controllers/adminControllers/task.controller");
const { uploadThumbnail } = require("../../utils/uploadTask");

router.post("/", uploadThumbnail.single("thumbnail"), CreateTask);
router.delete("/:id", DeleteTask);
router.put("/:id", EditTask);
router.get("/:id/thumbnail", GetThumbnail);

module.exports = router;
