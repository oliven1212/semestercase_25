const express = require("express");
const HomeController = require("../controllers/HomeController");
const gasController = require("../controllers/gasController");
const createTaskController = require("../controllers/createTaskController");
const adminListController = require("../controllers/adminListController");
const profileController = require("../controllers/profileController");
const taskPageOneController = require("../controllers/taskPageOneController");
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
router.get("/taskPageOne", taskPageOneController.taskPageOne);
router.get("/taskHistorie", taskHistorieController.taskHistorie);
router.get("/admin/gasstation/:id", modifyGasstationController.modifyGasstation);
router.post("/admin/gasstation/:id/update", modifyGasstationController.updateGasstation);
router.post("/admin/gasstation/:id/delete", modifyGasstationController.deleteGasstation);

module.exports = router;
