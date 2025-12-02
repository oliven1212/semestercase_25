const { User } = require("../models");
const {
  hashPassword,
  comparePassword,
  saltRounds,
} = require("../utility/auth");

const bcrypt = require("bcrypt");

exports.login = (req, res) => {
  res.render("home/login", {
    title: "login",
    message: "skriv dit brugernavn og kodeord her",
  });
};
exports.loginSend = async (req, res) => {
  const { email, password, roleId } = req.body;
  console.log(req.body);

  comparePassword(password, await hashPassword(password, saltRounds));
  const user = await User.findOne({
    where: { email: email, password: password, roleId: roleId },
  });

  console.log(email, password, user);
};
