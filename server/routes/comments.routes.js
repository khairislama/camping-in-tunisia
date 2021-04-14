const   express         = require("express"),
        router          = express.Router({mergeParams: true}),
        middleware      = require("../middleware/index"),
        commentController    = require("../controllers/comments.controller");


router.post("/", middleware.isLoggedIn, commentController.createComment);
router.put("/:commentID", middleware.checkCommentOwnership, commentController.editComment);
router.delete("/:commentID", middleware.checkCommentOwnership, commentController.deleteComment);
router.get("/:commentID/owner", commentController.isOwner);

module.exports = router;