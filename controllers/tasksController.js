const { Task } = require('../models');



exports.deleteTask = async (req, res) => {
    await Task.destroy({
        where: { id: req.params.taskId,}, 
    });
    res.redirect(`${req.body.link}`);
};