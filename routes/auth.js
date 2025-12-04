const express = require("express");
// const session = require("express-session");
const bcrypt = require("bcrypt");
const router = express.Router();
const {
  isNotAuthenticated,
  rolePermission,
} = require("../middleware/authentication");
const { User } = require("../models");

// GET login page
router.get("/login", isNotAuthenticated, (req, res) => {
  const error = req.session.error;
  delete req.session.error; // ryd fejlen efter visning
  res.render("home/login", { error });
});

// protected routes (defineres en gang)
router.get("/admin/main", rolePermission, (req, res) => {
  // hvis du vil vise en template:
  // res.render("admin/users", { user: req.session.user });

  // eller hvis du vil redirecte til en anden route/URL:
  return res.redirect("/admin/main");
});

router.get("/gasstation", rolePermission, (req, res) => {
  // render view navngivet uden foranstillet slash
  res.render("gasstation", { user: req.session.user });
});

router.get("/createTask", rolePermission, (req, res) => {
  res.render("createTask", { user: req.session.user });
});

// POST login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      req.session.error = "Email og adgangskode skal udfyldes.";
      return res.redirect("/login"); // redirect for at vise login siden med fejl
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
    if (user && user.password === password) {
      req.session.user = {
        id: user.id,
        email: user.email,
        role: user.roleId,
      };
    }
    console.log(
      "this is our session after we saved user in session:",
      req.session.user,
    );
    // redirect efter succesfuldt login
    console.log("this is our user:", req.session.user);
    console.log(
      rolePermission("our user has the role :", req.session.user.role),
    );
    return res.redirect("/admin/main"); // eller "/admin/list" afhængigt af rolle
  } catch (error) {
    console.error("login fejl:", error);
    req.session.error = "Der opstod en fejl, prøv igen.";
    return res.redirect("/login");
  }
});

module.exports = router;
