const { User, Gasstation, GasstationUser, Task, Unit, Product, Picture, ProductTask, Branch, City } = require('../models');
const upload = require('../multer');
const path = require('path');
const { gasstation } = require('./gasController');

exports.uploadMiddleware = upload.fields([
    { name: 'beforePicture', maxCount: 100 },
    { name: 'afterPicture', maxCount: 100 }
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
        where: { id: 1 }, // skal ændres!!!!!!!!!!!
        raw: true
    });

    console.log(task);
    console.log("jajajajajajajajajjaajajaj");




    //console.log(product);



    res.render("home/taskPageOne", {
        title: 'Log din rengøring',
        user: user,
        task: task,
        product: product,

    });

};



exports.uploadTasks = async (req, res) => {
    try {
        const { gasstationId, userId, products } = req.body;
        const beforePictures = req.files['beforePicture'] || []; // || betyder ELLER
        const afterPictures = req.files['afterPicture'] || [];

        // Valider input
        if (beforePictures.length === 0 || afterPictures.length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Både før og efter billeder er påkrævet'
            });
        }
        const parsedProducts = JSON.parse(products); //Kan eventuelt undlades
        if (parsedProducts.length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Mindst ét produkt er påkrævet'
            });
        }
        // Opret Task 
        /* const task = await Task.create({
             gasstationId: gasstationId,
             userId: userId,
             status: 'completed',
             completedAt: new Date()
         }); */

        // Gem før-billeder
        for (let file of beforePictures) {
            await Picture.pictureUpload({
                id: file.filename + Date.now(),
                taskId: req.params.taskId,
                filename: file.filename,
                beforeAfter: false,
                productImage: false //Skal fjernes
            });
        }

        // Gem efter-billeder
        for (let file of afterPictures) {
            await Picture.pictureUpload({
                id: file.filename + Date.now(),
                taskId: req.params.taskId,
                filename: file.filename,
                beforeAfter: true,
                productImage: false //Skal fjernes
            });
        }

        // Gem produkter 
        for (let product of parsedProducts) {
            ProductTask.create({
                taskId: task.id,
                productId: product.id,
                amount: product.amount
            });
        }

        return res.redirect(`/completedTask/${task.id}`);

    } catch (error) {
        console.error('Submit task fejl:', error);
        res.status(500).json({
            success: false,
            error: 'Kunne ikke gemme task'
        });
    }

};
