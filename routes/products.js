const   express             = require("express"),
        router              = express.Router(),
        middleware          = require("../middleware"),
        Product             = require("../models/product");

router.get("/", (req, res)=>{
    Product.find({}, (err, products)=>{
        if(err){
            console.log(err);
        }else{
            res.render("products/index", {products: products});
        }        
    });
});

router.get("/new",middleware.isLoggedIn , (req, res)=>{
    res.render("products/new");
});

router.post("/",middleware.isLoggedIn, (req, res)=>{
    Product.create(req.body.product, (err, product)=>{
        if(err){
            req.flash("error", "Oops! There is a Database problem!");
            res.redirect("/products");
        }else{
            product.author = {
                id: req.user._id,
                firstname: req.user.firstname,
                lastname: req.user.lastname
            };
            product.save();
            req.flash("success", "Products added successfully");
            res.redirect("/products");
        }
    });
});

router.get("/:id", (req, res)=>{
    Product.findById(req.params.id).populate("comments").exec((err, foundProduct)=>{
        if(err){
            req.flash("error", "Oops! There is a Database problem!");
            res.redirect("/products");
        }else{
            res.render("products/show", {product: foundProduct});
        }
    });
});

router.get("/:id/edit",middleware.checkProductOwnership, (req, res)=>{
    Product.findById(req.params.id, (err, product)=>{
        if(err){
            req.flash("error", "Product not found");
            res.redirect("back");
        }else{
            res.render("products/edit", {product: product});
        }        
    });
});

router.put("/:id",middleware.checkProductOwnership, (req, res)=>{
    Product.findByIdAndUpdate(req.params.id, req.body.product, (err, product)=>{
        if (err){
            req.flash("error", "Product not found");
            res.redirect("back");
        }else{
            req.flash("success", "Product updated successfully");
            res.redirect(`/products/${req.params.id}`);
        }
    });
});

router.delete("/:id",middleware.checkProductOwnership, (req, res)=>{
    Product.findByIdAndRemove(req.params.id, (err)=>{
        if(err){
            req.flash("error", "Product not found");
            res.redirect("back");
        }else{
            req.flash("success", "Product Deleted successfully");
            res.redirect("/products");
        }
    });
});

module.exports = router;