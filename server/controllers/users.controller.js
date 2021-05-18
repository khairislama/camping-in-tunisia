const USER      = require("../models/user.model");
const CAMPGROUND = require("../models/campground.model");

module.exports.findOneUser = async (req, res) => {
    try {
        let user = await USER.findById(req.params.userID);
        return res.status(200).json({
            success: true,
            user: user
        })
    }catch(err) {
        return res.status(400).json({
            success: false,
            error : err
        })
    }
}

module.exports.editUser = async (req, res) =>{
    try{
        const {
            firstname,
            lastname,
            bio,
            from,
            adresse,
            situation,
            profession,
            phoneNumber
        } = req.body;
        const userImage = req.file.fieldname + "-" + req.file.originalname;
        const query = {
            firstname,
            lastname, 
            bio,
            from,
            adresse,
            situation,
            profession,
            phoneNumber, 
            userImage, 
        }
        let updatedUser = await USER.updateOne({_id : req.params.userID},query);
        return res.status(200).json({
            success: true,
            user : user
        })
    }catch(err){
        return res.status(400).json({
            success: false,
            error : err
        })
    }
}

module.exports.addBookmark = async (req, res) =>{
    try {        
        const currentUser = await USER.findById(req.params.userID);
        const campgroundToBookmark = await CAMPGROUND.findById(req.params.campgroundID);
        const alreadyBookmarked = currentUser.bookmarks.indexOf(campgroundToBookmark._id);
        if (alreadyBookmarked > -1) {
            currentUser.bookmarks.splice(alreadyBookmarked, 1);
        }else{
            currentUser.bookmarks.push(campgroundToBookmark);
        }        
        currentUser.save()
        return res.status(200).json({
            success: true
        })
    }catch(err){
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

module.exports.getBookmarks = async (req, res) =>{
    try {        
        const currentUser = await USER.findById(req.params.userID)
        return res.status(200).json({
            success: true,
            bookmarks: currentUser.bookmarks
        })
    }catch(err){
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}