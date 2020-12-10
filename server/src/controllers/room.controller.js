// @ts-nocheck
const models = require("../models").sequelize.models;

exports.GetRoomsByCourseId = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await models.Course.findByPk(id, {
      include: {
        model: models.Room,
        include: [{ model: models.Student }, { model: models.Message }],
      },
    });
    if (course.dataValues.Rooms) {
      const rooms = course.dataValues.Rooms.map((room) => {
        let studentNames = [];
        room.dataValues.Students.forEach((student) => {
          studentNames.push(student.name);
        });
        const unseenMessages = room.dataValues.Messages.some(
          (message) => !message.dataValues.seenBy.includes(req.user.userId)
        );
        return {
          name: room.name,
          studentNames,
          RoomId: room.id,
          unseenMessages,
        };
      });
      res.status(200).send(rooms);
    } else res.status(404).send(new Error("No rooms found"));
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetRoomDetailUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const students = await models.Student.findAll({
      where: { RoomId: id },
      include: [
        { model: models.Course, include: { model: models.Teacher } },
        { model: models.Room },
      ],
    });
    // const room = await models.Room.findByPk(id)
    const teachers = [];
    let roomName;
    const roomDetailStudents = students.map((student) => {
      roomName = student.dataValues.Room.dataValues.name;
      const teacher = student.dataValues.Course.dataValues.Teacher;
      const teacherId =
        student.dataValues.Course.dataValues.Teacher.dataValues.userId;
      const hasNoTeacher = teachers.length;
      const hasOneTeacher = teachers[0] && !teachers[1];
      if (!hasNoTeacher) {
        teachers.push(teacher.dataValues);
      } else if (hasOneTeacher && teachers[0].userId !== teacherId) {
        teachers.push(teacher.dataValues);
      }
      return { name: student.name, avatar: student.avatar };
    });
    const roomDetailTeachers = teachers.map((teacher) => {
      return { name: teacher.name, avatar: teacher.avatar };
    });
    res.status(200).send({
      students: roomDetailStudents,
      teachers: roomDetailTeachers,
      roomName,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetRoomByStudentId = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await models.Student.findOne({ where: { id } });
    const room = await models.Room.findOne({ where: { id: student.RoomId } });
    if (room) res.status(200).send(room);
    else res.status(404).send(new Error("No room found"));
  } catch (e) {
    res.status(500).send(e.message);
  }
};
