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
    return res.redirect(`/completedTask/${taskId}`);
};


exports.completedTask = async (req, res) => {
    //Hent task data, and do it very fancy
    res.render("home/completedTask", {

    });
};

exports.imageUpload = async (req, res) => {
    console.log(`_____________________________________________________________?`);
    const taskId = req.params.taskId;

    if (req.files['beforePicture']) {
        const beforePictures = req.files['beforePicture']; // || betyder ELLER
        // Gem før-billeder
        for (let file of beforePictures) {
            await Picture.create({
                id: `123456789123456789123456789123456789`, //MAKE UUID!!!
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
                id: `123456789123456789123456789123456789`,
                taskId: taskId,
                filename: file.filename,
                beforeAfter: 1,
                productImage: 0 //Skal fjernes
            });
        }
    }
console.log(`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAh`);
    return res.redirect(`/completedTask/${taskId}`);
};


exports.completedTask = async (req, res) => {
    //Hent task data, and do it very fancy
    res.render("home/completedTask", {

    });
};
exports.viewImages = async (req, res) => {
    const taskId = req.params.taskId;
    const pictures = await Picture.findAll({
        where: { taskId: taskId },
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