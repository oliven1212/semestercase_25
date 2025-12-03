//middleware

function isNotAuthenticated(req, res, next) {
  console.log(req.session);
  if (!req.session.user) {
    return res.redirect("/home/login");
  }
  next();
}
function rolePermission(req, res, next) {
  console.log("-------------------------");
  console.log(req.session);
  if (req.session && req.session.user.roleId === 1) {
    res.redirect("/admin/users");
  } else if (req.session && req.session.user.roleId === 2) {
    res.redirect("/gasstation");
  } else {
    res.redirect("/createtask");
  }
  next();
}

module.exports = {
  rolePermission,
  isNotAuthenticated,
};
