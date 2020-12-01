const router = require("express").Router();

const {
  CreateAssignment,
  DeleteAssignment,
  EditAssignment,
  GetAssignments,
  GetAssignmentByStudent,
  GetAssignmentByTask,
} = require("../controllers/assignment.controller");

router.post("/", CreateAssignment);
router.delete("/:id", DeleteAssignment);
router.put("/", EditAssignment);
router.get("/", GetAssignments);
router.get("/s/:id", GetAssignmentByStudent);
router.get("/t/:id", GetAssignmentByTask);

module.exports = router;
