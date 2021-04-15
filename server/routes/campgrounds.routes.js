const   express                 = require("express"),
        router                  = express.Router(),
        middleware              = require("../middleware"),
        campgroundController    = require("../controllers/campgrounds.controller");

const multer            = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, '../client/public/uploads/campgrounds');
    },
    filename: (req, file, cb) =>{
        cb(null, file.fieldname + "-" + file.originalname);
    }
})
const upload = multer({storage});


router.get("/", campgroundController.findAllCampgrounds);
router.post("/",middleware.isLoggedIn, upload.single("campgroundImages"), campgroundController.createCampground);
router.get("/:campgroundID", campgroundController.findOneCampground);
router.get("/:campgroundID/edit",middleware.checkCampgroundOwnership, campgroundController.findOneCampground);
router.put("/:campgroundID",middleware.checkCampgroundOwnership, campgroundController.editCampground);
router.delete("/:campgroundID",middleware.checkCampgroundOwnership, campgroundController.deleteCampground);
router.get("/:campgroundID/owner", campgroundController.isOwner);

module.exports = router;