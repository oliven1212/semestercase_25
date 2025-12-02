const { User } = require("../models");
const { hashPassword, comparePassword, saltRounds} = require("../utility/auth");


const bcrypt = require("bcrypt");

exports.login = (req, res) => {
  res.render("home/login", {
    title: "login",
    message: "skriv dit brugernavn og kodeord her",
  });
};
exports.loginSend = async (req, res) => {
  const { email, password } = req.body;
  console.log(password);

  comparePassword(password, await hashPassword(password, saltRounds));
  const user = await User.findOne({
    where: { email: email, password: password },
  });

  console.log(email, password, user);
};
