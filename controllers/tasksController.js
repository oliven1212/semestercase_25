const { Task, User, Gasstation, Picture, Branch } = require('../models');

exports.adminTasks = async (req, res) => {
    const task = await Task.findOne({
        where: { id: req.params.taskId },
        attributes: ['startTime'],
        include: [{
            model: User,
            attributes: ['id','firstName','lastName'],
        },
        {
            model: Gasstation,
            attributes: ['id', 'address','frontSpace'],
            include: [{
                model: Branch,
            }],
        }],
        raw: true,
    });
    const pictures = await Task.findAll({
        where: { id: req.params.taskId },
        attributes: [],
        include: [
        {
            model: Picture,
        }],
        raw: true,
    });

    const users = await User.findAll({
        attributes: ['id','firstName','lastName'],
        raw: true,
    });
    const gasstations = await Gasstation.findAll({
        attributes: ['id', 'address'],
        include: [{
            model: Branch,
            attributes: ['name'],
        }],
        raw: true,
    });

    console.log(pictures);

    res.render("admin/modifyTask", {
        task: task,
        pictures: pictures,
        users: users,
        gasstations: gasstations,
        currentPath: req.originalUrl.replace(/\/$/, ""),
        lastPage: '/admin/tasks',
    });
};





exports.deleteTask = async (req, res) => {
    console.log(`Deleting task with the ID: ${req.params.taskId}`);
    await Task.destroy({
        where: { id: req.params.taskId, },
    });
    res.redirect(`${req.body.link}`);
};

exports.deleteImage = async (req, res) =>{
    await Picture.destroy({
        where: { fileName: req.body.fileName, },
    });
    res.redirect(`${req.body.link}`);
};