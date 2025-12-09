// controllers/createTaskController.js
const { User, Gasstation, Branch, Task } = require('../models');
const { gasstation } = require('./gasController');

exports.createTask = async (req, res) => {
    try {
        const users = await User.findOne({
            where: { id: req.session.user.id }, //Change to currently logged in user
            raw: true
        });

        //  Hent alle gasstationer + deres branch
        const gasstationsRaw = await Gasstation.findAll({
            attributes: ['id', 'address'], 
            include: [
                {
                    model: Branch,
                    attributes: ['name'] 
                }
            ]
            
        });

        // Lav dem om til plain JS-objekter
        const gasstations = gasstationsRaw.map(gs => gs.get({ plain: true }));


        // Gruppér efter branch-navn
        const stationsByBranch = {};
        gasstations.forEach(gs => {
            const branchName = gs.Branch ? gs.Branch.name : 'Ukendt';

            if (!stationsByBranch[branchName]) {
                stationsByBranch[branchName] = [];
            }

            stationsByBranch[branchName].push({
                id: gs.id,
                address: gs.address
            });
        });

//console.log('stationsByBranch:', JSON.stringify(stationsByBranch, null, 2));

        // Lav array til Handlebars
        const branchDropdowns = Object.keys(stationsByBranch).map(name => ({
            name,
            stations: stationsByBranch[name]
        }));

//console.log('branchDropdowns:', JSON.stringify(branchDropdowns, null, 2));

        const userId = 3; 
       
        const tasksRaw = await Task.findAll({
            where: { userId }, 
            order: [['startTime', 'ASC']]
            });
        const tasks = tasksRaw.map(t => t.get({ plain: true }));

        res.render('home/createTask', {
            title: 'velkommen',
            message: 'Vælg tankstation',
            users: users,
            gasstation: gasstations,
            branchDropdowns,
            tasks
        });





    } catch (err) {
        console.error('Fejl i createTask:');
        console.error('Sequelize name:', err.name);
        console.error('Sequelize message:', err.message);
        if (err.original) {
            console.error('MySQL message:', err.original.message);
            console.error('MySQL code:', err.original.code);
            console.error('MySQL sql:', err.original.sql);
        }
        res.status(500).send('Der opstod en fejl på serveren');
    }
};


exports.logStart = async (req, res) => {
    const body = req.body;
    const gasstationIdSelection = parseInt([body['station-OK Plus'], body['station-Shell'], body['station-Circle K'], body['station-Uno X'], body['station-Q8'], body['station-Ukendt']].find(value => value != ''));
    const taskId = await Task.create({
        gasstationId: gasstationIdSelection,
        taskLink: 0,
        userId: req.session.user.id, 
        startTime: body.startTime,
    });
    taskId.toJSON();
    res.redirect(`/createtaskdata/${taskId.id}`);
};