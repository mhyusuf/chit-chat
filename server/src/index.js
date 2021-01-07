const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const db = require("./models");
const routers = require("./routers");
const adminRouters = require("./routers/adminRouters");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors());
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
// @ts-ignore
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
require("./socket")(io);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("../../client/build"));
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.send(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

(async () => {
  let retries = 5;
  while (retries) {
    try {
      await db.sequelize.sync().then(() => {
        console.log(`Connected to Sequelize on 5432`);
      });
      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`Retries left: ${retries}`);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
  server.listen(PORT, () => console.log(`Listening on ${PORT}`));
})();
