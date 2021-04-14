const   express                 = require("express"),
        router                  = express.Router(),
        middleware              = require("../middleware"),
        campgroundController    = require("../controllers/campgrounds.controller");


router.get("/", campgroundController.findAllCampgrounds);
router.post("/",middleware.isLoggedIn, campgroundController.createCampground);
router.get("/:campgroundID", campgroundController.findOneCampground);
router.get("/:campgroundID/edit",middleware.checkCampgroundOwnership, campgroundController.findOneCampground);
router.put("/:campgroundID",middleware.checkCampgroundOwnership, campgroundController.editCampground);
router.delete("/:campgroundID",middleware.checkCampgroundOwnership, campgroundController.deleteCampground);
router.get("/:campgroundID/owner", campgroundController.isOwner);

module.exports = router;