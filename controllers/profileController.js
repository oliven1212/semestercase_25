const { User, Gasstation, GasstationUser} = require('../models');

exports.profile = async (req, res) => {
    const currentUser = await User.findByPk(3,{
        raw: true
    });

    const allUserIds = await User.getAllUserIds();
    console.log(allUserIds);


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