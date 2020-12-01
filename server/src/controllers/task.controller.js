const models = require("../models").sequelize.models;

exports.GetTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await models.Task.findOne({ where: { id } });
    if (!task) throw new Error("No task found");
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetTasksByLevel = async (req, res) => {
  try {
    const { nativeLanguage, targetLanguage, level } = req.params;
    const tasks = await models.Task.findAll({
      where: {
        level,
        nativeLanguage,
        targetLanguage,
      },
    });
    if (!tasks) throw new Error("No tasks found");
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
