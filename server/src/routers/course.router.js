const router = require("express").Router();

const {
  GetCourseBySister,
  GetCoursesByTeacher,
  GetCourseByRegistration,
} = require("../controllers/course.controller");

router.get("/sister/:id", GetCourseBySister);
router.get("/teacher/:id", GetCoursesByTeacher);
router.get("/reg/:id", GetCourseByRegistration);

module.exports = router;
