const   express                 = require("express"),
        router                  = express.Router(),
        middleware              = require("../middleware"),
        campgroundController    = require("../controllers/campgrounds.controller");


router.get("/", campgroundController.findAllCampgrounds);
router.post("/",middleware.isLoggedIn, campgroundController.createCampground);
router.get("/:campgroundID", campgroundController.findOneCampground);
router.get("/:campgroundID/edit",middleware.checkCampgroundOwnership, campgroundController.findOneCampground);
router.put("/:id",middleware.checkCampgroundOwnership, campgroundController.editCampground);
router.delete("/:id",middleware.checkCampgroundOwnership, campgroundController.deleteCampground);

module.exports = router;