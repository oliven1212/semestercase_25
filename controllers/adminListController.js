const {User, Gasstation, City, Product} = require("../models");

exports.adminListUsers = async (req, res) => {
    const users = await User.findAll({
        order: [['lastName', 'ASC']],
        raw: true
    });
    /*console.log(users[2].dataValues.firstName);
    .dataValues virker ikke, men chatgpt har guidet os til at bruge { raw: true}*/
    res.render("home/adminList", {
        title: 'Liste af brugere',
        message: 'Opret ny bruger',
        users: users,
        name: `${users.lastName}, ${users.firstName}`
    });
};

exports.adminListGasstations = async (req, res) => {
    const stations = await Gasstation.findAll({
        order: [['address', 'ASC']]
    });
    /*console.log(users[2].dataValues.firstName);
    .dataValues virker ikke, men chatgpt har guidet os til at bruge { raw: true}*/
    const allstations = stations.map(station => station.toJSON());
    res.render("home/adminList", {
        title: 'Liste af tankstationer',
        message: 'Opret ny tankstation',
        name: allstations
    });
};

exports.adminListProducts = async (req, res) => {
    const products = await Product.findAll({
        order: [['name', 'ASC']]
    });
    /*console.log(users[2].dataValues.firstName);
    .dataValues virker ikke, men chatgpt har guidet os til at bruge { raw: true}*/
    const allProducts = products.map(product => product.toJSON());
    res.render("home/adminList", {
        title: 'Liste af produkter',
        message: 'Opret nyt product',
        name: allProducts
    });
};