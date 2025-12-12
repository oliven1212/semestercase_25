const session = require("express-session");
const { User } = require("../models");
const { comparePassword, saltRounds } = require("../utility/auth");
const { resetPasswordEmail } = require("../utility/resetPassword");

const bcrypt = require("bcrypt");
const { sendTaskEmail } = require("../utility/taskEmail");

exports.login = (req, res) => {
  res.render("home/login", {
    title: "Login",
    message: "Log ind",
    hideReturn: true,
    hideProfile: true,
  });
};
exports.loginSend = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  const user = await User.findOne({
    where: { email: email },
    attributes: ["id", "email", "password"],
    raw: true,
  });
  console.log(email, user.password, user);
};

exports.changePassword = async (req, res) => {
  /* TODO:
    const {v4: uuidv4} = require('uuid');

    const uniqueId = uuidv4();

    const user = await User.findOne({
        where: {email: toEmail},
        raw: true
    });

    await sendTaskEmail(emailData['Pictures.id'], emailData['Gasstation.Users.email']);*/

  res.render("home/changePassword", {});
};

exports.forgotPassword = async (req, res) => {
  res.render("home/forgotPassword", {});
};
exports.passEmailConfirmed = async (req, res) => {
  res.render("home/passEmailConfirmed", {});
};

exports.logout = (req, res) => {
  // Hvis der er en session, så ødelæg den
  console.log("logout");
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        console.error("Fejl ved session.destroy:", err);
        // Send bruger til forside selv ved fejl
        return res.status(500).redirect("/");
      }
      // Fjern session-cookie i browseren.
      res.clearCookie("connect.sid", { path: "/" });
      console.log("session fjernet");
      return res.redirect("/");
    });
  } else {
    // Ingen session => bare redirect
    console.log("redirect");
    return res.redirect("/");
  }
};
