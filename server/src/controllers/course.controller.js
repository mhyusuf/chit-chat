const models = require("../models").sequelize.models;

exports.GetCourseBySister = async (req, res) => {
  try {
    const id = req.params.id;
    const sisterCourseObj = await models.Course.findOne({
      where: { sisterCourse: id },
    });
    if (!sisterCourseObj) throw new Error("no sister course");
    res.status(200).send(sisterCourseObj);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetCoursesByTeacher = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await models.Course.findAll({ where: { TeacherId: id } });
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetCourseByRegistration = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await models.Course.findOne({
      where: { registrationId: id },
    });
    if (!course) throw new Error("no course found");
    res.status(200).send(course);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
