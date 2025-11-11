const { Gasstation, Branch } = require('../models');

exports.modifyGasstation = async (req, res) => {
    const gasstation = await Gasstation.findAll({
        attributes: ['id', 'branchId', 'address', 'contactEmail', 'contactPhone', 'frontSpace'],
        where: { id: req.params.id },
        include: [
            {
                model: Branch,
                attributes: ['id', 'name'] // only fetch the branch name
            }
        ],
        raw: true,
    });
    console.log(gasstation);
    res.render("home/modifyGasstation", {
        title: 'login',
        gasstation: gasstation,
    });
};

exports.updateGasstation = async (req, res) => {

    res.redirect(`/modifyGasstation/${req.params.id}`);
};