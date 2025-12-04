//middleware
function isNotAuthenticated(req, res, next) {
  console.log("this is our user session in middleware:", req.session.user);
  if (!req.session.user) {
    return res.redirect("/home/login");
  }
  next();
}
function rolePermission(req, res, next) {
  console.log("this is where we find role permission:", req.session.user);
  console.log("this is our user session in rolePermission:", req.session.user);
  if (!req.session.user) {
    return res.redirect("/login");
  }

  // redirect baseret på rolle
  if (req.session.user.role === 1) {
    return res.redirect("/admin/main");
  }
  console.log("admin");

  if (req.session.user.role === 2) {
    return res.redirect("/gasstation");
  }
  console.log("ejer");
  if (req.session.user.role === 3) {
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
