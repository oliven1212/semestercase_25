const { User, Gasstation, GasstationUser} = require('../models');

exports.gasstation = async (req, res) => {

    const users = await User.findAll({ raw: true});

  res.render("home/gasstation", {
    title: 'gasstation',
    message: 'Vælg tankstation',
    users: users,
    gasstation: [{branch:'Cirkle K'},{branch:'OK'},{branch:'Uno-X'},{branch:'Q8'},{branch:'Shell'}]
  });

};
