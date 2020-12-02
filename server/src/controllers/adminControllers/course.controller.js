const models = require("../../models").sequelize.models;
const uuid = require("uuid");

exports.CreatePairOfCourses = async (req, res) => {
  try {
    const { level, langA, langB, teacherA, teacherB } = req.body;
    const registrationIdA = uuid.v4();
    const registrationIdB = uuid.v4();

    const courseA = await models.Course.create({
      level,
      registrationId: registrationIdA,
      TeacherId: teacherA,
      nativeLanguage: langA,
      targetLanguage: langB,
    });
    const courseB = await models.Course.create({
      level,
      registrationId: registrationIdB,
      TeacherId: teacherB,
      nativeLanguage: langB,
      targetLanguage: langA,
      sisterCourse: courseA.id,
    });
    courseA.sisterCourse = courseB.id;
    await courseA.save();
    res.status(201).send([courseA, courseB]);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.EditCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      level,
      TeacherId,
      nativeLanguage,
      targetLanguage,
      sisterCourse,
    } = req.body;
    const course = await models.Course.findByPk(id);
    if (level) course.level = level;
    if (TeacherId) course.TeacherId = TeacherId;
    if (nativeLanguage) course.nativeLanguage = nativeLanguage;
    if (targetLanguage) course.targetLanguage = targetLanguage;
    if (sisterCourse) course.sisterCourse = sisterCourse;
    await course.save();
    res.status(200).send(course);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.DeleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await models.Course.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
