const   Campground          = require("../models/campground.model"),
        Product             = require("../models/product.model"),
        Comment             = require("../models/comment.model"),
        jwt                 = require("jsonwebtoken"),
        Blog                = require("../models/blog.model");

var middlewareObj = {};

//middleware
middlewareObj.isLoggedIn = function(req, res, next){
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({errorMessage: "Unathorized"});
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch(err) {
        console.error(err);
        return res.status(401).json({errorMessage: "Unathorized"});
    }
}

middlewareObj.checkCampgroundOwnership = async function(req, res, next){
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({errorMessage: "Unathorized"});
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        await Campground.findById(req.params.campgroundID, (err, campground)=>{
            if (err) return res.status(401).json({errorMessage: "Unathorized"});
            if (campground.author.id.equals(verified.id)) return next();
            return res.status(401).json({errorMessage: "Unathorized"});
        });
    }catch(err){
        console.error(err);
        return res.status(401).json({errorMessage: "Unathorized"});
    }
}

middlewareObj.checkCommentOwnership = async function(req, res, next){
    try{
        const token = req.cookies.token;
        if (!token) return res.status(401).json({errorMessage: "Unathorized"});
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        await COMMENT.findById(req.params.commentID, (err, comment)=>{
            if (err) return res.status(401).json({errorMessage: "Unathorized"});
            if (comment.author.id.equals(verified.id)) return next();            
        });
        return res.status(401).json({errorMessage: "Unathorized"});
    }catch(err){
        console.error(err);
        return res.status(401).json({errorMessage: "Unathorized"});
    }
}

middlewareObj.checkProductOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Product.findById(req.params.id, (err, product)=>{
            if(err){
                req.flash("error", "Product not found");
                res.redirect("back");
            }else{
                if(product.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash("error", "You don\t have permission to do that");
                    res.redirect(`/products/${req.params.id}`);
                }
            }
        });
    }else{
        req.flash("error", "you need to be logged in to do that!");
        res.redirect("/login");
    }
}

middlewareObj.checkIfCurrentUser = function(req, res, next){
    if (req.isAuthenticated()){
        if (req.params.id == req.user._id){
            next();
        }else{
            req.flash("error", "You don\t have permission to do that");
            res.redirect(`/users/${req.params.id}`);
        }
    }else{
        req.flash("error", "you need to be logged in to do that!");
        res.redirect("/login");
    }
}

middlewareObj.checkBlogOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Blog.findById(req.params.id, (err, blog)=>{
            if(err){
                req.flash("error", "Blog not found");
                res.redirect("back");
            }else{
                if(blog.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash("error", "You don\t have permission to do that");
                    res.redirect(`/blogs/${req.params.id}`);
                }
            }
        });
    }else{
        req.flash("error", "you need to be logged in to do that!");
        res.redirect("/login");
    }
}

module.exports = middlewareObj;