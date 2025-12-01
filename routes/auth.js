const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const {
  isNotAuthenticated,
  isAuthenticated,
} = require("../middleware/authentication");
//get auth login
router.get("/login", isNotAuthenticated, (res, req) => {
  res.render("login", {
    error: req.session.error,
  });
});

//Post/auth/login
router.post("/login", isNotAuthenticated, async (req, res) => {
  try {
    const { email, password } = req.body;
    //validering
    if (!email || !password) {
      req.session.error = "Email og adgangskode skal udfyldes;";
      return res.render("/login");
    }
    //find bruger
    const user = users.find((u) => u.email === email);
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
      userName: user.firstname + user.lastname,
      email: user.email,
    };
    res.redirect("/createTask");
  } catch (error) {
    console.error("login fejl:", error);
    req.session.error = "der opstod en fejl prøv igen.";
    res.redirect("/login");
  }
});
