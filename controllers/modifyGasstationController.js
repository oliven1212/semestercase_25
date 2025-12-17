const { Gasstation, Branch, City, Task, User, GasstationUser } = require('../models');

exports.adminGasstation = async (req, res) => {
    const gasstation = await Gasstation.findAll({
        attributes: ['id', 'branchId', 'cityCode', 'address', 'contactEmail', 'contactPhone', 'frontSpace'],
        where: { id: req.params.gasId },
        include: [
            {
                model: Branch,
            },
            {
                model: City,
                attributes: ['name','zipCode']
            }
        ],
        raw: true,
    });
    //retreives all branches so you can pick the one you need
    const branches = await Branch.findAll({ 
        attributes: ['id','name'],
        raw: true 
    });
    const cities = await City.findAll({
        attributes:['zipCode','name'],
        raw:true

    });
    res.render("admin/modifyGasstation", {
        gasstation: gasstation,
        branches: branches,
        cities: cities,
        currentPath: req.originalUrl.replace(/\/$/, ""),
    });
};

exports.updateGasstation = async (req, res) => {
    let zipCode = req.body.city;
    if(zipCode.lastIndexOf('(') == -1 || zipCode.lastIndexOf(')') == -1 || zipCode.lastIndexOf('(') > zipCode.lastIndexOf(')')){
//Error handling format not correct: [city name] ([zip code])

    }
    zipCode = parseInt(zipCode.slice(zipCode.lastIndexOf('(') + 1, zipCode.lastIndexOf(')')));
    const city = await City.findOne({
        where:{zipCode: zipCode},
        raw:true
    });
    if(!city){
//Error handling city not found based on zip code

    }


    await Gasstation.updateGasstation({
        id: req.params.gasId,
        branchId: req.body.branchId,
        address: req.body.address,
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone,
        frontSpace: req.body.frontSpace,
        cityCode: zipCode,
    });
    
    res.redirect(`/admin/gasstations/${req.params.gasId}`);
};

exports.deleteGasstation = async (req, res) => {
    const permission = req.session.user.role === 1;
    if(!permission){
        return;
    }
    await Gasstation.destroy({
        where: { id: req.params.gasId,}, 
    });
        if(req.body.link){
        res.redirect(req.body.link);
    }else{
        res.redirect(`/admin/gasstations`);
    }
};

exports.tasks = async (req, res) => {
    const gasstation = await Gasstation.findOne({
        where:{ id: req.params.gasId,},
        attributes:['address'],
        include:[{
            model: City,
            attributes:['name'],
        },{
            model:Branch,
            attributes:['name'],
        }
    ],
        raw: true,
    });
    const tasks = await Gasstation.findAll({
        where:{ id: req.params.gasId,},
        attributes:['address'],
        include:[{
            model: Task,
            attributes:['startTime','id'],
        },{
            model: City,
            attributes:['name'],
        },{
            model:Branch,
            attributes:['name'],
        }
    ],
        raw: true,
    });
    const contentMap = tasks.map(task => {
        const date = new Date(task['Tasks.startTime']);
        function padZero(number) {
            return number < 10 ? '0' + number : number;
        }
        return {
            name: `${padZero(date.getDate())}/${padZero(date.getMonth() + 1)}/${date.getFullYear()}`,
            contact: `${task['Branch.name']}, ${task.address}, ${task['City.name']}`,
            link: `/admin/tasks/${task['Tasks.id']}`,
            originalUrl: req.originalUrl.replace(/\/$/, "")
        };
    });

    res.render("admin/adminTaskHistorie", {
        title: `Relaterede opgaver til`,
        sourceTitle: `${gasstation['Branch.name']}, ${gasstation.address}, ${gasstation['City.name']}`,
        content: contentMap,
    });
};

exports.users = async (req, res) => {
    const gasstation = await Gasstation.findOne({
        where:{ id: req.params.gasId,},
        attributes:['address'],
        include:[{
            model: City,
            attributes:['name'],
        },{
            model:Branch,
            attributes:['name'],
        }
    ],
        raw: true,
    });
    const users = await Gasstation.findAll({
        where: {id: req.params.gasId},
        attributes:[],
        include:[{
            model: User,
            attributes:['id','firstName', 'lastName', 'email', 'phone'],
            through: {
                attributes:['isOwner'],
            }
        }],
        raw: true,
    });
        const owner = await Gasstation.findOne({
        where: {id: req.params.gasId},
        attributes:[],
        include:[{
            model: User,
            attributes:['id','firstName', 'lastName', 'email', 'phone'],
            through: {
                where: {isOwner: 1},
                attributes:['isOwner'],
            }
        }],
        raw: true,
    });

    const allUsers = await User.findAll({
        attributes:['id','firstName','lastName', 'email'],
        raw: true,
    })
    const contentMap = users.map(user => {
        return {
            id: user['Users.id'],
            name: `${user['Users.firstName']} ${user['Users.lastName']}`,
            contact: `Email: ${user['Users.email']} <br/> Telefon: ${user['Users.phone']}`,
            link: `/admin/gasstations/${req.params.gasId}/users/${user['Users.id']}`,
            editLink: `/admin/users/${user['Users.id']}`,
            originalUrl: req.originalUrl.replace(/\/$/, ""),
        };
    });

    res.render("admin/adminTaskHistorie", {
        title: `Relaterede tankstationer til`,
        sourceTitle: `${gasstation['Branch.name']}, ${gasstation.address}, ${gasstation['City.name']}`,
        content: contentMap,
        owner: `${owner['Users.firstName']} ${owner['Users.lastName']}`,
        linkUrl: `/admin/gasstations/${req.params.gasId}/users/new`,
        allUsers: allUsers,
    });
};

exports.createLinkUser = async (req, res) => {
    const alreadyConnected = await GasstationUser.findOne({
        where: {
            gasstationId: req.params.gasId,
            userId: req.body.user.split("(").pop().slice(0, -1),
        },
        raw: true,
    });
    if (!alreadyConnected) {
        await GasstationUser.create({
            gasstationId: req.params.gasId,
            userId: req.body.user.split("(").pop().slice(0, -1),
            isOwner: 0,
        });
    }
    res.redirect(`/admin/gasstations/${req.params.gasId}/users`);
};

exports.removeLinkUser = async (req, res) => {
    await GasstationUser.destroy({
        where: {
            gasstationId: req.params.gasId,
            userId: req.params.userId,
        },
    });
    res.redirect(`/admin/gasstations/${req.params.gasId}/users`);
};

