const { Gasstation, Branch, City, Task } = require('../models');

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
        lastPage: '/admin/gasstations',
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
            attributes:['startTime'],
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
    console.log(gasstation);
    const contentMap = tasks.map(task => {
        const date = new Date(task['Tasks.startTime']);
        function padZero(number) {
            return number < 10 ? '0' + number : number;
        }
        return {
            name: `${padZero(date.getDate())}/${padZero(date.getMonth() + 1)}/${date.getFullYear()}`,
            contact: `${task['Branch.name']}, ${task.address}, ${task['City.name']}`,
            link: `/admin/gasstations/${task['Gasstations.id']}`,
            originalUrl: req.originalUrl.replace(/\/$/, "")
        };
    });

    const permission = req.session.user.role == 1;
    res.render("admin/adminTaskHistorie", {
        title: `Relaterede opgaver til`,
        sourceTitle: `{user.lastName}, {user.firstName}`,
        content: contentMap,
        lastPage: `.`,
        admin: permission,
    });
};