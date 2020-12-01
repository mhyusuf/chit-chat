const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const db = require("./models");
const { Teacher, Course } = db.sequelize.models;
const routers = require("./routers");

require("dotenv").config();

app.use("/api/user", routers.userRouter);
app.use("/api/assignment", routers.assignmentRouter);
app.use("/api/comment", routers.commentRouter);
app.use("/api/resource", routers.resourceRouter);
app.use("/api/message", routers.messageRouter);
app.use("/api/teacher", routers.teacherRouter);
app.use("/api/course", routers.courseRouter);
app.use("/api/task", routers.taskRouter);
app.use("/api/room", routers.roomRouter);
app.use("/api/student", routers.studentRouter);

(async () => {
  await db.sequelize.sync();

  console.log("Connected to Sequelize on 5432");
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
})();