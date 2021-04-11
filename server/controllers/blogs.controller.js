const BLOG      = require("../models/blog.model");

module.exports.findAllBlogs = async (req, res) => {
    try {
        const blogs = await BLOG.find();
        return res.status(200).json({
            success: true,
            blogs: blogs
        })
    }catch{
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

module.exports.findOneBlog = async (req, res) => {
    try {
    const blog = await BLOG.findById(req.params.blogID).populate("comments").exec();
    return res.status(200).json({
        success: true,
        blog: blog
    })
    }catch(err) {
        return res.status(400).json({
            success: false,
            error : err
        })
    }
}

module.exports.createBlog = async (req, res) => {
    try {
        const blogModel = new BLOG({
            title: req.body.title ,
            content: req.body.content,
            author: {
                id: req.user._id,
                firstname: req.user.firstname,
                lastname: req.user.lastname
            }
        })
        const savedblogModel = await blogModel.save();
        return res.status(200).json({
            success: true,
            blog: savedblogModel
        })
    }catch(err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

module.exports.editBlog = async (req, res) => {
    try {
    let query = {
        title: req.body.title,
        content: req.body.content        
    }
    let updatedBlog = await BLOG.updateOne({_id : req.params.blogID},query);
    return res.status(200).json({
        success: true,
        blog : updatedBlog
    })
    }catch(err) {
        return res.status(400).json({
            success: false,
            error : err
        })
    }
}

module.exports.deleteBlog = async (req, res) => {
    try {
        await BLOG.findByIdAndRemove(req.params.blogID)
        return res.status(200).json({
            success: true,
            response: "blog deleted sucessfully!"
        })
    }catch(err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}