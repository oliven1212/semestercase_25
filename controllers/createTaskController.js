const { Task } = require('../models');
exports.createTask = async (req, res) => {
    res.render("home/createTask", {
        title: "start log",
        message: "Hello from MVC!",
        name: [{ fornavn: 'Steve' }, { fornavn: 'Lone' }, { fornavn: 'Jan' }],
        tankstation: [{ branch: 'Shell' }, { branch: 'OK Plus' }, { branch: 'Q8' }]
    });
};


