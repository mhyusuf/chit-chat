// @ts-nocheck
const models = require("../models").sequelize.models;

exports.GetMessagesByRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const messages = await models.Message.findAll({
      where: { RoomId: id },
    });
    if (messages) {
      res.status(200).send(messages);
    } else res.status(404).send(new Error("No messages found"));
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.CreateMessage = async (req, res) => {
  try {
    const sender = req.user.dataValues.userId;
    const { contentType, textContent, fileContent, RoomId } = req.body;
    const seenBy = [sender];
    const newMessage = await models.Message.create({
      sender,
      contentType,
      textContent,
      fileContent,
      seenBy,
      RoomId,
    });
    res.status(201).send(newMessage);
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
