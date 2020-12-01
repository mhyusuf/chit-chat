const router = require("express").Router();

const { GetTeacherByCourse } = require("../controllers/teacher.controller");

router.get("/:id", GetTeacherByCourse);

module.exports = router;
