module.exports = (io) => {
  io.on("connect", (socket) => {
    console.log("user connected to io");
    socket.on("message", (data) => {
      console.log("emitting", data);
      io.emit("message", data);
    });
  });
};
