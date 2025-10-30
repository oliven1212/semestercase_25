

exports.login = (req, res) => {
  res.render("home/login", {
    title: 'login',
    message: 'skriv dit brugernavn og kodeord her'
  });
};

