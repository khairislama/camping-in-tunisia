const   Campground          = require("../models/campground"),
        Product             = require("../models/product"),
        Comment             = require("../models/comment"),
        Blog                = require("../models/blog");
var middlewareObj = {};

//middleware
middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that!");
    res.redirect("/login");
}

middlewareObj.checkCommentOwnership = function(req, res, next){
    if (req.isAuthenticated()){
        Comment.findById(req.params.comment_id, (err, comment)=>{
            if (err){
                req.flash("error", "Comment not found");
                res.redirect("back");
            }else{
                if (comment.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash("error", "You don\'t have permission to do that");
                    res.redirect(`/campgrounds/${req.params.id}`);
                }
            }
        });  
    }else{
        req.flash("error", "You need to be logged in to comment on a post!");
        res.redirect("/login");
    }
}

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if (req.isAuthenticated()){
        Campground.findById(req.params.id, (err, campground)=>{
            if (err){
                req.flash("error", "Campground not found");
                res.redirect("back");
            }else{
                if (campground.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash("error", "you don\'t have permission to do that");
                    res.redirect(`/campgrounds/${req.params.id}`);
                }
            }
        });  
    }else{
        req.flash("error", "you need to be logged in to do that!");
        res.redirect("/login");
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