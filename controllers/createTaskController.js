const { Task } = require('../models');
exports.createTask = async (req, res) => {
    res.render("home/createTask", {
        title: "Welcome",
        message: "Hello from MVC!",
        tasks: Task.findAll(),
    });
};