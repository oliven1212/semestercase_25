const express = require("express");
const HomeController = require("../controllers/HomeController");
const gasController = require("../controllers/gasController");

const router = express.Router();

router.get("/createTask", HomeController.createTask);
router.get('/', HomeController.login);
router.get('/gasstation', gasController.gasstation);

module.exports = router;
