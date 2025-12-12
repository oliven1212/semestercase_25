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

const upload = require("../utility/multer");

const authRoutes = require("../routes/auth");
const router = express.Router();

//Universelle routes
router.get("/", HomeController.login); //Loginside
router.get("/profile", profileController.profile); //Viser profil baseret på id
//router.post("/login", HomeController.loginSend);


//Personale routes
router.get("/createTask", createTaskController.createTask); //Start på task
router.post("/createTask", createTaskController.logStart); //Send id med videre
router.get("/createtaskdata/:taskId", createTaskDataController.taskPageOne); //Tilføj billeder og/eller produktopfyldningner
router.post("/uploadTaskImage/:taskId",createTaskDataController.uploadMiddleware, createTaskDataController.imageUpload); //Tilføj til Pictures table
router.get("/createtaskdata/:taskId/images", createTaskDataController.viewImages); //Se uploadede billeder
router.post("/createtaskdata/:taskId/images", createTaskDataController.deleteImage,); //Slet uploadede billeder
router.post("/uploadTask/:taskId", createTaskDataController.uploadTasks); //Tilføj til ProductTask table og send mail til ejer
router.get("/completedTask/:taskId", createTaskDataController.completedTask); //Færdig med task upload


//Stationsejer routes
router.get("/gasstation", gasController.gasstation); //Ejer's tankstationer
router.get("/taskHistorie/:taskId", taskHistorieController.taskHistorie); //Tasks på den valgte tankstation
router.get("/showTaskImages/:imageUuid",createTaskDataController.showTaskImages); //Side som mail til ejer fører til


//Admin routes
router.get("/admin", adminListController.adminMain);

router.get("/admin/gasstations", adminListController.adminListGasstations);
router.get("/admin/gasstations/:gasId",modifyGasstationController.adminGasstation,);
router.post("/admin/gasstations/new", adminListController.newGasstationStart);
router.post("/admin/gasstations/:gasId/update", modifyGasstationController.updateGasstation,);
router.post("/admin/gasstations/:gasId/delete",modifyGasstationController.deleteGasstation,);
router.get("/admin/gasstations/:gasId/tasks", modifyGasstationController.tasks)

router.get("/admin/users", adminListController.adminListUsers);
router.get("/admin/users/:userId", profileController.adminUser);
router.post("/admin/users/new", adminListController.newUserStart);
router.post("/admin/users/:userId/update", profileController.updateUser);
router.post("/admin/users/:userId/delete", profileController.deleteUser);
router.get("/admin/users/:userId/tasks", profileController.tasks);
router.get("/admin/users/:userId/gasstations", profileController.gasstations);
router.post("/admin/users/:userId/gasstations/new",profileController.linkGasstation);


router.get("/admin/products", adminListController.adminListProducts);
router.get("/admin/products/:productId", productController.adminProducts);
router.post("/admin/products/new", adminListController.newProductStart);
router.post("/admin/products/:productId/update", productController.updateProduct);
router.post("/admin/products/:productId/delete", productController.deleteProduct);

router.get("/admin/tasks", adminListController.adminListTasks);
router.get("/admin/tasks/:taskId", taskController.adminTasks);
router.post("/admin/tasks/:taskId/update", taskController.updateTask);
router.post("/admin/tasks/:taskId/delete", taskController.deleteTask);
router.post("/admin/tasks/:taskId/delete/image", taskController.deleteImage);

router.use("/", authRoutes);
module.exports = router;
