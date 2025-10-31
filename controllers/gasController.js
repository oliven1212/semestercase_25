const { User, Gasstation, GasstationUser} = require('../models');

exports.gasstation = async (req, res) => {

    const users = await User.findAll();
    const owner = await User.findOne({ where: {id: 4}});
    const gasstationId = await GasstationUser.findAll({ where: {userId: 4}});

    console.log(gasstationId.join(', '));


    const gasstations = await Gasstation.findAll({ where: {id: [(gasstationId.gasstationId.join(", "))]}});

    console.log(gasstations);

  res.render("home/gasstation", {
    title: 'gasstation',
    message: 'Vælg tankstation',
    users: users,
    owner: owner.toJSON(),
    gasstations: gasstation,
  });
};

