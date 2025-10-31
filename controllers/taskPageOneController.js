const { User, Gasstation, GasstationUser, task, Unit, Product} = require('../models');

exports.taskPageOne = async (req, res) => {
    const users = await User.findAll();
    const newUsers = users.map(user => user.toJSON());
    const gasstation2 = await Gasstation.findOne({ where: { id: 2 } });
    const user2 = await User.findByPk(2);
    const product = await Product.findOne({ where: {id: 1}});
    const product2 = await Product.findOne({ where: {id: 2}});
    const product3 = await Product.findOne({ where: {id: 3}});
    const product4 = await Product.findOne({ where: {id: 4}});
    const unit = await Unit.findOne({where:{id:1}})

    res.render("home/taskPageOne", {
        title: 'Log din rengøring',
        users: newUsers,
        gasstation2: gasstation2.toJSON(),
        user2: user2.toJSON(),
        product: product.toJSON(),
        product2: product2.toJSON(),
        product3: product3.toJSON(),
        product4: product4.toJSON(),
        unit: unit.toJSON(),

    });
};