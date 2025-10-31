const { User, Gasstation, GasstationUser, task} = require('../models');

exports.taskPageOne = async (req, res) => {
    const users = await User.findAll();
    const newUsers = users.map(user => user.toJSON());
    const gasstation2 = await Gasstation.findOne({ where: { id: 2 } });
    const user2 = await User.findByPk(2);
    res.render("home/taskPageOne", {
        title: 'Log din rengøring',
        users: newUsers,
        gasstation2: gasstation2.toJSON(),
        user2: user2.toJSON()
    });
};