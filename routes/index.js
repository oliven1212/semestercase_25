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
const { allowRoles } = require("../middleware/authentication");
const authRoutes = require("../routes/auth");
const router = express.Router();

//Universelle routes
router.get("/", HomeController.login); //Loginside
router.get("/profile", allowRoles([1,2,3]), profileController.profile); //Viser profil baseret på id
//router.post("/login", HomeController.loginSend);


//Personale routes
router.get("/createTask", allowRoles([1,3]), createTaskController.createTask); //Start på task
router.post("/createTask", allowRoles([1,3]), createTaskController.logStart); //Send id med videre
router.get("/createtaskdata/:taskId", allowRoles([1,3]), createTaskDataController.taskPageOne); //Tilføj billeder og/eller produktopfyldningner
router.post("/uploadTaskImage/:taskId", allowRoles([1,3]), createTaskDataController.uploadMiddleware, createTaskDataController.imageUpload); //Tilføj til Pictures table
router.get("/createtaskdata/:taskId/images", allowRoles([1,3]), createTaskDataController.viewImages); //Se uploadede billeder
router.post("/createtaskdata/:taskId/images", allowRoles([1,3]), createTaskDataController.deleteImage,); //Slet uploadede billeder
router.post("/uploadTask/:taskId", allowRoles([1,3]), createTaskDataController.uploadTasks); //Tilføj til ProductTask table og send mail til ejer
router.get("/completedTask/:taskId", allowRoles([1,3]), createTaskDataController.completedTask); //Færdig med task upload


//Stationsejer routes
router.get("/gasstation", allowRoles([1,2]), gasController.gasstation); //Ejer's tankstationer
router.get("/taskHistorie/:taskId", allowRoles([1,2]), taskHistorieController.taskHistorie); //Tasks på den valgte tankstation
router.get("/showTaskImages/:imageUuid", createTaskDataController.showTaskImages); //Side som mail til ejer fører til


//Admin routes
router.get("/admin", allowRoles([1]), adminListController.adminMain);

router.get("/admin/gasstations", allowRoles([1]), adminListController.adminListGasstations);
router.get("/admin/gasstations/:gasId", allowRoles([1,2]), modifyGasstationController.adminGasstation,);
router.post("/admin/gasstations/new", allowRoles([1]), adminListController.newGasstationStart);
router.post("/admin/gasstations/:gasId/update", allowRoles([1]), modifyGasstationController.updateGasstation,);
router.post("/admin/gasstations/:gasId/delete", allowRoles([1]), modifyGasstationController.deleteGasstation,);
router.get("/admin/gasstations/:gasId/tasks", allowRoles([1,2]), modifyGasstationController.tasks);
router.get("/admin/gasstations/:gasId/users", allowRoles([1,2]), modifyGasstationController.users);
router.get("/admin/gasstations/:gasId/users/new", allowRoles([1,2]), modifyGasstationController.linkUser);


router.get("/admin/users", allowRoles([1]), adminListController.adminListUsers);
router.get("/admin/users/:userId", allowRoles([1]), profileController.adminUser);
router.post("/admin/users/new", allowRoles([1]), adminListController.newUserStart);
router.post("/admin/users/:userId/update", allowRoles([1]), profileController.updateUser);
router.post("/admin/users/:userId/delete", allowRoles([1]), profileController.deleteUser);
router.get("/admin/users/:userId/tasks", allowRoles([1]), profileController.tasks);
router.get("/admin/users/:userId/gasstations", allowRoles([1]), profileController.gasstations);
router.post("/admin/users/:userId/gasstations/new", allowRoles([1]), profileController.linkGasstation);


router.get("/admin/products", allowRoles([1]), adminListController.adminListProducts);
router.get("/admin/products/:productId", allowRoles([1]), productController.adminProducts);
router.post("/admin/products/new", allowRoles([1]), adminListController.newProductStart);
router.post("/admin/products/:productId/update", allowRoles([1]), productController.updateProduct);
router.post("/admin/products/:productId/delete", allowRoles([1]), productController.deleteProduct);

router.get("/admin/tasks", allowRoles([1]), adminListController.adminListTasks);
router.get("/admin/tasks/:taskId", allowRoles([1]), taskController.adminTasks);
router.post("/admin/tasks/:taskId/update", allowRoles([1]), taskController.updateTask);
router.post("/admin/tasks/:taskId/delete", allowRoles([1]), taskController.deleteTask);
router.post("/admin/tasks/:taskId/delete/image", allowRoles([1]), taskController.deleteImage);

router.use("/", authRoutes);
module.exports = router;
