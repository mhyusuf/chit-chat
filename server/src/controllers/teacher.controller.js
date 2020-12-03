// @ts-nocheck
const bcrypt = require("bcrypt");
const { generateAuthToken } = require("../utils/authHelpers.js");
const models = require("../models").sequelize.models;
const uuid = require("uuid");

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
    const token = await generateAuthToken(teacher.userId);
    res.status(200).cookie("authToken", token).send(teacher);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.RegisterTeacher = async (req, res) => {
  try {
    const { email, name, password, avatar } = req.body;
    const hashedPw = await bcrypt.hash(password, 10);
    const userId = uuid.v4();
    const newTeacher = await models.Teacher.create({
      userId,
      email,
      name,
      password: hashedPw,
      avatar,
    });
    const token = await generateAuthToken(userId);
    res.status(201).cookie("authToken", token).send(newTeacher);
  } catch (e) {
    res.status(500).send(e, e.message);
  }
};

exports.ChangeNameTeacher = async (req, res) => {
  try {
    const { newName } = req.body;
    const { userId } = req.user;
    const result = await models.Teacher.update(
      { name: newName },
      { where: { userId }, returning: true }
    );
    res.status(200).send(result[1][0]);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetTeacherByCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await models.Course.findOne({ where: { id } });
    const teacher = await models.Teacher.findOne({
      where: { id: course.TeacherId },
    });
    if (teacher) res.status(200).send(teacher);
    else res.status(404).send(new Error("No teacher found"));
  } catch (e) {
    res.status(500).send(e.message);
  }
};
