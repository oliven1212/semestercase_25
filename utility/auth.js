const bcrypt = require("bcrypt");

const saltRounds = 10;

async function hashPassword(password, saltRounds) {
  // const hashedPassword = await bcrypt.hash(password, saltRounds);
  return await bcrypt.hash(password, saltRounds);
}
async function comparePassword(password, hashedpassword) {
  return await bcrypt.compare(password, hashedpassword);
}

module.exports = { hashPassword, comparePassword, saltRounds };
