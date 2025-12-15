const { where } = require('sequelize');
const { User, Gasstation, Role, City, Task, Branch, GasstationUser } = require('../models');

exports.profile = async (req, res) => {
    const previousURL = new URL(await req.get('referer'));
    const currentUser = await User.findByPk(req.session.user.id, {
        raw: true
    });

    const users = await User.findAll({
        raw: true
    });
    const exampleUser = await User.findOne({
        where: { id: 1 }, //setup current user id
        raw: true
    });
    res.render("home/profile", {
        title: 'login',
        users: users,
        exampleUser: exampleUser,
        currentUser: currentUser,
        hideProfile: true,

    });
};




exports.adminUser = async (req, res) => {
    const user = await User.findOne({
        where: { id: req.params.userId },
        include: [
            {
                model: City,
                attributes: ['zipCode', 'name'],
            },
            {
                model: Role,
            },
        ],
        raw: true,
    });
    //retreives all branches so you can pick the one you need
    const cities = await City.findAll({
        attributes: ['zipCode', 'name'],
        raw: true
    });
    const roles = await Role.findAll({
        raw: true,
    });
    res.render("admin/modifyUser", {
        user: user,
        cities: cities,
        roles: roles,
        currentPath: req.originalUrl.replace(/\/$/, ""),
    });
};

exports.updateUser = async (req, res) => {
    let zipCode = req.body.city;
    if (zipCode.lastIndexOf('(') == -1 || zipCode.lastIndexOf(')') == -1 || zipCode.lastIndexOf('(') > zipCode.lastIndexOf(')')) {
        //Error handling format not correct: [city name] ([zip code])

    }
    zipCode = parseInt(zipCode.slice(zipCode.lastIndexOf('(') + 1, zipCode.lastIndexOf(')')));
    const city = await City.findOne({
        where: { zipCode: zipCode },
        raw: true
    });
    if (!city) {
        //Error handling city not found based on zip code

    }

    await User.updateUser({
        id: req.params.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        cityCode: zipCode,
        roleId: req.body.roleId,
    });

    res.redirect(`/admin/users/${req.params.userId}`);
};

exports.deleteUser = async (req, res) => {
    await User.destroy({
        where: { id: req.params.userId, },
    });

    if (req.body.link) {
        res.redirect(req.body.link);
    } else {
        res.redirect(`/admin/users`);
    }
};

exports.tasks = async (req, res) => {
    const user = await User.findOne({
        where: { id: req.params.userId },
        attributes: ['firstName', 'lastName'],
        raw: true,
    });
    const relatedTasks = await Task.findAll({
        where: { userId: req.params.userId, },
        attributes: ['id', 'startTime'],
        include: [
            {
                model: Gasstation,
                include: [{
                    model: Branch,
                },

                {
                    model: City,
                }
                ],
            },
        ],

        raw: true,
    });
    //sorts so the oldest task is at the end and newest first
    relatedTasks.sort((a, b) => {
        return new Date(b.startTime) - new Date(a.startTime);
    });
    const contentMap = relatedTasks.map(task => {
        if (task['Gasstation.id']) {
            return {
                name: `${task['Gasstation.Branch.name']} - ${task.startTime.toLocaleDateString("en-GB")}`,
                contact: `${task['Gasstation.City.name']}, ${task['Gasstation.address']}`,
                link: `/admin/tasks/${task.id}`,
                originalUrl: req.originalUrl.replace(/\/$/, ""),
            };
        } else {
            return {
                name: `${task.startTime.toLocaleDateString("en-GB")}`,
                contact: ` `,
                link: `/admin/tasks/${task.id}`,
                originalUrl: req.originalUrl.replace(/\/$/, ""),
            };
        }


    });
    res.render("admin/adminTaskHistorie", {
        title: `Opgaver for `,
        sourceTitle: `${user.lastName}, ${user.firstName}`,
        content: contentMap,
    });
};


exports.gasstations = async (req, res) => {
    const user = await User.findOne({
        where: { id: req.params.userId },
        attributes: ['firstName', 'lastName'],
        raw: true,
    });

    const allGasstations = await Gasstation.findAll({
        attributes: ['id', 'address'],
        include: [{
            model: Branch,
        }, {
            model: City,
        }],
        raw: true,
    });

    const gasstations = await User.findAll({
        where: { id: req.params.userId, },
        attributes: [],
        include: [{
            model: Gasstation,
            attributes: ['id', 'address'],
            include: [{
                model: City,
                attributes: ['name']
            },
            {
                model: Branch,
                attributes: ['name'],
            }],
            raw: true,
        }],
        raw: true,
    });
    const gasId = gasstations[0]['Gasstations.id'];
    const noneId = gasId === null;


    const contentMap = gasstations.map(gasstation => {
        return {
            name: `${gasstation['Gasstations.Branch.name']}`,
            contact: `${gasstation['Gasstations.City.name']}, ${gasstation['Gasstations.address']}`,
            link: `/admin/gasstations/${gasstation['Gasstations.id']}`,
            originalUrl: req.originalUrl.replace(/\/$/, "")
        };
    });
    res.render("admin/adminTaskHistorie", {
        title: `Relaterede tankstationer til`,
        sourceTitle: `${user.firstName} ${user.lastName}`,
        content: contentMap,
        none: noneId,
        allGasstations: allGasstations,
        linkUrl: `/admin/users/${req.params.userId}/gasstations/new`,
    });
};

exports.linkGasstation = async (req, res) => {
    const alreadyConnected = await GasstationUser.findOne({
        where: {
            userId: req.params.userId,
            gasstationId: req.body.gasstation.split("(").pop().slice(0, -1),
        },
        raw: true,
    });
    if (!alreadyConnected) {
        await GasstationUser.create({
            userId: req.params.userId,
            gasstationId: req.body.gasstation.split("(").pop().slice(0, -1),
        });
    }
    res.redirect(`/admin/users/${req.params.userId}/gasstations`);
};