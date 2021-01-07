// @ts-nocheck
const bcrypt = require("bcrypt");
const models = require("../../models").sequelize.models;
const uuid = require("uuid");

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
      avatar: "teacherCap",
    });
    res.status(201);
    res.send(newTeacher);
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
};

exports.EditTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, name, password } = req.body;
    const teacher = await models.Teacher.findByPk(id);
    if (email) teacher.email = email;
    if (name) teacher.name = name;
    if (password) {
      const hashedPw = await bcrypt.hash(password, 10);
      teacher.password = hashedPw;
    }
    await teacher.save();
    res.status(200).send(teacher);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.DeleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    await models.Teacher.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
