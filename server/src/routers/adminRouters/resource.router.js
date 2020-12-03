const router = require("express").Router();
const { uploadFile } = require("../../utils/uploadFile");

const {
  CreateResource,
  DeleteResource,
  EditResource,
} = require("../../controllers/adminControllers/resource.controller");

router.post("/", uploadFile.single("fileData"), CreateResource);
router.delete("/:id", DeleteResource);
router.put("/:id", EditResource);

module.exports = router;
