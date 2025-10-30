exports.index = ('/exports', (req, res) => {
  res.render("home/index", {
    title: "Welcome",
    message: "Hello from MVC!",
  });
});
exports.task = ('/task', (req, res) => {
  res.render("home/task", {
    title: "Welcome",
    message: "Hello from MVC!",
  });
});

exports.login = ('/login', (req, res) => {
  res.render("home/login", {
    title: 'login',
    message: 'skriv dit brugernavn og kodeord her'
  });
});
