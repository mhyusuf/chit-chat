const { Assignment } = require("./models").sequelize.models;

exports.CreateAssignment = async (req, res) => {
  //TODO: CONFIGURE UPLOAD MIDDLEWARE
  try {
    const { submitData, StudentId, TaskId } = req.body;
    const newAssigment = await Assignment.create({
      submitData,
      StudentId,
      TaskId,
    });
    res.status(201).send(newAssigment);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.DeleteAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    await Assignment.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

exports.EditAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.query;

    if (type === "add") {
      const incremented = await Assignment.increment("likes", {
        where: { id },
        returning: true,
      });
      return res.status(200).send(incremented[1][0]);
    } else if (type === "upload") {
      const { submitData } = req.body;
      const submitted = await Assignment.update(
        { submitData: submitData },
        { where: { id }, returning: true }
      );
      return res.status(200).send(submitted[1][0]);
    } else if (type === "dismiss") {
      const dismissed = await Assignment.update(
        { dismissed: true },
        { where: { id }, returning: true }
      );
      return res.status(200).send(dismissed[1][0]);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetAssignments = async (req, res) => {};

exports.GetAssignmentByStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const assigments = await Assignment.findAll({ where: { StudentId: id } });
    res.status(200).send(assigments);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

exports.GetAssignmentByTask = async (req, res) => {
  try {
    const { id } = req.params;
    const assigments = await Assignment.findAll({ where: { TaskId: id } });
    res.status(200).send(assigments);
  } catch (e) {
    res.status(404).send(e.message);
  }
};
