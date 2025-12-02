const bcrypt = require("bcrypt");

const saltRounds = 10;

// async function hashPassword(password, saltRounds) {
//   // const hashedPassword = await bcrypt.hash(password, saltRounds);
//   return await bcrypt.hash(password, saltRounds);
// }
async function comparePassword(password, hashedPassword, saltRounds) {
  return await bcrypt.compare(password, hashedPassword, saltRounds);
}

module.exports = { comparePassword, saltRounds };
