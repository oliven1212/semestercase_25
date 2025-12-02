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
const productController = require("../controllers/productController");
const upload  = require('../multer');


const router = express.Router();

router.get("/createTask", createTaskController.createTask);
router.get("/", HomeController.login);
router.post("/login", HomeController.loginSend);
router.get("/gasstation", gasController.gasstation);
router.get("/admin/users", adminListController.adminListUsers);
router.get("/admin/gasstations", adminListController.adminListGasstations);
router.get("/admin/products", adminListController.adminListProducts);
router.get("/profile", profileController.profile);
router.get("/createtaskdata/:taskId", createTaskDataController.taskPageOne);
router.get("/taskHistorie", taskHistorieController.taskHistorie);


router.post("/uploadTask/:taskId", createTaskDataController.uploadTasks);
router.post("/uploadTaskImage/:taskId", createTaskDataController.uploadMiddleware, createTaskDataController.imageUpload);

router.get("/createtaskdata/:taskId/images", createTaskDataController.viewImages);
router.post("/createtaskdata/:taskId/images", createTaskDataController.deleteImage);

router.get("/completedTask/:taskId", createTaskDataController.completedTask);

router.post("/createTask", createTaskController.logStart);

router.get("/admin/gasstations/:gasId", modifyGasstationController.adminGasstation);
router.post("/admin/gasstations/:gasId/update", modifyGasstationController.updateGasstation);
router.post("/admin/gasstations/:gasId/delete", modifyGasstationController.deleteGasstation);

router.get("/admin/users/:userId", profileController.adminUser);
router.post("/admin/users/:userId/update", profileController.updateUser);
router.post("/admin/users/:userId/delete", profileController.deleteUser);
router.get("/admin/users/:userId/tasks", profileController.tasks);
router.get("/admin/users/:userId/gasstations", profileController.gasstations);

router.get("/admin/products/:productId", productController.adminProducts);
router.post("/admin/products/:productId/update", productController.updateProduct);
router.post("/admin/products/:productId/delete", productController.deleteProduct);

//router.get("/admin/tasks/:taskId", taskController);
//router.post("/admin/tasks/:taskId/update", taskController);
router.post("/admin/tasks/:taskId/delete", taskController.deleteTask);
//router.get("/admin/tasks/:taskId/historie", taskController);


module.exports = router;
