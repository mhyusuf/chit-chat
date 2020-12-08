module.exports = (io) => {
  io.on("connect", (socket) => {
    console.log("user connected to io");
    socket.on("message", (data) => {
      io.emit("message", data);
    });
  });
};
