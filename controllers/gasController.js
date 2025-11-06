const { User, Gasstation, GasstationUser, Branch } = require('../models');

exports.gasstation = async (req, res) => {

  const users = await User.findAll({
    raw: true 
  });
  const owner = await User.findOne({ 
    where: { id: 4 },
    raw: true
  });
  const gasstationId = await GasstationUser.findAll({ 
    where: { userId: 4 }, 
    raw: true 
  });
  const gasstationIds = gasstationId.map(link => link.gasstationId);



  const gasstations = await Gasstation.findAll({
    attributes: ['id', 'branchId', 'address', 'contactEmail', 'contactPhone', 'frontSpace'],
    where: { id: gasstationIds },
    include: [
      {
        model: Branch,
        as: 'branch',
        attributes: ['name'] // only fetch the branch name
      }
    ],
    raw: true,
  });
console.log(gasstations);
  res.render("home/gasstation", {
    title: 'gasstation',
    message: 'Vælg tankstation',
    users: users,
    owner: owner,
    gasstations: gasstations,
  });
};

