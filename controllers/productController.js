const { Product, Unit } = require('../models');

exports.adminProducts = async (req, res) => {
    const product = await Product.findAll({
        attributes: ['id', 'name', 'unitId'],
        where: { id: req.params.productId },

        raw: true,
    });

    const units = await Unit.findAll({ 
        attributes: ['id','name'],
        raw: true 
    });

    res.render("admin/modifyProduct", {
        product: product,
        units: units,
        currentPath: req.originalUrl.replace(/\/$/, ""),
        lastPage: '/admin/products',
    });
};

exports.updateProduct = async (req, res) => {
    await Product.updateProduct({
        id: req.params.productId,
        name: req.body.name,
        unitId: req.body.unitId,
    });
    
    res.redirect(`/admin/products/${req.params.productId}`);
};

exports.deleteProduct = async (req, res) => {
    await Product.destroy({
        where: { id: req.params.productId,}, 
    });
    
    if(req.body.link){
        res.redirect(req.body.link);
    }else{
        res.redirect(`/admin/products`);
    }
};