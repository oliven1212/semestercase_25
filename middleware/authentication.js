//middleware

function isAuthenticated(req, res, next) {
  if (!req.session.user) {
    return res.redirect("/home/login");
  }
  next();
}
function isNotAuthenticated(req, res, next) {
  if (req.session.user.roleId === "1") {
    return res.redirect("/admin/list");
  }
  if (req.session.user.roleId === "2") {
    return res.redirect("/gasstation");
  } else {
    return res.redirect("/createtask");
  }
  next();
}

module.exports = {
  isAuthenticated,
  isNotAuthenticated,
};
