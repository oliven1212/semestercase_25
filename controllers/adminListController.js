const {User} = require("../models");
exports.adminList = async (req, res) => {
    const users = await User.findAll();
    /*console.log(users[2].dataValues.firstName);
    .dataValues virker ikke, men chatgpt har guidet os til at bruge { raw: true}*/
    const newUsers = users.map(user => user.toJSON());
    res.render("home/adminList", {
        title: 'Liste af brugere',
        message: 'Opret ny bruger',
        name: newUsers
    });
};