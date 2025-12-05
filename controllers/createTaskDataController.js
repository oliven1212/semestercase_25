const {
    User,
    Gasstation,
    GasstationUser,
    Task,
    Unit,
    Product,
    Picture,
    ProductTask,
    Branch,
    City
} = require('../models');
const upload = require('../multer');
const path = require('path');
const crypto = require('crypto');
const {gasstation} = require('./gasController');
const {sendTaskEmail} = require('../taskEmail');

exports.uploadMiddleware = upload.fields([
    {name: 'beforePicture', maxCount: 100},
    {name: 'afterPicture', maxCount: 100}
]);


exports.taskPageOne = async (req, res) => {
    const task = await Task.findByPk(req.params.taskId, {
        include: [{
            model: Gasstation,
            include: [{
                model: Branch,
            }, {
                model: City,
            }],
        }],
        raw: true
    });
    //Her skal tilføjes taskId så gasstation og user bliver sendt med


    const product = await Product.findAll({
        include: {
            model: Unit,
        },
        raw: true
    });

    const user = await User.findAll({
        where: {id: 1}, // skal ændres!!!!!!!!!!!
        raw: true
    });

    res.render("home/taskPageOne", {
        title: 'Log din rengøring',
        user: user,
        task: task,
        product: product,

    });

};


exports.uploadTasks = async (req, res) => {
    const body = req.body;
    const taskId = req.params.taskId;

    let products;
    if (body.productIdContainer) {
        //convert product data into object arrays
        if (typeof (body.productIdContainer) == 'string') {
            products = [{
                id: parseInt(body.productIdContainer),
                amount: parseFloat(body.productAmountContainer)
            }];
        } else {
            products = body.productIdContainer.map((item, i) => ({
                id: parseInt(item),
                amount: parseFloat(body.productAmountContainer[i])
            }));
        }

        if (products.length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Mindst ét produkt er påkrævet'
            });
        }

        // Gem produkter 
        for (let product of products) {
            ProductTask.create({
                taskId: taskId,
                productId: product.id,
                amount: product.amount
            });
        }


    }
    const emailData = await Task.findOne({
        where: {id: taskId},
        attributes: [],
        include: [
            {
                model: Picture,
                attributes: ['id']
            },
            {
                model: Gasstation,
                attributes: [],
                include: [{
                    model: User,
                    attributes: ['email'],
                    through: {
                        where: {
                            isOwner: 1
                        },
                        attributes: [],
                    },
                }],
            }
        ],
        raw: true
    });
    await sendTaskEmail(emailData['Pictures.id'], emailData['Gasstation.Users.email']);
    return res.redirect(`/completedTask/${taskId}`);
};


exports.completedTask = async (req, res) => {
    //Hent task data, and do it very fancy
    res.render("home/completedTask", {
        taskId: req.params.taskId,
        user: req.user,
        address: req.address,


    });
};

exports.imageUpload = async (req, res) => {
    const taskId = req.params.taskId;
    const {v4: uuidv4} = require('uuid');

    // Hvis der allerede findes billeder for denne task, genbrug samme uuid (fra first picture.id)
    // ellers generér en ny uuid
    const existingPicture = await Picture.findOne({
        where: {taskId: taskId},
        attributes: ['id'],
        raw: true
    });

    const uniqueId = existingPicture && existingPicture.id ? existingPicture.id : uuidv4();

    if (req.files['beforePicture']) {
        const beforePictures = req.files['beforePicture']; // || betyder ELLER
        // Gem før-billeder
        for (let file of beforePictures) {
            await Picture.create({
                id: uniqueId, //MAKE UUID!!!
                taskId: taskId,
                filename: file.filename,
                beforeAfter: 0,
                productImage: 0 //Skal fjernes
            });
        }
    }

    if (req.files['afterPicture']) {
        const afterPictures = req.files['afterPicture'];
        // Gem efter-billeder
        for (let file of afterPictures) {
            await Picture.create({
                id: uniqueId,
                taskId: taskId,
                filename: file.filename,
                beforeAfter: 1,
                productImage: 0 //Skal fjernes
            });
        }
    }
    return res.redirect(`/createtaskdata/${taskId}`);
};


exports.completedTask = async (req, res) => {
    //Hent task data, and do it very fancy
    const task = await Task.findByPk(req.params.taskId, {
        include: [{
            model: Gasstation,
            include: [{
                model: Branch,
            }, {
                model: City,
            },
                {model: User}],

        }],
        raw: true
    });


    res.render("home/completedTask", {
        task: task,

    });
};
exports.viewImages = async (req, res) => {
    const taskId = req.params.taskId;
    const pictures = await Picture.findAll({
        where: {taskId: taskId},
        raw: true
    });

    res.render("home/taskImages", {
        pictures: pictures,
        lastPage: '.'
    });
};

exports.deleteImage = async (req, res) => {
    await Picture.destroy({
        where: {
            filename: req.body.fileName,
            taskId: req.params.taskId,
        },
    });
    res.redirect(`/createtaskdata/${req.params.taskId}/images`);
};

exports.showTaskImages = async (req, res) => {
    const images = await Picture.findAll(
        {
            where: {id: req.params.imageUuid},
            include: {model: Task,},

            raw: true,
        });


    if (!images || images.length === 0) {
        return res.status(404).render("home/error",
            {title: 'Ikke fundet', message: 'Ingen billeder fundet'});
    }

    const taskLink = images[0]['Task.taskLink'];
    const fortyEightHoursAgo = new Date(Date.now() - 48 * 60 * 60 * 1000);
    console.log('ioæjfewnkkjhblsgrhbkjgsrnbkjhgrts');
    console.log(images[3]);
    console.log('_________');
    console.log(taskLink);

    if (taskLink === 1 || images[0].createdAt < fortyEightHoursAgo) {
        return res.render("home/showTaskImages",
            {
                title: 'Dette link er allerede brugt eller er udløbet',
                message: 'Dette link er allerede brugt eller er udløbet',
                content: 'Kontakt venligst din administrator for at få et nyt link',
            }
            ,);
    }
    else {
        res.render("home/showTaskImages",
            {
                title: 'Rengøringslog',
                message: 'Her kan du se informationerne fra din tankstations rengøring',
                content: 'Hej og velkommen til rengøringsloggen for din tankstation. Her kan du finde detaljer om de seneste rengøringsopgaver udført på din station, inklusive billeder før og efter rengøringen samt de anvendte produkter.',
                images: images
            });
    };
    // Update the taskLink in the database
    /*await Task.update(
        { taskLink: 1 },
        { where: { id: images[0]['Task.id'] } }
    );*/

};