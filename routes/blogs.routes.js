const   express         = require("express"),
        router          = express.Router(),
        middleware      = require("../middleware"),
        blogsController = require("../controllers/blogs.controller");


router.get("/", blogsController.findAllBlogs);
router.post("/", middleware.isLoggedIn, blogsController.createBlog);
router.get("/:blogID", blogsController.showBlog);
router.get("/:blogID/edit",middleware.checkBlogOwnership, blogsController.findOneBlog);
router.put("/:blogID", middleware.checkBlogOwnership, blogsController.editBlog);
router.delete("/:blogID",middleware.checkBlogOwnership, blogsController.deleteBlog);

module.exports = router;