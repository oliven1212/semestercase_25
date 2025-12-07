const {User, Gasstation, City, Product, Task} = require("../models");
const { Op } = require('sequelize');

exports.adminMain = async (req, res) => {
    const user = await User.findOne({
        where: { id: 1 },
        raw: true
    });
    res.render("admin/adminMain", {
        title: 'Admin information',
        user: user,
        content:
            [{name: 'Brugere', reference: 'users'},
            {name: 'Tankstationer', reference: 'gasstations'},
            {name: 'Rengøringer', reference: 'tasks'},
            {name: 'Produkter', reference: 'products'},]
    });
}

exports.adminListUsers = async (req, res) => {
    const searchQuery = req.query.listSearch || '';

    // Build the where clause for search
    const whereClause = searchQuery ? {
        [Op.or]: [
            { firstName: { [Op.like]: `%${searchQuery}%` } },
            { lastName: { [Op.like]: `%${searchQuery}%` } },
            { email: { [Op.like]: `%${searchQuery}%` } },
            { phone: { [Op.like]: `%${searchQuery}%` } }
        ]
    } : {};

    const users = await User.findAll({
        where: whereClause,
        order: [['firstName', 'ASC']],
        raw: true
    });

    // Map over users array to add name property to each user
    const usersMap = users.map(user => ({
        ...user,
        name: `${user.firstName} ${user.lastName}`,
        contact: `Email: ${user.email}  Telefon: ${user.phone}`,
        //.replace(/\/$/, "") is regex to remove any trailing "/"
        link: `${req.originalUrl.replace(/\/$/, "")}/${user.id}`
    }));

    res.render("home/adminList", {
        title: 'Liste af brugere',
        message: 'Opret ny bruger',
        createNew: '/admin/users/new',
        content: usersMap,
        searchQuery: searchQuery,
        lastPage: '/admin'
    });
};

exports.newUserStart = async (req, res) => {
    // Create a new user with minimal required fields
    const newUser = await User.create({
    });
    res.redirect(`/admin/users/${newUser.id}`);
};

exports.adminListGasstations = async (req, res) => {
    const searchQuery = req.query.listSearch || '';

    // Build the where clause for search
    const whereClause = searchQuery ? {
        [Op.or]: [
            { address: { [Op.like]: `%${searchQuery}%` } },
            { 'city.name' : { [Op.like]: `%${searchQuery}%` } },
            { email: { [Op.like]: `%${searchQuery}%` } },
            { phone: { [Op.like]: `%${searchQuery}%` } }
        ]
    } : {};
    const stations = await Gasstation.findAll({
        where: whereClause,
        order: [['address', 'ASC']],
        include: [{
            model: City
        }],
        raw: true
    });

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
        content: stationsMap,
        createNew: `/admin/gasstations/new`,
        searchQuery: searchQuery,
        lastPage: '/admin',
    });
};

exports.newGasstationStart = async (req, res) => {
    // Create a new user with minimal required fields
    const newStation = await Gasstation.create({
    });
    res.redirect(`/admin/gasstations/${newStation.id}`);
};

exports.adminListProducts = async (req, res) => {

    const searchQuery = req.query.listSearch || '';

    // Build the where clause for search
    const whereClause = searchQuery ? {
        [Op.or]: [
            { name: { [Op.like]: `%${searchQuery}%` } }
        ]
    } : {};

    const products = await Product.findAll({
        where: whereClause,
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
        createNew: `/admin/products/new`,
        searchQuery: searchQuery,
        lastPage: '/admin'
    });
};

exports.newProductStart = async (req, res) => {
    // Create a new user with minimal required fields
    const newProduct = await Product.create({
    });
    res.redirect(`/admin/products/${newProduct.id}`);
};

exports.adminListTasks = async (req, res) => {
    const searchQuery = req.query.listSearch || '';

    // Build the where clause for search
    const whereClause = searchQuery ? {
        [Op.or]: [
            { starTime: { [Op.like]: `%${searchQuery}%` } },
            { [User.firstName]: { [Op.like]: `%${searchQuery}%` } },
            { [User.lastName]: { [Op.like]: `%${searchQuery}%` } },
            { [Gasstation.address]: { [Op.like]: `%${searchQuery}%` } },
            { [Gasstation[City.name]]: { [Op.like]: `%${searchQuery}%` } },
        ]
    } : {};

    const tasks = await Task.findAll({
        where: whereClause,
        order: [['startTime', 'ASC']],
        include: [
            {
                model: Gasstation,
                include: [{
                    model: City
                }]
            },
            {
                model: User
            }
        ],
        raw: true
    });
    console.log(tasks);
    // Map over users array to add name property to each user
    const tasksMap = tasks.map(task => ({
        ...task,
        name: `${task['Gasstation.City.name']} ${task['Gasstation.cityCode']}, ${task['Gasstation.address']}`,
        contact: `Email: ${task['User.email']}  Telefon: ${task['User.phone']}`,
        //.replace(/\/$/, "") is regex to remove any trailing "/"
        link: `${req.originalUrl.replace(/\/$/, "")}/${task.id}`
    }));

    res.render("home/adminList", {
        title: 'Liste af rengøringer',
        content: tasksMap,
        searchQuery: searchQuery,
        lastPage: '/admin'
    });
};