const {
  User,
  Task,
  Gasstation,
  GastationUser,
  Product,
  ProductTask,
  Unit,
  Branch,
  City,
} = require("../models");

//taskhistorieController
exports.taskHistorie = async (req, res) => {



  const task = await Task.findAll({
    where: {
      id: req.params.taskId,
    },
    include: [
      {
        model: Gasstation,
        attributes: ["address", "cityCode"],
        include: [
          {
            model: Branch,
            attributes: ["name"],
          },
          {
            model: City,
          },
          // husk city virkede ikke (tilføj))
        ],
      },
      {
        model: User,
        attributes: ["firstName", "lastName", "phone"],
      },
      {
        model: Product,
        attributes: ["name"],
        through: {
          model: ProductTask,
          attributes: ["amount"],
        },
        include: {
          model: Unit,
          attributes: ["name"],
        },
      },
    ],

    raw: true,
  });

  const timeStamp = {
    date: `${task[0].startTime.getDate()}/${task[0].startTime.getMonth()}/${task[0].startTime.getFullYear()}`,
    time: `${task[0].startTime.getHours()}:${task[0].startTime.getMinutes()}`,
  };

  //response til ens http kald som der åbner taskhistoriefilen
  res.render("home/taskHistorie", {
    user: {
      firstName: task[0]["User.firstName"],
      lastName: task[0]["User.lastName"],
      phone: task[0]["User.phone"],
    },
    task: task,
    timeStamp: timeStamp,
  });
};
