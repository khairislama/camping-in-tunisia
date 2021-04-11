const   express                 = require("express"),
        router                  = express.Router(),
        middleware              = require("../middleware"),
        campgroundController    = require("../controllers/campgrounds.controller");


router.get("/", campgroundController.findAllCampgrounds);
router.post("/",middleware.isLoggedIn, campgroundController.createCampground);
router.get("/:campgroundID", campgroundController.findOneCampground);
router.get("/:campgroundID/edit", campgroundController.findOneCampground);
router.put("/:campgroundID", campgroundController.editCampground);
router.delete("/:campgroundID", campgroundController.deleteCampground);

module.exports = router;