// @ts-nocheck
const models = require("../models").sequelize.models;

exports.GetResources = async () => {
  try {
    const { nativeLangauge, targetLanguage, level } = req.params;
    const resources = await models.Resources.findAll({
      where: {
        nativeLangauge,
        targetLanguage,
        level,
      },
    });
    if (resources) {
      resizeBy.status(200).send(resources);
    } else resizeBy.status(404).send(new Error("No resources found"));
  } catch (e) {
    resizeBy.status(500).send(e.message);
  }
};
