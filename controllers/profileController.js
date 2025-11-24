const { User, Gasstation, Role, City, Task, Branch } = require('../models');

exports.profile = async (req, res) => {
    const currentUser = await User.findByPk(3,{
        raw: true
    });

    const allUserIds = await User.getAllUserIds();
    //console.log(allUserIds);

    const temp = await User.findAll(
        { 
            attributes: ['id', 'firstName', 'lastName'],
            where: { id: 3 },
            include: [{
                attributes: ['id', 'address'],
                model: Gasstation,
                through: {/* attributes: []*/}
            }],
            raw: true
          }
    );
    console.log(temp);
    

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
console.log(user);
    res.render("home/modifyUser", {
        title: 'login',
        user: user,
        cities: cities,
        roles: roles,
        currentPath: req.originalUrl,
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
    
    res.redirect(`/admin/gasstations/${req.params.userId}`);
};

exports.deleteUser = async (req, res) => {
    await User.destroy({
        where: { id: req.params.userId,},
    });
    
    res.redirect(`/admin/users`);
};



exports.adminHistorie = async (req, res) => {
    const user = await User.findOne({
        where: { id: req.params.userId },
        attributes: ['firstName','lastName'],
        raw: true,
    });
    console.log(user);
    const relatedTasks = await Task.findAll({
        where:{userId: req.params.userId,},
        attributes:['id'],
        include:[
            {
                model: Gasstation,
                attributes:['address'],
                include:[{
                    model: Branch,
                    attributes:['name']
                },
                {
                    model: City,
                    attributes:['name']
                }
            ],
            },
        ],

        raw: true,
    });
    const contentMap = relatedTasks.map(task => ({
        name: `${task['Gasstation.Branch.name']}`,
        contact: `${task['Gasstation.City.name']}, ${task['Gasstation.address']}`,
        link: `/admin/tasks/${task.id}`,
        originalUrl: req.originalUrl,
        editLink: `temp`,
        deleteLink: `ttemp`,
    }));

    res.render("home/adminTaskHistorie", {
        user: user,
        content: contentMap,
    });
};