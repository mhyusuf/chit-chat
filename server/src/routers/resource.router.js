const router = require("express").Router();
const {
  GetResources,
  GetResourceFile,
} = require("../controllers/resource.controller");

router.get("/:targetLanguage/:level", GetResources);
router.get("/:id/download", GetResourceFile);

module.exports = router;
