exports.LogoutUser = async (req, res) => {
  res.clearCookie("authToken");
  res.send(200);
};

exports.GetCurrentUser = async (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
