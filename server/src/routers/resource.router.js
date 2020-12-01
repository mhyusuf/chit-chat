const router = require("express").Router();

const { GetResources } = require("../controllers/resource.controller");

router.get("/:nativeLangauge/:targetLanguage/:level", GetResources);

module.exports = router;
