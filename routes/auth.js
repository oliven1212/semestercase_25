const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const {
  ensureAuthenticated,
  allowRoles,
  redirectToRoleHome,
} = require("../middleware/authentication");
const { User } = require("../models");

// GET login page -> fjern isNotAuthenticated (ellers kan ingen nå login)
router.get("/login", (req, res) => {
  const error = req.session ? req.session.error : null;
  if (req.session) delete req.session.error;
  res.render("home/login", { error });
});

// Admin - protected: kræver autentifikation + rolle 1
router.get("/admin", ensureAuthenticated, allowRoles([1]), (req, res) => {
  // render admin-side direkte (ikke redirect til samme route)
  res.render("admin", { user: req.session.user });
});

// Gasstation - kun rolle 2
router.get("/gasstation", ensureAuthenticated, allowRoles([2]), (req, res) => {
  res.render("gasstation", { user: req.session.user });
});

// CreateTask - kun rolle 3
router.get("/createTask", ensureAuthenticated, allowRoles([3]), (req, res) => {
  res.render("createTask", { user: req.session.user });
});

// POST login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      req.session.error = "Email og adgangskode skal udfyldes.";
      return res.redirect("/login");
    }

    const user = await User.findOne({
      where: { email },
      attributes: ["id", "email", "password", "roleId"],
      raw: true,
    });

    if (!user) {
      req.session.error = "Forkert email eller adgangskode.";
      return res.redirect("/login");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      req.session.error = "Forkert email eller adgangskode.";
      return res.redirect("/login");
    }

    // gem bruger i session (uden password)
    req.session.user = {
      id: user.id,
      email: user.email,
      role: user.roleId, // matcher middleware som tjekker req.session.user.role
    };

    console.log("session sat:", req.session.user);

    // Redirect baseret på rolle (OPKALD IKKE rolePermission direkte)
    switch (req.session.user.role) {
      case 1:
        return res.redirect("/admin");
      case 2:
        return res.redirect("/gasstation");
      case 3:
        return res.redirect("/createTask");
      default:
        return res.redirect("/");
    }
  } catch (error) {
    console.error("login fejl:", error);
    req.session.error = "Der opstod en fejl, prøv igen.";
    return res.redirect("/login");
  }
});

module.exports = router;
