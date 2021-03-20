const middlewareObj = require("../middleware");

const   express         = require("express"),
        router          = express.Router({mergeParams: true}),
        middleware      = require("../middleware"),
        User            = require("../models/user");

router.get("/", (req, res)=>{
    User.findById(req.params.id, (err, user)=>{
        if(err){
            res.render("dbProblem");
        }else{
            res.render("users/index", {user: user});
        }
    });
});

router.get("/edit", middleware.checkIfCurrentUser, (req, res)=>{
    User.findById(req.params.id, (err, user)=>{
        if(err){
            res.render("dbProblem");
        }else{
            res.render("users/edit", {user: user});
        }
    });
});

router.put("/",middleware.checkIfCurrentUser, (req, res)=>{
    
});

module.exports = router;