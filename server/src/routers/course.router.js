const router = require("express").Router();

const {
  GetCourseBySister,
  GetCoursesByTeacher,
  GetCourseByRegistration,
  GetCourseById,
} = require("../controllers/course.controller");

router.get("/sister/:id", GetCourseBySister);
router.get("/teacher/:id", GetCoursesByTeacher);
router.get("/reg/:id", GetCourseByRegistration);
router.get("/:id", GetCourseById);

module.exports = router;
