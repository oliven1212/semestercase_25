const { User, Gasstation} = require('../models');

exports.modifyGasstation = async (req, res) => {
    const currentUser = await User.findByPk(3,{
        raw: true
    });


    const users = await User.findAll({
        raw: true
    });
    const exampleUser = await User.findOne({ 
        where: { id: 1 },
        raw: true 
    });
    res.render("home/profile", {
        title: 'login',
        users: users,
        exampleUser: exampleUser,
        currentUser: currentUser
    });
};