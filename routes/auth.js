const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const router = express.Router();
const {
  isNotAuthenticated,
  rolePermission,
} = require("../middleware/authentication");
const { User } = require("../models");

//get auth login
router.get("/login", isNotAuthenticated, (req, res) => {
  res.render("home/login", {
    error: req.session.error,
  });
});

//admin-only
router.get("/admin/list", rolePermission, (req, res) => {
  res.redirect("admin/users", { user: req.session.user });
});
router.get("/gasstation", rolePermission, (req, res) => {
  res.render("/gasstation", { user: req.session.user });
});
router.get("/createTask", rolePermission, (req, res) => {
  res.render("/createTask", { user: req.session.user });
});

//Post/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //validering
    if (!email || !password) {
      req.session.error = "Email og adgangskode skal udfyldes;";
      return res.render("/login");
    }
    console.log(password);
    //find bruger
    const user = await User.findOne({
      where: { email: email },
      attributes: ["id", "email", "password", "roleId"],
      raw: true,
    });
    console.log(user);
    if (!user) {
      req.session.error = "forkert email eller adgangskode";
      return res.render("login");
    }
    //verificere adgangskode
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      req.session.error = "forkert email eller adgangskode";
      return res.redirect("/");
    }
    //gem bruger data i session (uden adgangskode)
    req.session.user = {
      id: user.id,
      email: user.email,
      role: user.roleId,
    };
    console.log("?????????????????");
    console.log(req.session.user);
    res.redirect("/createTask");
  } catch (error) {
    console.error("login fejl:", error);
    req.session.error = "der opstod en fejl prøv igen.";
    res.redirect("/");
  }
});

module.exports = router;
