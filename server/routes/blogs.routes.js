const   express         = require("express"),
        router          = express.Router(),
        middleware      = require("../middleware"),
        blogsController = require("../controllers/blogs.controller");


router.get("/", blogsController.findAllBlogs);
router.post("/", blogsController.createBlog);
router.get("/:blogID", blogsController.showBlog);
router.get("/:blogID/edit", blogsController.findOneBlog);
router.put("/:blogID", blogsController.editBlog);
router.delete("/:blogID", blogsController.deleteBlog);

module.exports = router;