const {
  User,
  tasks,
  UserTasks,
  Gasstation,
  GastationUser,
  Gas,
} = require("../models");
exports.taskHistorie = (req, res) => {
  console.log("routes/taskHistorie rammes!");

};

exports.taskHistorie = async (req, res) => {
  const users = await User.findAll({attributes:'firstName''lastName','phone'});
  const newUsers = users.map((user) => user.toJSON());
  res.render("home/taskHistorie", {
    Users: newUsers,
    newUsers: ["firstName", "lastName", "phone"],
  });
};
