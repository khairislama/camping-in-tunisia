const CAMPGROUND        = require("../models/campground.model");

module.exports.findAllCampgrounds = async (req, res) => {
    try {
        const campgrounds = await CAMPGROUND.find();
        return res.status(200).json({
            success: true,
            campgrounds: campgrounds
        })
    }catch{
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
        let name = req.body.name;
        let image = req.body.image;
        let description = req.body.description;
        let price = req.body.price;
        let author = {
            id: req.user._id,
            firstname: req.user.firstname,
            lastname: req.user.lastname
        }
        const campgroundModel = new CAMPGROUND({
            name,
            price, 
            image, 
            description, 
            author
        })
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
            image: req.body.image,
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