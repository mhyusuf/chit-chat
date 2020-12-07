const models = require("../models").sequelize.models;

exports.CreateComment = async (req, res) => {
  try {
    const { user, content, AssignmentId } = req.body;
    const newComment = await models.Comment.create({
      senderId: user.userId,
      senderName: user.name,
      content,
      AssignmentId,
    });
    if (!newComment) throw new Error("could not add comment");
    res.status(201).send(newComment);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

exports.DeleteComment = async (req, res) => {
  try {
    const id = req.params.id;
    await models.Comment.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
