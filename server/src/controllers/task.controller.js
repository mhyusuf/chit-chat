// @ts-nocheck
const models = require("../models").sequelize.models;

exports.GetTaskDetail = async (req, res) => {
  try {
    const { TaskId, CourseId } = req.params;
    const task = await models.Task.findByPk(TaskId, {
      attributes: ["id", "title", "description", "level", "targetLanguage"],
    });
    const students = await models.Student.findAll({
      where: { CourseId },
      attributes: ["id", "name"],
      include: [
        {
          model: models.Assignment,
          include: [
            {
              model: models.Task,
              where: { id: TaskId },
            },
          ],
          attributes: ["fileName"],
        },
      ],
    });
    if (!task) throw new Error("No task found");
    res.status(200).send({ task, students });
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
