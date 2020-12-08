// @ts-nocheck
const {
  Assignment,
  Course,
  Task,
  Student,
  Comment,
} = require("../models").sequelize.models;

exports.CreateAssignment = async (req, res) => {
  try {
    const { StudentId, TaskId } = req.body;
    const newAssigment = await Assignment.create({
      fileData: req.file ? req.file.buffer : null,
      fileName: req.file ? req.file.originalname : null,
      mimeType: req.file ? req.file.mimetype : null,
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
    const assignment = await Assignment.findByPk(id, {
      include: [{ model: Student }, { model: Task }, { model: Comment }],
    });
    if (assignment) {
      res.status(200).send({
        submitData: assignment.fileData,
        fileName: assignment.fileName,
        task: assignment.Task,
        student: assignment.Student,
        comments: assignment.Comments,
        likes: assignment.likes,
        completed: assignment.fileData ? true : false,
      });
    } else res.status(404).send(new Error("No assignment found"));
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetFile = async (req, res) => {
  try {
    const { id } = req.params;
    const assignment = await Assignment.findByPk(id);
    res.status(200);
    res.set("Content-Type", assignment.mimeType);
    res.send(assignment.fileData);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetAssignmentPreviewsByCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const students = await Student.findAll({
      where: { CourseId: id },
      include: {
        model: Assignment,
        include: [{ model: Task }, { model: Comment }],
      },
    });
    const allAssignments = [];
    students.forEach((student) => {
      const { Assignments } = student.dataValues;
      Assignments.forEach((assignment) => {
        if (!assignment.dataValues.dismissed) {
          allAssignments.push({
            id: assignment.dataValues.id,
            student: { name: student.name, avatar: student.avatar },
            taskName: assignment.dataValues.Task.dataValues.title,
            description: assignment.dataValues.Task.dataValues.description,
            likes: assignment.dataValues.likes.length,
            comments: assignment.dataValues.Comments.length,
            fileData: assignment.dataValues.fileData,
            createdAt: assignment.dataValues.createdAt,
            updatedAt: assignment.dataValues.updatedAt,
          });
        }
      });
    });

    res.status(200).send(allAssignments);
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
      const set = new Set(assignment.likes).add(req.user.userId);
      assignment.likes = Array.from(set);
      await assignment.save();
      return res.status(200).send(assignment.likes);
    } else if (type === "upload") {
      const submitted = await Assignment.update(
        {
          fileData: req.file ? req.file.buffer : null,
          fileName: req.file ? req.file.originalname : null,
          mimeType: req.file ? req.file.mimetype : null,
        },
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

exports.GetAssignmentByTask = async (req, res) => {
  try {
    const { id } = req.params;
    const assigments = await Assignment.findAll({ where: { TaskId: id } });
    res.status(200).send(assigments);
  } catch (e) {
    res.status(404).send(e.message);
  }
};
