const { User, Gasstation, GasstationUser} = require('../models');

exports.profile = async (req, res) => {
    const users = await User.findAll({ raw: true});
    res.render("home/profile", {
        title: 'login',
        users: users
    });
};