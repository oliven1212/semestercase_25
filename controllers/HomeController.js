
exports.createTask = (req, res) => {
  res.render("home/createTask", {
    title: "Welcome",
    message: "Hello from MVC!",
    tasks: models.tasks,
  });
};

exports.login = (req, res) => {
  res.render("home/login", {
    title: 'login',
    message: 'skriv dit brugernavn og kodeord her'
  });
};

exports.gasstation = (req, res) => {
  res.render("home/gasstation", {
    title: 'gasstation',
    message: 'Vælg tankstation'
  });
};
