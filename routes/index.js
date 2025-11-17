const express = require("express");
const HomeController = require("../controllers/HomeController");
const gasController = require("../controllers/gasController");
const createTaskController = require("../controllers/createTaskController");
const adminListController = require("../controllers/adminListController");
const profileController = require("../controllers/profileController");
const createTaskDataController = require("../controllers/createTaskDataController");
const taskHistorieController = require("../controllers/taskHistorieController");
const modifyGasstationController = require("../controllers/modifyGasstationController");

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

router.get("/admin/gasstations/:id", modifyGasstationController.adminGasstation);
router.post("/admin/gasstations/:id/update", modifyGasstationController.updateGasstation);
router.post("/admin/gasstations/:id/delete", modifyGasstationController.deleteGasstation);

router.get("/admin/users/:id", profileController.adminUser);
router.post("/admin/users/:id/update", profileController.updateUser);
router.post("/admin/users/:id/delete", profileController.deleteUser);


module.exports = router;
