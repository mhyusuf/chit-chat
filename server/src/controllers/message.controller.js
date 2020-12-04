// @ts-nocheck
const models = require("../models").sequelize.models;

exports.GetMessagesByRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const messages = await models.Message.findAll({
      where: { RoomId: id },
    });
    const results = [];
    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];
      const teacher = await models.Teacher.findOne({
        where: { userId: message.dataValues.sender },
      });
      const student = await models.Student.findOne({
        where: { userId: message.dataValues.sender },
      });
      let sender =
        (teacher && teacher.dataValues) || (student && student.dataValues);
      const { name, avatar } = sender;
      sender = { name, avatar, createdAt: message.createdAt };
      results.push({
        sender,
        type: message.contentType,
        content: message.textContent
          ? message.textContent
          : `/message/api/${message.id}/audio`,
        seenBy: message.seenBy,
      });
    }
    res.status(200).send(results);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.GetAudio = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await models.Message.findByPk(id);
    res.set("Content-Type", "audio/wave");
    res.status(200).send(message.fileContent);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.CreateMessage = async (req, res) => {
  try {
    const sender = req.user.dataValues.userId;
    const { contentType, textContent, RoomId } = req.body;
    console.log("REQ FILE", req.file);
    const seenBy = [sender];
    if (req.file) {
      const newAudioMessage = await models.Message.create({
        sender,
        contentType,
        fileContent: req.file.buffer,
        seenBy,
        RoomId,
      });
      res.status(201).send(newAudioMessage);
    } else {
      const newTextMessage = await models.Message.create({
        sender,
        contentType,
        textContent,
        seenBy,
        RoomId,
      });
      res.status(201).send(newTextMessage);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.DeleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await models.Message.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
