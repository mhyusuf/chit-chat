const router = require("express").Router();

const {
  CreateTask,
  DeleteTask,
  EditTask,
} = require("../../controllers/adminControllers/task.controller");
const uploadTask = require("../../utils/uploadTask");

router.post("/", uploadTask.single("thumbnail"), CreateTask);
router.delete("/:id", DeleteTask);
router.put("/:id", EditTask);

module.exports = router;
