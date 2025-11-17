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
router.get("/adminList/users", adminListController.adminListUsers);
router.get("/adminList/gasstations", adminListController.adminListGasstations);
router.get("/adminList/products", adminListController.adminListProducts);
router.get("/profile", profileController.profile);
router.get("/createtaskdata/:userId", createTaskDataController.taskPageOne);
router.get("/taskHistorie", taskHistorieController.taskHistorie);

router.get("/admin/gasstation/:id", modifyGasstationController.adminGasstation);
router.post("/admin/gasstation/:id/update", modifyGasstationController.updateGasstation);
router.post("/admin/gasstation/:id/delete", modifyGasstationController.deleteGasstation);

router.get("/admin/user/:id", profileController.adminUser);
router.post("/admin/user/:id/update", profileController.updateUser);
router.post("/admin/user/:id/delete", profileController.deleteUser);


module.exports = router;
