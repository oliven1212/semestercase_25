const {User, Gasstation, City, Product} = require("../models");

exports.adminListUsers = async (req, res) => {
    const users = await User.findAll({
        order: [['lastName', 'ASC']],
        raw: true
    });

    // Map over users array to add name property to each user
    const usersMap = users.map(user => ({
        ...user,
        name: `${user.lastName}, ${user.firstName}`,
        contact: `Email: ${user.email}  Telefon: ${user.phone}`,
        link: `users/${user.id}`

    }));

    res.render("home/adminList", {
        title: 'Liste af brugere',
        message: 'Opret ny bruger',
        content: usersMap,
        type: 'users'
    });
};

exports.adminListGasstations = async (req, res) => {
    const stations = await Gasstation.findAll({
        order: [['address', 'ASC']],
        include: [{
            model: City
        }],
        raw: true
    });
    console.log(stations);

    // Map over users array to add name property to each user
    const stationsMap = stations.map(gasstation => ({
        ...gasstation,
        name: `${gasstation.address}, ${gasstation['City.name']}`,
        contact: `Email: ${gasstation.contactEmail}  Telefon: ${gasstation.contactPhone}`,
        link: `gasstations/${gasstation.id}`
    }));

    res.render("home/adminList", {
        title: 'Liste af tankstationer',
        message: 'Opret ny tankstation',
        content: stationsMap
    });
};

exports.adminListProducts = async (req, res) => {
    const products = await Product.findAll({
        order: [['name', 'ASC']],
        raw: true
    });

    // Map over users array to add name property to each user
    const productsMap = products.map(product => ({
        ...product,
        name: `${product.name}`

    }));

    res.render("home/adminList", {
        title: 'Liste af produkter',
        message: 'Opret nyt produkt',
        users: productsMap,
        type: 'products'
    });
};