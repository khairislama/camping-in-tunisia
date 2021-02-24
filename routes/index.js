// PACKAGE IMPORTATION
const   express             = require("express"),
        router              = express.Router(),
        passport            = require("passport"),
        User                = require("../models/user");

// root route
router.get("/", (req, res)=>{
    res.render("landing");
});

// ***** AUTH ROUTES *****
// show register form
router.get("/register", (req, res)=>{
    res.render("register");
});

//handling sign up logic
router.post("/register", (req, res)=>{
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user)=>{
        if(err){
            //req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, ()=>{
            //req.flash("success", `Welcome to Tunisia-camping ${user.email}`);
            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.save();
            res.redirect("/");
        });
    });
});

//show the login form
router.get("/login", (req,res)=>{
    res.render("login");
});

//handling login logic
router.post("/login",passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}));

//logout logic
router.get("/logout", (req, res)=>{
    req.logout();
    //req.flash("success", "logged you out!");
    res.redirect("/");
});


// MODULE EXPORTATION
module.exports = router;