const express = require("express");
const HomeController = require("../controllers/HomeController");

const router = express.Router();

router.get("/", HomeController.index);
router.get("/task", HomeController.task);
router.get('/login', HomeController.login)

module.exports = router;
