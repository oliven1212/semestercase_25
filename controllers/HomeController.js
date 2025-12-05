const { User } = require("../models");
const { comparePassword, saltRounds } = require("../utility/auth");

const bcrypt = require("bcrypt");

exports.login = (req, res) => {
  res.render("home/login", {
    title: "login",
    message: "skriv dit brugernavn og kodeord her",
  });
};
exports.loginSend = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  console.log("llllllllllllllllllllll");

  const user = await User.findOne({
    where: { email: email },
    attributes: ["id", "email", "password"],
    raw: true,
  });
  console.log(email, user.password, user);
};
exports.changePassword = async (req, res) => {
  res.render("home/changePassword", {});
};
