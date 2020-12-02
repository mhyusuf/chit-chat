const router = require("express").Router();

const {
  RegisterTeacher,
  EditTeacher,
  DeleteTeacher,
} = require("../../controllers/adminControllers/teacher.controller");

router.post("/", RegisterTeacher);
router.put("/:id", EditTeacher);
router.delete("/:id", DeleteTeacher);

module.exports = router;
