// @ts-nocheck
const models = require("../models").sequelize.models;

exports.GetResources = async (req, res) => {
  try {
    const { nativeLanguage, targetLanguage, level } = req.params;
    const resources = await models.Resource.findAll({
      where: {
        nativeLanguage,
        targetLanguage,
        level,
      },
    });
    if (resources) {
      res.status(200).send(resources);
    } else res.status(404).send(new Error("No resources found"));
  } catch (e) {
    res.status(500).send(e.message);
  }
};
