const userRouter = require("./user.router");
const assignmentRouter = require("./assignment.router");
const commentRouter = require("./comment.router");
const resourceRouter = require("./resource.router");
const messageRouter = require("./message.router");
const teacherRouter = require("./teacher.router");
const courseRouter = require("./course.router");
const taskRouter = require("./task.router");
const roomRouter = require("./room.router");
const studentRouter = require("./student.router");

module.exports = {
  commentRouter,
  resourceRouter,
  messageRouter,
  teacherRouter,
  courseRouter,
  taskRouter,
  roomRouter,
  studentRouter,
  userRouter,
  assignmentRouter,
};
