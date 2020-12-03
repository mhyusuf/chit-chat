// @ts-nocheck
const { Assignment, Course, Student } = require("../models").sequelize.models;

exports.CreateAssignment = async (req, res) => {
  try {
    const { StudentId, TaskId } = req.body;
    const newAssigment = await Assignment.create({
      fileData: req.file.buffer,
      fileName: req.file.originalname,
      mimeType: req.file.mimetype,
      StudentId,
      TaskId,
      dismissed: false,
      likes: [],
    });
    res.status(201).send(newAssigment);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetAssignmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const assisgnment = await Assignment.findByPk(id);
    if (assisgnment) res.status(200).send(assisgnment);
    else res.status(404).send(new Error("No assignment found"));
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetFile = async (req, res) => {
  try {
    const { id } = req.params;
    const assignment = await Assignment.findByPk(id);
    console.log(assignment.fileData, assignment.mimeType, assignment.fileName);
    res.status(200);
    res.set("Content-Type", assignment.mimeType);
    res.send(assignment.fileData);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetAssignmentByCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const students = await Student.findAll({ where: { CourseId: id } });
    const assignments = [];
    students.forEach(async (student, i) => {
      const StudentId = student.id;
      let subGroup = await Assignment.findAll({ where: { StudentId } });
      assignments.push(...subGroup);
      // subGroup.forEach(assignment => {
      //   assignments.push(assignment.dataValues);
      // })
      if (i === students.length - 1) {
        res.status(200).send(assignments);
      }
    });
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

    if (type === "like") {
      const assignment = await Assignment.findByPk(id);
      assignment.likes = [...assignment.likes, req.user.userId];
      await assignment.save();
      return res.status(200).send(assignment);
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
