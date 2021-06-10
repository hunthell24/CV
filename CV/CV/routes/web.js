const Express = require("Express");
const CVController = require("../controller/CVContrller")
const router = Express.router();

router.get("/", CVController.getHomePage);

router.get("/Admin", CVController,GetAdminPage);

router.get("/Admin/json", CVController, GetJson);

router.get("/Create-CV", CVController, PostCV);

router.get("/DB_Delete", CVController.DBDelete)

router.get("/Add-CV", CVController, GetCV)

module.exports = router;