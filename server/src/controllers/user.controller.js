// @ts-nocheck
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const models = require("../models").sequelize.models;
const jwt = require("jsonwebtoken");

async function generateAuthToken(uuid) {
  const token = await jwt.sign({ userId: uuid }, process.env.JWT_SECRET);
  return token;
}

exports.RegisterTeacher = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const hashedPw = await bcrypt.hash(password, 10);
    const userId = uuid.v4();
    const newTeacher = await models.Teacher.create({
      userId,
      email,
      name,
      password: hashedPw,
    });
    const token = generateAuthToken(userId);
    res.status(201).cookie("authToken", token).send(newTeacher);
  } catch (e) {
    res.status(500).send(e, e.message);
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
    const token = generateAuthToken(userId);
    res.status(201).cookie("authToken", token).send(newStudent);
  } catch (e) {
    res.status(500).send(e, e.message);
  }
};
exports.LoginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;
    const teacher = await models.Teacher.findOne({ where: { email } });
    if (!teacher) {
      throw new Error("Invalid email or password");
    }
    const matched = await bcrypt.compare(password, teacher.password);
    if (!matched) {
      throw new Error("Invalid email or password");
    }
    const token = generateAuthToken(teacher.userId);
    res.status(200).cookie("authToken", token).send(teacher);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
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
    const token = generateAuthToken(student.userId);
    res.status(200).cookie("authToken", token).send(student);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.LogoutUser = async (req, res) => {};

exports.ChangeNameUser = async (req, res) => {};

exports.ChangeAvatarUser = async (req, res) => {};

exports.GetCurrentUser = async (req, res) => {};
