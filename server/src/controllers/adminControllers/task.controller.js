const models = require("../../models").sequelize.models;

exports.CreateTask = async (req, res) => {
  try {
    const {
      level,
      title,
      description,
      nativeLanguage,
      targetLanguage,
    } = req.body;
    // const { thumbnail } = req.file;
    const thumbnail = null;
    const newTask = await models.Task.create({
      level,
      title,
      description,
      thumbnail,
      nativeLanguage,
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
    const {
      level,
      title,
      description,
      nativeLanguage,
      targetLanguage,
    } = req.body;
    // const { thumbnail } = req.file;
    const task = await models.Task.findByPk(id);
    if (level) task.level = level;
    if (title) task.title = title;
    if (description) task.description = description;
    if (thumbnail) task.thumbnail = thumbnail;
    if (nativeLanguage) task.nativeLanguage = nativeLanguage;
    if (targetLanguage) task.targetLanguage = targetLanguage;
    await task.save();
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
