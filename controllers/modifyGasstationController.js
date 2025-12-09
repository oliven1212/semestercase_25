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
    console.log(tasks);
    const contentMap = tasks.map(task => {
        return {
            name: `${task['Tasks.startTime']}`,
            contact: `${task['Branch.name']}, ${task.address} ${task['Branch.name']}w`,
            link: `/admin/gasstations/${task['Gasstations.id']}`,
            originalUrl: req.originalUrl.replace(/\/$/, "")
        };
    });

    res.render("admin/adminTaskHistorie", {
        title: `Relaterede tankstationer til`,
        content: contentMap,
        lastPage: `.`,
    });
};