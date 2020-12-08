const { processImage } = require("../../utils/uploadTask");

const models = require("../../models").sequelize.models;

exports.CreateTask = async (req, res) => {
  try {
    const { level, title, description, targetLanguage } = req.body;
    const thumbnail = await processImage({
      buffer: req.file.buffer,
      width: 300,
      height: 300,
    });
    const newTask = await models.Task.create({
      level,
      title,
      description,
      thumbnail,
      targetLanguage,
    });
    res.status(201).send(newTask);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.DeleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await models.Task.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.EditTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { level, title, description, targetLanguage, thumbnail } = req.body;
    const task = await models.Task.findByPk(id);
    if (level) task.level = level;
    if (title) task.title = title;
    if (description) task.description = description;
    if (thumbnail) task.thumbnail = thumbnail;
    if (targetLanguage) task.targetLanguage = targetLanguage;
    await task.save();
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetThumbnail = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await models.Task.findByPk(id);
    res.set("Content-Type", "image/png");
    res.send(task.thumbnail);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
