// @ts-nocheck
const models = require("../../models").sequelize.models;

exports.CreateResource = async (req, res) => {
  try {
    const {
      title,
      description,
      level,
      extra,
      nativeLanguage,
      targetLanguage,
    } = req.body;
    const newResource = await models.Resource.create({
      title,
      description,
      level,
      fileData: req.file.buffer,
      fileName: req.file.originalname,
      mimeType: req.file.mimetype,
      extra,
      nativeLanguage,
      targetLanguage,
    });
    res.status(201).send(newResource);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.DeleteResource = async (req, res) => {
  try {
    const { id } = req.params;
    await models.Resource.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.EditResource = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      level,
      fileContent,
      extra,
      targetLanguage,
      nativeLanguage,
    } = req.body;
    const resource = await models.Resource.findByPk(id);
    if (title) resource.title = title;
    if (description) resource.description = description;
    if (level) resource.level = level;
    if (fileContent) resource.fileContent = fileContent;
    if (extra) resource.extra = extra;
    if (nativeLanguage) resource.nativeLanguage = nativeLanguage;
    if (targetLanguage) resource.targetLanguage = targetLanguage;
    await resource.save();
    res.status(200).send(resource);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
