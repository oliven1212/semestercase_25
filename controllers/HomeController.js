const { User } = require("../models");
const bcrypt = require("bcrypt");

const saltRounds = 10;

function hashPassword(password, saltRounds) {
  return bcrypt.hash("dingdong", saltRounds, function (err, hash) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(hash);
  });
}
function comparePassword(password, hashedpassword) {
  const salt = 10;
  console.log(
    bcrypt.compare(password, hashedpassword, function (err, result) {
      if (err) {
        console.error(err);
        return;
      }
      if (result) {
        console.log("Password is correct");
      } else {
        console.log("Password is incorrect");
      }
    }),
  );
  return bcrypt.compare(password, hashedpassword);
}

exports.login = (req, res) => {
  res.render("home/login", {
    title: "login",
    message: "skriv dit brugernavn og kodeord her",
  });
};
exports.loginSend = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: { email: email, password: password },
  });
  comparePassword(user.password, hashPassword);

  // console.log(email, password, user);
};
