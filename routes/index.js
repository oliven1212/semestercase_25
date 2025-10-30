const express = require("express");
const HomeController = require("../controllers/HomeController");

const router = express.Router();

router.get("/task", HomeController.createTask);
router.get('/', HomeController.login);
router.get('/gasstation', HomeController.gasstation);

module.exports = router;
