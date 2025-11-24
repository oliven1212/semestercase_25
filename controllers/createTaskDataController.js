const { User, Gasstation, GasstationUser, task, Unit, Product, Picture} = require('../models');
const multer = require('multer');
const path = require('path');


exports.taskPageOne = async (req, res) => {
    const users = await User.findAll();
    const newUsers = users.map(user => user.toJSON());
    const gasstation2 = await Gasstation.findOne({ where: { id: 2 } });
    const user2 = await User.findByPk(2);

    const product = await Product.findAll({
        include: {
            model: Unit,
        },
        raw: true
    });
    console.log(product);

    

    res.render("home/taskPageOne", {
        title: 'Log din rengøring',
        users: newUsers,
        gasstation2: gasstation2.toJSON(),
        user2: user2.toJSON(),
        product: product,

    });
    
};



exports.uploadTasks = async (req, res) => {
    const taskId = req.body.taskId;
        const uploadedPictures = [];

        // Loop gennem alle uploadede filer
        for (let file of req.files) {
            // Tjek fieldname for at bestemme før/efter
            const beforeAfter = file.fieldname === 'beforePicture';
            
            const picture = await Picture.pictureUpload({
                taskId: taskId,
                filename: file.filename,
                beforeAfter: beforeAfter,
                productImage: false
            });
            
            uploadedPictures.push(picture);
        }
        
    const taskData = {
        taskId: req.params.taskId,
        pictures: [req.files.fileName],
        beforeAfter: beforeAfter,



    };


};
