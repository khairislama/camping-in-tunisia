// PACKAGE IMPORTATION
const   express             = require("express"),
        router              = express.Router(),
        passport            = require("passport"),
        indexController     = require("../controllers/index.controller")
        User                = require("../models/user.model");

// ***** AUTH ROUTES *****

//handling sign up logic
router.post("/register", indexController.createUser);

//handling login logic
router.post("/login",passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}));

//logout logic
router.get("/logout", indexController.logoutUser);

module.exports = router;