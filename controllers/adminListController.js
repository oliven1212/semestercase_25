const {User, Gasstation, City, Product, Task} = require("../models");

exports.adminListUsers = async (req, res) => {
    const users = await User.findAll({
        order: [['firstName', 'ASC']],
        raw: true
    });

    // Map over users array to add name property to each user
    const usersMap = users.map(user => ({
        ...user,
        name: `${user.firstName}, ${user.lastName}`,
        contact: `Email: ${user.email}  Telefon: ${user.phone}`,
        //.replace(/\/$/, "") is regex to remove any trailing "/"
        link: `${req.originalUrl.replace(/\/$/, "")}/${user.id}`
    }));

    res.render("home/adminList", {
        title: 'Liste af brugere',
        message: 'Opret ny bruger',
        createNew: `/admin/users/new`,
        content: usersMap,
        type: 'users'
    });
};

exports.newUserStart = async (req, res) => {
    // Create a new user with minimal required fields
    const newUser = await User.create({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    res.redirect(`/admin/users/${newUser.id}`);
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
        ...gasstation, // ... spread operator
        name: `${gasstation.address}, ${gasstation['City.name']}`, // ` ` template literal
        contact: `Email: ${gasstation.contactEmail}  Telefon: ${gasstation.contactPhone}`,
        //.replace(/\/$/, "") is regex to remove any trailing "/"
        link: `${req.originalUrl.replace(/\/$/, "")}/${gasstation.id}`
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
        name: `${product.name}`,
        //.replace(/\/$/, "") is regex to remove any trailing "/"
        link: `${req.originalUrl.replace(/\/$/, "")}/${product.id}`

    }));

    res.render("home/adminList", {
        title: 'Liste af produkter',
        message: 'Opret nyt produkt',
        content: productsMap,
        type: 'products'
    });
};