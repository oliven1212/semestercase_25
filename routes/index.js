const express = require("express");
const HomeController = require("../controllers/HomeController");
const gasController = require("../controllers/gasController");
const createTaskController = require("../controllers/createTaskController");
const adminListController = require("../controllers/adminListController");
const profileController = require("../controllers/profileController");
const createTaskDataController = require("../controllers/createTaskDataController");
const taskHistorieController = require("../controllers/taskHistorieController");
const modifyGasstationController = require("../controllers/modifyGasstationController");
const taskController = require("../controllers/tasksController");

const router = express.Router();

router.get("/createTask", createTaskController.createTask);
router.get("/", HomeController.login);
router.get("/gasstation", gasController.gasstation);
router.get("/admin/users", adminListController.adminListUsers);
router.get("/admin/gasstations", adminListController.adminListGasstations);
router.get("/admin/products", adminListController.adminListProducts);
router.get("/profile", profileController.profile);
router.get("/createtaskdata/:userId", createTaskDataController.taskPageOne);
router.get("/taskHistorie", taskHistorieController.taskHistorie);

//router.post("/createTask", createTaskController.logstart);

router.get("/admin/gasstations/:gasId", modifyGasstationController.adminGasstation);
router.post("/admin/gasstations/:gasId/update", modifyGasstationController.updateGasstation);
router.post("/admin/gasstations/:gasId/delete", modifyGasstationController.deleteGasstation);

router.get("/admin/users/:userId", profileController.adminUser);
router.post("/admin/users/:userId/update", profileController.updateUser);
router.post("/admin/users/:userId/delete", profileController.deleteUser);
router.get("/admin/users/:userId/historie", profileController.adminHistorie);

//router.get("/admin/tasks/:taskId", taskController);
//router.post("/admin/tasks/:taskId/update", taskController);
router.post("/admin/tasks/:taskId/delete", taskController.deleteTask);
//router.get("/admin/tasks/:taskId/historie", taskController);


module.exports = router;
