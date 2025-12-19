const { Task, User, Gasstation, Picture, Branch, Product, ProductTask, Unit, City } = require('../models');
const path = require('path');
const fs = require('fs');

exports.adminTasks = async (req, res) => {
    const task = await Task.findOne({
        where: { id: req.params.taskId },
        attributes: ['id', 'startTime'],
        include: [{
            model: User,
            attributes: ['id', 'firstName', 'lastName'],
        },
        {
            model: Gasstation,
            attributes: ['id', 'address', 'frontSpace'],
            include: [{
                model: Branch,
            }],
        }],
        raw: true,
    });
    const tzOffset = task.startTime.getTimezoneOffset() * 60000; // in ms
    task.startTime = new Date(task.startTime.getTime() - tzOffset).toISOString().slice(0, 16);

    const pictures = await Task.findAll({
        where: { id: req.params.taskId },
        attributes: [],
        include: [
            {
                model: Picture,
            }],
        raw: true,
    });

    const taskProducts = await ProductTask.findAll({
        where:{taskId: req.params.taskId},
        raw: true,
    });

    const users = await User.findAll({
        attributes: ['id', 'firstName', 'lastName'],
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
    const products = await Product.findAll({
        attributes: ['id','name'],
        include: [{
            model: Unit,
        }],
        raw: true,
    });

    res.render("admin/modifyTask", {
        task: task,
        pictures: pictures,
        taskProducts: taskProducts,
        users: users,
        gasstations: gasstations,
        products: products,
        currentPath: req.originalUrl.replace(/\/$/, ""),
        
    });
};

exports.deleteTask = async (req, res) => {
    console.log(`Deleting task with the ID: ${req.params.taskId}`);
    await Task.destroy({
        where: { id: req.params.taskId, },
    });
    res.redirect(`/admin/tasks`);
};

exports.deleteImage = async (req, res) => {
    //deletes Picture db entry
    await Picture.destroy({
        where: { fileName: req.body.fileName, },
    });
    //deletes image file
    fs.unlink(path.join(__dirname, '..', 'public', 'imgUploads', req.body.fileName), (err) => {
        if (err) {
            console.error('Fejl ved sletning af fil:', err);
        } else {
            console.log('Fil slettet succesfuldt');
        }
    });
    res.redirect(`/admin/tasks/${req.params.taskId}`);
};

exports.updateTask = async (req, res) => {
    await Task.updateTask({
        id: req.params.taskId,
        startTime: new Date(req.body.startTime),
        userId: req.body.user.split("(").pop().slice(0, -1),
        gasstationId: req.body.gasstation.split("(").pop().slice(0, -1),

    });
    res.redirect(`/admin/tasks/${req.params.taskId}`);
};

exports.userTasks = async (req, res) => {
    const task = await Task.findOne({
        where: { id: req.params.taskId },
        attributes: ['id', 'startTime'],
        include: [{
            model: User,
            attributes: ['id', 'firstName', 'lastName'],
        },
        {
            model: Gasstation,
            attributes: ['id', 'address', 'frontSpace'],
            include: [{
                model: Branch,
            }],
        }],
        raw: true,
    });
    const tzOffset = task.startTime.getTimezoneOffset() * 60000; // in ms
    task.startTime = new Date(task.startTime.getTime() - tzOffset).toISOString().slice(0, 16);

    const pictures = await Task.findAll({
        where: { id: req.params.taskId },
        attributes: [],
        include: [
            {
                model: Picture,
            }],
        raw: true,
    });

    const taskProducts = await ProductTask.findAll({
        where:{taskId: req.params.taskId},
        raw: true,
    });

    const users = await User.findAll({
        attributes: ['id', 'firstName', 'lastName'],
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
    const products = await Product.findAll({
        attributes: ['id','name'],
        include: [{
            model: Unit,
        }],
        raw: true,
    });

    res.render("admin/modifyTask", {
        task: task,
        pictures: pictures,
        taskProducts: taskProducts,
        products: products,
        currentPath: req.originalUrl.replace(/\/$/, ""),
        
    });
};

exports.userListTasks = async (req, res) => {

    const tasks = await Task.findAll({
        where: {userId: req.session.user.id},
        order: [['startTime', 'DESC']],
        include: [
            {
                model: Gasstation,
                include: [{
                    model: City,
                }]
            },
            {
                model: User,
            }
        ],
        raw: true,
    });
    // Map over users array to add more variables
    const tasksMap = tasks.map(task => ({
        ...task,
        name: `${task['Gasstation.City.name']} ${task['Gasstation.cityCode']}, ${task['Gasstation.address']}`,
        contact: `Email: ${task['User.email']} <br> Telefon: ${task['User.phone']}`,
        //.replace(/\/$/, "") is regex to remove any trailing "/"
        link: `/tasks/${task.id}`,
        formattedDate: new Date(task.startTime).toLocaleDateString('da-DK'),
    }));



    res.render("home/adminList", {
        title: 'Liste af rengøringer',
        content: tasksMap,
        hideSearch: true,
    });
};