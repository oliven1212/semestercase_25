const express = require("express");
const HomeController = require("../controllers/HomeController");
const gasController = require("../controllers/gasController");
const createTaskController = require("../controllers/createTaskController");

const router = express.Router();

router.get("/createTask", createTaskController.createTask);
router.get('/', HomeController.login);
router.get('/gasstation', gasController.gasstation);

module.exports = router;
