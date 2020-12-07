const router = require("express").Router();
const { authMiddleware } = require("../middlewares/auth");
const { uploadFile } = require("../utils/uploadFile");

const {
  CreateAssignment,
  DeleteAssignment,
  EditAssignment,
  GetAssignmentById,
  GetAssignmentPreviewsByCourse,
  GetAssignmentByTask,
  GetFile,
} = require("../controllers/assignment.controller");

router.post("/", uploadFile.single("fileData"), CreateAssignment);
router.delete("/:id", DeleteAssignment);
router.put("/:id", authMiddleware, EditAssignment);
router.get("/:id", GetAssignmentById);
router.get("/:id/download", GetFile);
router.get("/course/:id", GetAssignmentPreviewsByCourse);
router.get("/task/:id", GetAssignmentByTask);

module.exports = router;
