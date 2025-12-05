// middleware/authentication.js

function ensureAuthenticated(req, res, next) {
  console.log("ensureAuthenticated session:", !!(req.session && req.session.user));
  if (!req.session || !req.session.user) {
    // brug /login konsistent
    return res.redirect("/");
  }
  next();
}

/**
 * allowRoles([1,2]) -> middleware som KUN lader disse roller passere (kalder next).
 * Ellers redirect eller 403.
 */
function allowRoles(allowedRoles) {
  return function (req, res, next) {
    if (!req.session || !req.session.user) {
      return res.redirect("/");
    }
    const role = req.session.user.role;
    console.log("allowRoles - user role:", role, "allowed:", allowedRoles);
    if (allowedRoles.includes(role)) {
      return next();
    }
    // Hvis ikke tilladt:
    return res.status(403).send("Adgang nægtet"); // eller redirect til '/' hvis UI foretrækkes
  };
}

/**
 * Optional: redirect users to their role-home (kald den kun på fx '/')
 * Denne må ALDRIG bruges på de destinations-routes som den redirecter til.
 */
function redirectToRoleHome(req, res, next) {
  if (!req.session || !req.session.user) {
    return res.redirect("/");
  }
  const role = req.session.user.role;
  if (role === 1) return res.redirect("/admin");
  if (role === 2) return res.redirect("/gasstation");
  if (role === 3) return res.redirect("/createTask");
  return res.redirect("/");
}

module.exports = {
  ensureAuthenticated,
  allowRoles,
  redirectToRoleHome
};
