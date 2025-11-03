const {
  User,
  Task,
  UserTasks,
  Gasstation,
  GastationUser,
} = require("../models");
exports.taskHistorie = (req, res) => {
  console.log("routes/taskHistorie rammes!");
};

exports.taskHistorie = async (req, res) => {
  const user = await User.findOne({
    attributes: ["id", "firstName", "lastName", "phone"],
    where: { id: 2 },
    raw: true,
  });

  const tasks = await Task.findOne({
    where: { userId: user.id },
    raw: true,
  });

  const gasstation = await Gasstation.findAll({
    raw: true,
  });

  const task = await Task.findAll({
    where: {
      id: 2,
    },
    include: [
      {
        model: Gasstation,
      },
    ],
    raw: true,
  });
  console.log(task);

  res.render("home/taskHistorie", {
    user: user,
    newUsers: ["firstName", "lastName", "phone"],
    tasks: tasks,
    gasstation: gasstation,
  });
};
