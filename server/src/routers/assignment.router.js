const router = require("express").Router();
const { authMiddleware } = require("../middlewares/auth");

const {
  CreateAssignment,
  DeleteAssignment,
  EditAssignment,
  GetAssignmentById,
  GetAssignmentByCourse,
  GetAssignmentByStudent,
  GetAssignmentByTask,
} = require("../controllers/assignment.controller");

router.post("/", CreateAssignment);
router.delete("/:id", DeleteAssignment);
router.put("/:id", authMiddleware, EditAssignment);
router.get("/:id", GetAssignmentById);
router.get("/c/:id", GetAssignmentByCourse);
router.get("/s/:id", GetAssignmentByStudent);
router.get("/t/:id", GetAssignmentByTask);

module.exports = router;
