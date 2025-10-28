exports.index = (req, res) => {
  res.render("home/index", {
    title: "Welcome",
    message: "Hello from MVC!",
  });
};
exports.rengoring = (req, res) => {
  res.render("home/rengoring", {
    title: "Welcome",
    message: "Hello from MVC!",
  });
};
exports.login = (req, res) => {
  res.render("home/login", {
    title: "Welcome",
    message: "Hello from MVC!",
  });
};