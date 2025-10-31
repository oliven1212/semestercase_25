const { User, Gasstation, GasstationUser} = require('../models');

exports.profile = async (req, res) => {
    const users = await User.findAll();
    const newUsers = users.map(user => user.toJSON());
    res.render("home/profile", {
        title: 'login',
        users: newUsers
    });
};