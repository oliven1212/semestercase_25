const { Gasstation, Branch, City } = require('../models');

exports.adminGasstation = async (req, res) => {
    const gasstation = await Gasstation.findAll({
        attributes: ['id', 'branchId', 'cityCode', 'address', 'contactEmail', 'contactPhone', 'frontSpace'],
        where: { id: req.params.id },
        include: [
            {
                model: Branch,
            },
            {
                model: City,
                attributes: ['name','zipCode']
            }
        ],
        raw: true,
    });
    //retreives all branches so you can pick the one you need
    const branches = await Branch.findAll({ 
        attributes: ['id','name'],
        raw: true 
    });
    const cities = await City.findAll({
        attributes:['zipCode','name'],
        raw:true

    });
    res.render("home/modifyGasstation", {
        title: 'login',
        gasstation: gasstation,
        branches: branches,
        cities: cities,
    });
};

exports.updateGasstation = async (req, res) => {
    let zipCode = req.body.city;
    if(zipCode.lastIndexOf('(') == -1 || zipCode.lastIndexOf(')') == -1 || zipCode.lastIndexOf('(') > zipCode.lastIndexOf(')')){
//Error handling format not correct: [city name] ([zip code])

    }
    zipCode = parseInt(zipCode.slice(zipCode.lastIndexOf('(') + 1, zipCode.lastIndexOf(')')));
    const city = await City.findOne({
        where:{zipCode: zipCode},
        raw:true
    });
    if(!city){
//Error handling city not found based on zip code

    }


    await Gasstation.updateGasstation({
        id: req.params.id,
        branchId: req.body.branchId,
        address: req.body.address,
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone,
        frontSpace: req.body.frontSpace,
        cityCode: zipCode,
    });
    
    res.redirect(`/admin/gasstation/${req.params.id}`);
};

exports.deleteGasstation = async (req, res) => {
    await Gasstation.destroy({
        where: { id: req.params.id,}, 
    });
    
    res.redirect(`/gasstation`);
};