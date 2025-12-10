const { User, Gasstation, GasstationUser, Branch, City } = require('../models');

exports.gasstation = async (req, res) => {

  const users = await User.findAll({raw: true});
  const owner = await User.findOne({
    where: { id: req.session.user.id },
    raw: true
  });
  const gasstationId = await GasstationUser.findAll({
    where: { userId: req.session.user.id },
    raw: true
  });
  const gasstationIds = gasstationId.map(link => link.gasstationId);

  const gasstations = await Gasstation.findAll({
    where: { id: gasstationIds },
    include:
        [{
        model: Branch,
      },
        {
            model: City,
        }],
      order: [[City, 'name', 'ASC']],
    raw: true,
  });
  res.render("home/gasstation", {
    title: 'gasstation',
    message: 'Vælg tankstation',
    users: users,
    owner: owner,
    gasstations: gasstations,
  });
};

