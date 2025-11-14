const {User, Gasstation, City, Product} = require("../models");
const {all} = require("express/lib/application");

exports.adminListUsers = async (req, res) => {
    const users = await User.findAll({
        order: [['firstName', 'ASC']]
    });
    /*console.log(users[2].dataValues.firstName);
    .dataValues virker ikke, men chatgpt har guidet os til at bruge { raw: true}*/
    const allUsers = users.map(user => user.toJSON());
    res.render("home/adminList", {
        title: 'Liste af brugere',
        message: 'Opret ny bruger',
        name: allUsers.lastName + allUsers.firstName
    });
};

exports.adminListGasstations = async (req, res) => {
    const stations = await Gasstation.findAll({
    });
    /*console.log(users[2].dataValues.firstName);
    .dataValues virker ikke, men chatgpt har guidet os til at bruge { raw: true}*/
    const allstations = stations.map(station => station.toJSON());
    res.render("home/adminList", {
        title: 'Liste af brugere',
        message: 'Opret ny bruger',
        name: allstations
    });
};

exports.adminListProducts = async (req, res) => {
    const products = await Product.findAll({
        order: [['Adress', 'ASC']]
    });
    /*console.log(users[2].dataValues.firstName);
    .dataValues virker ikke, men chatgpt har guidet os til at bruge { raw: true}*/
    const allProducts = products.map(product => product.toJSON());
    res.render("home/adminList", {
        title: 'Liste af brugere',
        message: 'Opret ny bruger',
        name: allProducts
    });
};