const { User } = require("../models");
const bcrypt = require("bcrypt");

const saltRounds = 10;

async function hashPassword(password, saltRounds) {
  const hashedPassword = await bcrypt.hash(password,saltRounds);
  return hashedPassword;
};
async function comparePassword(password, hashedpassword){
  await bcrypt.compare(password, hashedpassword).then(function(hash) {
    return hash;
  });
}

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
 

  // console.log(email, password, user);
};
