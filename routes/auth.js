const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const {
  ensureAuthenticated,
  allowRoles,
  redirectToRoleHome,
} = require("../middleware/authentication");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const { User } = require("../models");
const loginController = require("../controllers/loginController");
const { resetPasswordEmail } = require("../utility/resetPassword");

// GET login page -> fjern isNotAuthenticated (ellers kan ingen nå login)
router.get("/", (req, res) => {
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
      return res.redirect("/");
    }

    const user = await User.findOne({
      where: { email },
      attributes: ["id", "email", "password", "roleId"],
      raw: true,
    });

    if (!user) {
      req.session.error = "Forkert email eller adgangskode.";
      return res.redirect("/");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      req.session.error = "Forkert email eller adgangskode.";
      return res.redirect("/");
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
    return res.redirect("/");
  }
});
//================ password reset routes======================
router.get("/login/forgotPassword", (req, res) => {
  const error = req.session ? req.session.error : null;
  const success = req.session ? req.session.success : null;
  if (req.session) {
    delete req.session.error;
    delete req.session.success;
  }
  res.render("home/forgotPassword", { error, success });
});
router.post("/login/forgotPassword", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    req.session.error = "mail needs to be filled";
    return res.redirect("/login/forgotPassword");
  }
  //hvad er unscoped
  const user = await User.unscoped().findOne({ where: { email } });
  if (!user) {
    req.session.error = "user does not exist";
    return res.redirect("/login/forgotPassword");
  }
  //generate uuid token
  const uniqueId = uuidv4();

  user.passwordCodeUuid = uniqueId;
  user.passwordExpired = new Date(Date.now() + 3600000); // 1 hour from now
  await user.save();

  const emailSent = await resetPasswordEmail(email, uniqueId);
  if (emailSent) {
    req.session.success =
      "et link til at nulstille din adgangskode er sendt til din email";
  } else {
    req.session.error = "der skete en fejl ved afsendelse af email";
  }
  res.redirect("/login/forgotPassword");
});

router.get("/login/reset/:uniqueId", async (req, res) => {
  const { uniqueId } = req.params;

  const user = await User.unscoped().findOne({
    where: {
      passwordCodeUuid: uniqueId,
      passwordExpired: {
        [Op.gt]: new Date(),
      },
    },
  });
  if (!user) {
    req.session.error = "password reset línket er ugyldigt eller udløbet";
    return res.redirect("/login/forgotPassword");
  }
  const error = req.session ? req.session.error : null;
  if (req.session) delete req.session.error;
  res.render("home/changePassword", { uniqueId, error });
});

router.post("/login/reset/:uniqueId", async (req, res) => {
  const { uniqueId } = req.params;
  const { password, confirmPassword } = req.body;
  if (!password || !confirmPassword) {
    req.session.error = "both input fields must be filled";
    return res.redirect(`/login/reset/${uniqueId}`);
  }
  if (password !== confirmPassword) {
    req.session.error = "password need to be identical";
    return res.redirect(`/login/reset/${uniqueId}`);
  }
  if (password.length < 8) {
    req.session.error = "password need to be at least 8 characters long";
    return res.redirect(`/login/reset/${uniqueId}`);
  }

  const user = await User.unscoped().findOne({
    where: {
      passwordCodeUuid: uniqueId,
      passwordExpired: {
        [Op.gt]: new Date(),
      },
    },
  });
  if (!user) {
    req.session.error = "Password link is invalid or expired";
    return res.redirect("/login/forgotPassword");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;
  user.passwordCodeUuid = null;
  user.passwordExpired = null;
  await user.save();

  req.session.success = "your password has been updated u can now login";
  res.redirect("/");
});

router.get("/login/reset", loginController.changePassword);
//router.get("/login/forgotPassword", loginController.forgotPassword);
router.get("/login/emailconfirm/true", loginController.passEmailConfirmed);
router.post("/login/logout", loginController.logout);
router.get("/login/logout", loginController.logout);
module.exports = router;
