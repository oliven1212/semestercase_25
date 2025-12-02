//middleware

function isNotAuthenticated(req, res, next) {
  if (!req.session.user) {
    return res.redirect("/home/login");
  }
  next();
}
function rolePermission(req, res, next) {
  console.log("-------------------------");
  console.log(req.session);
  if (req.session.user.roleId === 1) {
    return res.redirect("/admin/list");
  } else if (req.session.user.roleId === 2) {
    return res.redirect("/gasstation");
  } else {
    return res.redirect("/createtask");
  }
  next();
}

module.exports = {
  rolePermission,
  isNotAuthenticated,
};
