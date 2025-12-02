const bcrypt = require("bcrypt");

const saltRounds = 10;

async function hashPassword(password, saltRounds) {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}
async function comparePassword(password, hashedpassword) {
  await bcrypt.compare(password, hashedpassword).then(function (hash) {
    return hash;
  });
}

module.exports = { hashPassword, comparePassword };
