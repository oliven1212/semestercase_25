const { User, Gasstation, GasstationUser} = require('../models');

exports.taskPageOne = async (req, res) => {
    const users = await User.findAll();
    const newUsers = users.map(user => user.toJSON());
    const exampleUser = await User.findOne({ where: { id: 1 } });
    const exampleUser2 = await User.findByPk(2);
    res.render("home/taskPageOne", {
        title: 'login',
        users: newUsers,
        exampleUser: exampleUser.toJSON(),
        exampleUser2: exampleUser2.toJSON()
    });
};