const express = require("express");
const HomeController = require("../controllers/HomeController");
const gasController = require("../controllers/gasController");
const createTaskController = require("../controllers/createTaskController");
const adminListController = require("../controllers/adminListController");
const profileController = require("../controllers/profileController");
const taskPageOneController = require("../controllers/taskPageOneController");
const taskHistorieController = require("../controllers/taskHistorieController");

const router = express.Router();

router.get("/createTask", createTaskController.createTask);
router.get("/", HomeController.login);
router.get("/gasstation", gasController.gasstation);
router.get("/adminList", adminListController.adminList);
router.get("/profile", profileController.profile);
router.get("/taskPageOne", taskPageOneController.taskPageOne);
router.get("/taskHistorie", taskHistorieController.taskHistorie);

module.exports = router;
