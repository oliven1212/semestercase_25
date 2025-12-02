const bcrypt = require("bcrypt");

const saltRounds = 10;

// async function hashPassword(password, saltRounds) {
//   // const hashedPassword = await bcrypt.hash(password, saltRounds);
//   return await bcrypt.hash(password, saltRounds);
// }
async function comparePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

module.exports = { comparePassword, saltRounds };
