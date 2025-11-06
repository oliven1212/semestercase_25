// controllers/createTaskController.js
const { User, Gasstation, Branch } = require('../models');

exports.createTask = async (req, res) => {

    const users = await User.findAll();
    const gasstation = await Gasstation.findAll();
    const branch = await Branch.findAll();


    const gasstationIds = gasstationId.map(link => link.gasstationId);



    const gasstations = await Gasstation.findAll({
        attributes: ['id', 'branchId', 'address', 'contactEmail', 'contactPhone', 'frontSpace'],
        where: { id: gasstationIds },
        raw: true,
        include: [
            {
                model: Branch,

                as: 'branch',
                attributes: ['name'] // only fetch the branch name
            }
        ],
    });
    console.log(gasstations);

    res.render("home/gasstation", {
        title: 'gasstation',
        message: 'Vælg tankstation',
        users: users,
        owner: owner.toJSON(),
        gasstations: gasstations,
    });
};
