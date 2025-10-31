const { User, Gasstation, GasstationUser} = require('../models');

exports.profile = async (req, res) => {
    const users = await User.findAll();
    const newUsers = users.map(user => user.toJSON());
    const exampleUser = await User.findOne({ where: { id: 1 } });
    res.render("home/profile", {
        title: 'login',
        users: newUsers,
        exampleUser: exampleUser.toJSON()
    });
};