const router = require("express").Router();

const {
  CreateResource,
  DeleteResource,
  EditResource,
} = require("../../controllers/adminControllers/resource.controller");

router.post("/", CreateResource);
router.delete("/:id", DeleteResource);
router.put("/:id", EditResource);

module.exports = router;
