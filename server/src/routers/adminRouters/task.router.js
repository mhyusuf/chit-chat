const router = require("express").Router();

const {
  CreateTask,
  DeleteTask,
  EditTask,
} = require("../../controllers/adminControllers/task.controller");

router.post("/", CreateTask);
router.delete("/:id", DeleteTask);
router.put("/:id", EditTask);

module.exports = router;
