const { Gasstation, Branch } = require('../models');

exports.modifyGasstation = async (req, res) => {
    const gasstation = await Gasstation.findAll({
        attributes: ['id', 'branchId', 'address', 'contactEmail', 'contactPhone', 'frontSpace'],
        where: { id: req.params.id },
        include: [
            {
                model: Branch,
                attributes: ['name'] // only fetch the branch name
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
    Gasstation.updateGasstation({
        id: req.params.id,
        branchId: req.body.branchId,
        address: req.body.address,
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone,
        frontSpace: req.body.frontSpace,
    });
    res.redirect(`/modifyGasstation/${req.params.id}`);
};