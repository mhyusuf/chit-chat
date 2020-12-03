const router = require("express").Router();
const {
  GetResources,
  GetResourceFile,
} = require("../controllers/resource.controller");

router.get("/:nativeLanguage/:targetLanguage/:level", GetResources);
router.get("/:id/download", GetResourceFile);

module.exports = router;
