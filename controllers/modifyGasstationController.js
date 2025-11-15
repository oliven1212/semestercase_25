const { Gasstation, Branch, City } = require('../models');

exports.modifyGasstation = async (req, res) => {
    const gasstation = await Gasstation.findAll({
        //attributes: ['id', 'branchId', 'address', 'contactEmail', 'contactPhone', 'frontSpace'],
        where: { id: req.params.id },
        include: [
            {
                model: Branch,
                attributes: ['name'] // only fetch the branch name
            }
        ],
        raw: true,
    });
    //retreives all branches so you can pick the one you need
    const branches = await Branch.findAll({ raw: true });
    const cities = await City.findAll({raw:true});
console.log(cities);
    res.render("home/modifyGasstation", {
        title: 'login',
        gasstation: gasstation,
        branches: branches,
        cities: cities,
    });
};

exports.updateGasstation = async (req, res) => {
    await Gasstation.updateGasstation({
        id: req.params.id,
        branchId: req.body.branchId,
        address: req.body.address,
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone,
        frontSpace: req.body.frontSpace,
    });
    res.redirect(`/modifyGasstation/${req.params.id}`);
};