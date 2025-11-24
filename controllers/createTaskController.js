// controllers/createTaskController.js
const { User, Gasstation, Branch, Task } = require('../models');
const { gasstation } = require('./gasController');

exports.createTask = async (req, res) => {
    try {
        const users = await User.findOne({
            where: { id: 3 },
            raw: true
        });

        // 1) Hent alle gasstationer + deres branch
        const gasstationsRaw = await Gasstation.findAll({
            attributes: ['id', 'address'], // skift 'address' hvis feltet hedder noget andet
            include: [
                {
                    model: Branch,
                    attributes: ['name'] // fx Q8, Shell, osv.
                }
            ]
            // VIGTIGT: ingen raw: true her, ellers findes gs.get(...) ikke
        });

        // 2) Lav dem om til plain JS-objekter
        const gasstations = gasstationsRaw.map(gs => gs.get({ plain: true }));

        console.log('Gasstations (plain):', JSON.stringify(gasstations, null, 2));

        // 3) Gruppér efter branch-navn
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

        console.log('stationsByBranch:', JSON.stringify(stationsByBranch, null, 2));

        // 4) Lav array til Handlebars: [{ name: 'Q8', stations: [...] }, ...]
        const branchDropdowns = Object.keys(stationsByBranch).map(name => ({
            name,
            stations: stationsByBranch[name]
        }));

        console.log('branchDropdowns:', JSON.stringify(branchDropdowns, null, 2));

        const userId = 3; // hvis du er hårdkodet til dev — men helst: req.user.id
        // Hvis du har req her (typisk i Express controller), brug req.user.id
        const tasksRaw = await Task.findAll({
            where: { userId }, // tilpas hvis du bruger req.user.id
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
    const gasstationId = await Gasstation.create();
    console.log(gasstationId.toJSON());
    gasstationId.toJSON();
    res.redirect(`/createtaskdata/${gasstationId.id}`);
};