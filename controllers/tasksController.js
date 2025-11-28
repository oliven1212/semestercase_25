const { Task } = require('../models');



exports.deleteTask = async (req, res) => {
    console.log(`Deleting task with the ID: ${req.params.taskId}`);
    await Task.destroy({
        where: { id: req.params.taskId,}, 
    });
    res.redirect(`${req.body.link}`);
};