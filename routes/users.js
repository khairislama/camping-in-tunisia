const   express         = require("express"),
        router          = express.Router({mergeParams: true}),
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

module.exports = router;