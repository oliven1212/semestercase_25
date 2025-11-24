const multer  = require('multer');
const path = require('path');
const upload = multer();


const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
        cb(null, true);
    } else {
        cb(new Error('Kun billedfiler er tilladt'));
    }
};


module.exports = upload;