const router = require("express").Router();

const {
  DeleteStudent,
  EditStudent,
  RegisterStudent,
} = require("../../controllers/adminControllers/student.controller");

router.post("/", RegisterStudent);
router.delete("/:id", DeleteStudent);
router.put("/:id", EditStudent);

module.exports = router;
