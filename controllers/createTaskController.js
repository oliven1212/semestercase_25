const { Task, User } = require('../models');
exports.createTask = async (req, res) => {

    const users = await User.findAll({ raw: true });

    res.render("home/createTask", {
        title: "start log",
        message: "Hello from MVC!",
        users: users,
        tankstation: [{ branch: 'Shell' }, { branch: 'OK Plus' }, { branch: 'Q8' }]
    });
};

const { Gasstation, Branch } = require('../models');

exports.stations = async (req, res, next) => {

    const gasstations = await Gasstation.findAll();
    const branches = await Branch.findAll();

}


