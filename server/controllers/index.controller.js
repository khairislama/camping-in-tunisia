const User          = require("../models/user.model");

module.exports.createUser = async (req, res) => {
    try {
        const newUser = await User.register({username: req.body.username}, req.body.password, (err, user)=>{
            passport.authenticate("local")(req, res, ()=>{
                user.firstname  = req.body.firstname;
                user.lastname   = req.body.lastname;
                user.save();
            });
        });
        return res.status(200).json({
            success: true,
            user: newUser
        })
    }catch{
        return res.status(400).json({
            success: false,
            error: err
        })
    }    
}

module.exports.logoutUser = async (req, res) => {
    req.logout();
}