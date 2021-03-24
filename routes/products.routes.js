const   express             = require("express"),
        router              = express.Router(),
        middleware          = require("../middleware"),
        Product             = require("../models/product.model");

router.get("/", (req, res)=>{
    Product.find({}, (err, products)=>{
        if(err){
            res.render("dbProblem");
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
            res.render("dbProblem");
        }else{
            product.author = {
                id: req.user._id,
                firstname: req.user.firstname,
                lastname: req.user.lastname
            };
            if(req.body.rent === "on"){
                product.sell = false;
            }else{
                product.sell = true;
            }
            if(req.body.state === "on"){
                product.state = true;
            }else{
                product.state = false;
            }
            product.save();
            req.flash("success", "Product added successfully!");
            res.redirect("/products");
        }
    });
});

router.get("/:id", (req, res)=>{
    Product.findById(req.params.id, (err, foundProduct)=>{
        if(err){
            res.render("dbProblem");
        }else{
            res.render("products/show", {product: foundProduct});
        }
    });
});

router.get("/:id/edit",middleware.checkProductOwnership, (req, res)=>{
    Product.findById(req.params.id, (err, product)=>{
        if(err){
            res.render("dbProblem");
        }else{
            res.render("products/edit", {product: product});
        }        
    });
});

router.put("/:id",middleware.checkProductOwnership, (req, res)=>{
    Product.findByIdAndUpdate(req.params.id, req.body.product, (err, product)=>{
        if (err){
            res.render("dbProblem");
        }else{
            if(req.body.rent === "on"){
                product.sell = false;
            }else{
                product.sell = true;
            }
            if(req.body.state === "on"){
                product.state = true;
            }else{
                product.state = false;
            }
            product.save();
            req.flash("success", "Product updated successfully!");
            res.redirect(`/products/${req.params.id}`);
        }
    });
});

router.delete("/:id",middleware.checkProductOwnership, (req, res)=>{
    Product.findByIdAndRemove(req.params.id, (err)=>{
        if(err){
            res.render("dbProblem");
        }else{
            req.flash("success", "Product Deleted successfully!");
            res.redirect("/products");
        }
    });
});

module.exports = router;