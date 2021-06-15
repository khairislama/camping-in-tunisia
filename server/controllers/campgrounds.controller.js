const CAMPGROUND        = require("../models/campground.model");
const COMMENT           = require("../models/comment.model");
const USER              =require("../models/user.model");
const jwt               = require("jsonwebtoken");

module.exports.findAllCampgrounds = async (req, res) => {
    try {        
        const campgrounds = await CAMPGROUND.find();
        return res.status(200).json({
            success: true,
            campgrounds: campgrounds
        })
    }catch(err){
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

module.exports.findOneCampground = async (req, res) => {
    try {
        let campground = await CAMPGROUND.findById(req.params.campgroundID).populate("comments").exec();
        return res.status(200).json({
            success: true,
            campground: campground
        })
    }catch(err) {
        return res.status(400).json({
            success: false,
            error : err
        })
    }
}

module.exports.createCampground = async (req, res) => {
    try {
        const token = req.cookies.token;
        jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
            req.user = user;
        })
        const userInfo = await USER.findOne({_id: req.user.id});
        const {
            name,
            description,
            price,
        } = req.body;
        const nImages = req.files
        var campgroundImages = []
        for (let i = 0 ; i < nImages.length ; i++)            
            campgroundImages = [...campgroundImages, req.files[i].fieldname + "-" + req.files[i].originalname]
        const campgroundModel = new CAMPGROUND({
            name,
            price, 
            campgroundImages, 
            description, 
            author: {
                id: userInfo._id,
                firstname: userInfo.firstname,
                lastname: userInfo.lastname
            }
        })
        userInfo.nCampgrounds += 1
        userInfo.save()
        const savedCampgroundModel = await campgroundModel.save();
        return res.status(200).json({
            success: true,
            campground: savedCampgroundModel
        })
    }catch(err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

module.exports.editCampground = async (req, res) => {
    try {
        let query = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description            
        }
        let updatedCampground = await CAMPGROUND.updateOne({_id : req.params.campgroundID},query);
        return res.status(200).json({
            success: true,
            campground : updatedCampground
        })
        }catch(err) {
            return res.status(400).json({
                success: false,
                error : err
            })
        }
}

module.exports.deleteCampground = async (req, res) => {
    try {
        const campground = await CAMPGROUND.findById(req.params.campgroundID)
        campground.comments.forEach(async (commentID)=>{
            let comment = await COMMENT.findById(commentID)
            await comment.remove()
        })
        const authorID = campground.author.id
        const userInfo = await USER.findById(authorID)
        userInfo.nCampgrounds -= 1
        await userInfo.save()
        await CAMPGROUND.findByIdAndRemove(req.params.campgroundID)
        return res.status(200).json({
            success: true,
            response: "campground deleted sucessfully!"
        })
    }catch(err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

module.exports.isOwner = async (req, res)=>{
    try {
        const token = req.cookies.token;
        if (!token) return res.json(false);
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        await CAMPGROUND.findById(req.params.campgroundID, (err, campground)=>{
            if (err) return res.json(false);
            if (campground.author.id.equals(verified.id))   return res.send(true);
            return res.json(false);
        });
    } catch(err) {
        res.json(false);
    }
}