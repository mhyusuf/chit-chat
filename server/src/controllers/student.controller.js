// @ts-nocheck
const bcrypt = require("bcrypt");
const { generateAuthToken } = require("../utils/authHelpers.js");
const models = require("../models").sequelize.models;
const uuid = require("uuid");

exports.LoginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await models.Student.findOne({ where: { email } });
    if (!student) {
      throw new Error("Invalid email or password");
    }
    const matched = await bcrypt.compare(password, student.password);
    if (!matched) {
      throw new Error("Invalid email or password");
    }
    const token = await generateAuthToken(student.userId);
    res.status(200).cookie("authToken", token).send(student);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.RegisterStudent = async (req, res) => {
  try {
    const { email, name, password, avatar, RoomId, CourseId } = req.body;
    const hashedPw = await bcrypt.hash(password, 10);
    const userId = uuid.v4();
    const newStudent = await models.Student.create({
      userId,
      email,
      name,
      password: hashedPw,
      avatar,
      RoomId,
      CourseId,
    });
    const token = await generateAuthToken(userId);
    res.status(201).cookie("authToken", token).send(newStudent);
  } catch (e) {
    res.status(500).send(e, e.message);
  }
};

exports.ChangeNameStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { newName } = req.body;
    const result = await models.Student.update(
      { name: newName },
      { where: { id }, returning: true }
    );
    res.status(200).send(result[1][0]);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.ChangeAvatarStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { newAvatarStr } = req.body;
    const result = await models.Student.update(
      { avatar: newAvatarStr },
      { where: { id }, returning: true }
    );
    res.status(200).send(result[1][0]);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await models.Student.findByPk(id, {
      include: [
        { model: models.Assignment, include: { model: models.Task } },
        { model: models.Room },
      ],
    });
    const student = {
      id: result.dataValues.id,
      isTeacher: false,
      userId: result.dataValues.userId,
      name: result.dataValues.name,
      avatar: result.dataValues.avatar,
      CourseId: result.dataValues.CourseId,
      RoomId: result.dataValues.RoomId,
    };

    if (result)
      res.status(200).send({
        student,
        RoomId: result.dataValues.RoomId,
        assignments: result.dataValues.Assignments,
      });
    else res.status(404).send(new Error("Student not found"));
  } catch (e) {
    res.status(500).send(e.message);
  }
};
exports.GetStudentsByCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await models.Student.findAll({ where: { CourseId: id } });
    if (result) res.status(200).send(result);
    else res.status(404).send(new Error("No students found"));
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetStudentsByRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await models.Student.findAll({ where: { RoomId: id } });
    if (result) res.status(200).send(result);
    else res.status(404).send(new Error("No students found"));
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetBothSetsStudentsByCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const courseA = await models.Course.findByPk(id, {
      include: { model: models.Student },
    });
    const courseB = await models.Course.findByPk(
      courseA.dataValues.sisterCourse,
      { include: { model: models.Student } }
    );
    if (
      courseA.dataValues.Students.length ||
      courseB.dataValues.Students.length
    )
      res
        .status(200)
        .send([...courseA.dataValues.Students, ...courseB.dataValues.Students]);
    else res.status(404).send(new Error("No students found"));
  } catch (e) {
    res.status(500).send(e.message);
  }
};
