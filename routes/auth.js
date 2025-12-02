const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const {
  isNotAuthenticated,
  isAuthenticated,
} = require("../middleware/authentication");
const { User } = require("../models");

//get auth login
router.get("/login", isNotAuthenticated, (res, req) => {
  res.render("login", {
    error: req.session.error,
  });
});

//admin-only
router.get("/admin/list", isAuthenticated(1), (req, res) => {
  res.render("admin/list", { user: req.session.user });
});
router.get("/gasstation", isAuthenticated(2), (req, res) => {
  res.render("/gasstation", { user: req.session.user });
});
router.get("/createTask", isAuthenticated(3), (req, res) => {
  res.render("/createTask", { user: req.session.user });
});

//Post/auth/login
router.post("/login", isNotAuthenticated, isAuthenticated, async (req, res) => {
  try {
    const { email, password } = req.body;
    //validering
    if (!email || !password) {
      req.session.error = "Email og adgangskode skal udfyldes;";
      return res.render("/login");
    }
    //find bruger
    const user = User.find((user) => user.email === email);
    if (!user) {
      req.session.error = "forkert email eller adgangskode";
      return res.render("login");
    }
    //verificere adgangskode
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      req.session.error = "forkert email eller adgangskode";
      return res.redirect("/login");
    }
    //gem bruger data i session (uden adgangskode)
    req.session.user = {
      id: user.id,
      email: user.email,
      role: user.roleId,
    };
    res.redirect("/createTask");
  } catch (error) {
    console.error("login fejl:", error);
    req.session.error = "der opstod en fejl prøv igen.";
    res.redirect("/login");
  }
});
