const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const db = require("./models");
const routers = require("./routers");
const adminRouters = require("./routers/adminRouters");
const cookieParser = require("cookie-parser");

require("dotenv").config();

app.use(express.json());
app.use(cookieParser());

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
app.use("/admin/resource", adminRouters.resourceRouter);
app.use("/admin/teacher", adminRouters.teacherRouter);
app.use("/admin/course", adminRouters.courseRouter);
app.use("/admin/task", adminRouters.taskRouter);
app.use("/admin/room", adminRouters.roomRouter);
app.use("/admin/student", adminRouters.studentRouter);

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    // origin: "*",
  },
});
// require("./socket")(io);
console.log("HELLO");
io.on("connect", (socket) => {
  console.log("user connected to io");
  socket.on("message", (data) => {
    console.log("emitting", data);
    io.emit("message", data);
  });
});

(async () => {
  await db.sequelize.sync();

  console.log("Connected to Sequelize on 5432");
  server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
})();
