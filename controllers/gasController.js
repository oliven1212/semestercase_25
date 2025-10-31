const { User, Gasstation, GasstationUser, Branch} = require('../models');

exports.gasstation = async (req, res) => {

    const users = await User.findAll();
    const owner = await User.findOne({ where: {id: 4}});
    const gasstationId = await GasstationUser.findAll({ where: {userId: 4},raw: true});
    const gasstationIds = gasstationId.map(link => link.gasstationId);



    const gasstations = await Gasstation.findAll({
      attributes: ['id', 'branchId', 'location', 'contactEmail', 'contactPhone', 'frontSpace'],
      where: {id: gasstationIds},
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

