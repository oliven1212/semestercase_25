// controllers/createTaskController.js
const { User, Gasstation, Branch } = require('../models');

exports.createTask = async (req, res) => {
    try {
        const users = await User.findOne({
            where: { id: 3 },
            raw: true
        });


        const gasstations = await Gasstation.findAll({
            attributes: ['id', 'address'],
            include: [
                {
                    model: Branch,
                    attributes: ['name'], // kun branch name
                }],
            raw: true
        }
        );


        const branchOrder = ['Q8', 'Shell', 'OK Plus', 'UNO-X', 'Cirkle K'];

        const branchDropdowns = branchOrder.map((branchName) => {
            return {
                name: branchName,
                stations: gasstations
                    .filter(gs => gs.Branch && gs.Branch.name === branchName)
                    .map(gs => ({
                        id: gs.id,
                        address: gs.address
                    }))
            };
        });

        res.render('home/createTask', {
            title: 'velkommen',
            message: 'Vælg tankstation',
            users: users,
            gasstation: gasstations,
            branchDropdowns
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
