//middleware

function isNotAuthenticated(req, res, next) {
  console.log(req.session.user);
  if (!req.session.user) {
    return res.redirect("/home/login");
  }
  next();
}
function rolePermission(req, res, next) {
  const user = req.session.user;
  console.log(req.session.user);
  if (!user) {
    return res.redirect("/home/login");
  }

  // redirect baseret på rolle
  if (user.role === 1) {
    return res.redirect("/admin/main");
  }
  console.log("admin");

  if (user.role === 2) {
    return res.redirect("/gasstation");
  }
  console.log("ejer");
  if (user.role === 3) {
    return res.redirect("/createTask");
  }
  console.log("rengøringmedarbejder");
  // fallback
  return res.redirect("/");
}

module.exports = {
  rolePermission,
  isNotAuthenticated,
};
