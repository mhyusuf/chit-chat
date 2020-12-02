const router = require("express").Router();

const {
  CreatePairOfCourses,
  EditCourse,
  DeleteCourse,
} = require("../../controllers/adminControllers/course.controller");

router.post("/", CreatePairOfCourses);
router.delete("/:id", DeleteCourse);
router.put("/:id", EditCourse);

module.exports = router;
