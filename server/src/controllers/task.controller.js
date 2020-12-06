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
    const { targetLanguage, level } = req.params;
    const tasks = await models.Task.findAll({
      where: {
        level,
        targetLanguage,
      },
    });
    if (!tasks) throw new Error("No tasks found");
    console.log("TASKS!", tasks);
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetTaskThumbnail = async (req, res) => {
  try {
    const { id } = req.params;
    const Task = await models.Task.findByPk(id);
    res.set("Content-Type", "image/png");
    res.status(200).send(Task.thumbnail);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
