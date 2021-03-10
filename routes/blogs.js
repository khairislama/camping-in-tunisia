const   express         = require("express"),
        router          = express.Router(),
        middleware      = require("../middleware"),
        Blog            = require("../models/blog");

//INDEX - show all blogs 
router.get("/", (req, res)=>{
    Blog.find({}, (err, blogs)=>{
        if(err){
            res.render("dbProblem");
        }else{
            res.render("blogs/index", {blogs: blogs});
        }
    });
});

//NEW - show form to create new blog
router.get("/new",middleware.isLoggedIn, (req, res)=>{
    res.render("blogs/new");
});

//CREATE - add new blog to DB
router.post("/",middleware.isLoggedIn, (req, res)=>{
    Blog.create(req.body.blog, (err, blog)=>{
        if(err){
            res.render("dbProblem");
        }else{
            blog.author = {
                id: req.user._id,
                firstname: req.user.firstname,
                lastname: req.user.lastname
            };
            blog.save();
            req.flash("success", "Blog added successfully!");
            res.redirect("/blogs");
        }
    });
});

//SHOW - shows more info about one blog
router.get("/:id", (req, res)=>{
    Blog.findById(req.params.id).populate("comments").exec((err, blog)=>{
        if(err){
            res.render("dbProblem");
        }else{
            res.render("blogs/show", {blog: blog});
        }
    });
});

//Edit - show the edit form
router.get("/:id/edit",middleware.checkBlogOwnership, (req, res)=>{    
    Blog.findById(req.params.id, (err, blog)=>{
        if(err){
            res.render("dbProblem");
        }else{
            res.render("blogs/edit", {blog: blog});
        }        
    });
});

//Update - update blog in DB
router.put("/:id",middleware.checkBlogOwnership, (req, res)=>{
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, blog)=>{
        if (err){
            res.render("dbProblem");
        }else{
            req.flash("success", "Blog updated successfully!");
            res.redirect(`/blogs/${req.params.id}`);
        }
    });
});

//Destroy - delete blog from DB
router.delete("/:id",middleware.checkBlogOwnership, (req, res)=>{
    Blog.findByIdAndRemove(req.params.id, (err)=>{
        if(err){
            res.render("dbProblem");
        }else{
            req.flash("success", "Blog Deleted successfully!");
            res.redirect("/blogs");
        }
    });
});

module.exports = router;