const { User, Gasstation, Role, City, Task, Branch, GasstationUser } = require('../models');

exports.profile = async (req, res) => {
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
        currentUser: currentUser,
    });
};







exports.adminUser = async (req, res) => {
    const user = await User.findAll({
        where: { id: req.params.userId },
        include: [
            {
                model: City,
                attributes:['zipCode','name'],
            },
            {
                model: Role,
            },
        ],
        raw: true,
    });
    //retreives all branches so you can pick the one you need
    const cities = await City.findAll({
        attributes:['zipCode','name'],
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
        lastPage: `/admin/users/`,
    });
};

exports.updateUser = async (req, res) => {
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

//---------------------------------------------------------------------------------------------------
    await Gasstation.updateGasstation({
        id: req.params.userId,
        branchId: req.body.branchId,
        address: req.body.address,
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone,
        frontSpace: req.body.frontSpace,
        cityCode: zipCode,
    });
    
    res.redirect(`/admin/users/${req.params.userId}`);
};

exports.deleteUser = async (req, res) => {
    await User.destroy({
        where: { id: req.params.userId,},
    });
    
    if(req.body.link){
        res.redirect(req.body.link);
    }else{
        res.redirect(`/admin/users`);
    }
};

exports.tasks = async (req, res) => {
    const user = await User.findOne({
        where: { id: req.params.userId },
        attributes: ['firstName','lastName'],
        raw: true,
    });
    const relatedTasks = await Task.findAll({
        where:{userId: req.params.userId,},
        attributes:['id','startTime'],
        include:[
            {
                model: Gasstation,
                include:[{
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
    relatedTasks.sort((a, b) =>{
        return new Date(b.startTime) - new Date(a.startTime);
    });
    const contentMap = relatedTasks.map(task => {
        if(task['Gasstation.id']){
            return {
                name: `${task['Gasstation.Branch.name']} - ${task.startTime.toLocaleDateString("en-GB")}`,
                contact: `${task['Gasstation.City.name']}, ${task['Gasstation.address']}`,
                link: `/admin/tasks/${task.id}`,
                originalUrl: req.originalUrl.replace(/\/$/, ""),
            };
        }else{
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
        user: user,
        content: contentMap,
        lastPage: `.`,
    });
};


exports.gasstations = async (req, res) => {
    const user = await User.findOne({
        where: { id: req.params.userId },
        attributes: ['firstName','lastName'],
        raw: true,
    });


    const gasstations = await User.findAll({
        where:{id: req.params.userId,},
        attributes:[],
        include:[{
            model: Gasstation,
            attributes:['id','address'],
            include:[{
                model: City,
                attributes:['name']
            },
            {
                model: Branch,
                attributes:['name'],
            }],
            raw: true,
        }],
        raw: true,
    });
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
        user: user,
        content: contentMap,
        lastPage: `.`,
    });
};