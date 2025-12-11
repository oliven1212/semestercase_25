const { Task, User, Gasstation, Picture, Branch, Product, ProductTask } = require('../models');
const path = require('path');
const fs = require('fs');
const { where } = require('sequelize');

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

    const products = await ProductTask.findAll({
        where: {taskId: req.params.taskId},
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

    console.log(products);
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