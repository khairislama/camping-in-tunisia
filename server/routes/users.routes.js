const   express         = require("express"),
        router          = express.Router({mergeParams: true}),
        middleware      = require("../middleware")
        userController  = require("../controllers/users.controller");

const multer            = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, '../client/public/uploads/users');
    },
    filename: (req, file, cb) =>{
        cb(null, file.fieldname + "-" + file.originalname);
    }
})
const upload = multer({storage});


router.get("/", userController.findOneUser);
router.put("/", middleware.checkIfCurrentUser, upload.single("userImage"), userController.editUser);

module.exports = router;