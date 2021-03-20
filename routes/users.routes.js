const   express         = require("express"),
        router          = express.Router({mergeParams: true}),
        userController  = require("../controllers/users.controller");

router.get("/", userController.findOneUser);

module.exports = router;