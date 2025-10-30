
exports.task = ('/task', (req, res) => {
  res.render("home/task", {
    title: "Welcome",
    message: "Hello from MVC!",
  });
});

exports.login = ('/', (req, res) => {
  res.render("home/login", {
    title: 'login',
    message: 'skriv dit brugernavn og kodeord her'
  });
});

exports.gasstation = ('/gasstation', (req, res) => {
  res.render("home/gasstation", {
    title: 'gasstation',
    message: 'Vælg tankstation'
  });
});
